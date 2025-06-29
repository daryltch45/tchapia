import { Search } from "lucide-react"

export function Hero() {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=600&fit=crop&q=80")`,
          }}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Trouvez des artisans de confiance au Cameroun
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              Connectez-vous avec des professionnels qualifiés pour tous vos besoins de services à domicile.
            </h2>
          </div>
          <div className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div className="text-neutral-500 flex border border-[#dbdbdb] bg-neutral-50 items-center justify-center pl-[15px] rounded-l-xl border-r-0">
                <Search size={20} />
              </div>
              <input
                placeholder="Rechercher des services (par exemple, plomberie, électricité)"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#dbdbdb] bg-neutral-50 focus:border-[#dbdbdb] h-full placeholder:text-neutral-500 px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
              />
              <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#dbdbdb] bg-neutral-50 pr-[7px]">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-black text-neutral-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">Rechercher</span>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}