const artisans = [
  {
    name: "Jean-Pierre K.",
    profession: "Plombier - 4,8 étoiles",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Fatima M.",
    profession: "Électricien - 4,9 étoiles",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Alain D.",
    profession: "Menuisier - 4,7 étoiles",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Awa S.",
    profession: "Peintre - 4,6 étoiles",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop&q=80",
  },
]

export function FeaturedArtisans() {
  return (
    <section>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Artisans en vedette
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {artisans.map((artisan, index) => (
            <div key={index} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                style={{ backgroundImage: `url("${artisan.image}")` }}
              />
              <div>
                <p className="text-[#141414] text-base font-medium leading-normal">{artisan.name}</p>
                <p className="text-neutral-500 text-sm font-normal leading-normal">{artisan.profession}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
