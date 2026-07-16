import { useEffect, useRef, type RefObject } from 'react'
import { trackEvent, type TrackEventName } from '@/lib/tracking'

export function useInViewTrack(
  eventName: TrackEventName,
  properties: Record<string, string | number | boolean | undefined> = {},
): RefObject<HTMLDivElement | null> {
  const ref = useRef<HTMLDivElement | null>(null)
  const fired = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || fired.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true
          trackEvent(eventName, properties, { once: true, onceKey: eventName })
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(el)
    return () => observer.disconnect()
    // properties is intentionally omitted to avoid re-binding on object identity
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventName])

  return ref
}
