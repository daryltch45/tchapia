import { Plus, MessageSquareQuote, Handshake, Star } from "lucide-react"

const steps = [
  {
    icon: Plus,
    title: "Publier une offre d'emploi",
    description: "Décrivez votre projet et vos exigences.",
  },
  {
    icon: MessageSquareQuote,
    title: "Obtenir des devis",
    description: "Recevez des devis d'artisans qualifiés.",
  },
  {
    icon: Handshake,
    title: "Embaucher et payer",
    description: "Embauchez votre artisan préféré et payez en toute sécurité.",
  },
  {
    icon: Star,
    title: "Laisser un avis",
    description: "Laissez un avis pour aider les autres.",
  },
]

export function HowItWorks() {
  return (
    <section>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Comment ça fonctionne
      </h2>
      <div className="flex flex-col gap-10 px-4 py-10 @container">
        <h1 className="text-[#141414] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
          Des étapes simples pour faire votre travail
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-1 gap-3 rounded-lg border border-[#dbdbdb] bg-neutral-50 p-4 flex-col"
            >
              <div className="text-[#141414]">
                <step.icon size={24} />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#141414] text-base font-bold leading-tight">{step.title}</h2>
                <p className="text-neutral-500 text-sm font-normal leading-normal">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
