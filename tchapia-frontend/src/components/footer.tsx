import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
          <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
            <a className="text-neutral-500 text-base font-normal leading-normal min-w-40" href="#">
              Qui sommes-nous ?
            </a>
            <a className="text-neutral-500 text-base font-normal leading-normal min-w-40" href="#">
              Contact
            </a>
            <a className="text-neutral-500 text-base font-normal leading-normal min-w-40" href="#">
              Conditions d'utilisation
            </a>
            <a className="text-neutral-500 text-base font-normal leading-normal min-w-40" href="#">
              Politique de confidentialité
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-neutral-500 hover:text-neutral-700">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-neutral-500 hover:text-neutral-700">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-neutral-500 hover:text-neutral-700">
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-neutral-500 text-base font-normal leading-normal">© 2024 Tchapia. Tous droits réservés.</p>
        </footer>
      </div>
    </footer>
  )
}
