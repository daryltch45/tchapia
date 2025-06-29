const services = [
  {
    name: "Plomberie",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop&q=80"
  },
  {
    name: "Électricité", 
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop&q=80"
  },
  {
    name: "Menuiserie",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&q=80"
  },
  {
    name: "Peinture",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=400&fit=crop&q=80"
  },
  {
    name: "Nettoyage",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop&q=80"
  },
]

export function PopularServices() {
  return (
    <section>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
        Services populaires
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: `url("${service.image}")` }}
            />
            <p className="text-[#141414] text-base font-medium leading-normal">{service.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
