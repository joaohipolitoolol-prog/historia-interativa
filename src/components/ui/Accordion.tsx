import { useId, useState } from 'react'
import { trackEvent } from '@/lib/tracking'

export type FaqItem = {
  question: string
  answer: string
}

type AccordionProps = {
  items: FaqItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  const toggle = (index: number, question: string) => {
    const next = openIndex === index ? null : index
    setOpenIndex(next)
    if (next !== null) {
      trackEvent('FAQOpened', { question, index })
    }
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`

        return (
          <div
            key={item.question}
            className="rounded-2xl border border-border bg-white overflow-hidden"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index, item.question)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[16px] sm:text-[17px] font-bold text-navy hover:bg-warm/60 transition-colors"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-soft text-orange text-xl leading-none transition-transform ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5"
            >
              <p className="text-[15px] sm:text-[16px] leading-relaxed text-muted">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
