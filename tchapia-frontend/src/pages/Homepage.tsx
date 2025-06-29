import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { PopularServices } from "../components/popular-services"
import { HowItWorks } from "../components/how-it-works"
import { FeaturedArtisans } from "../components/featured-artisans"
import { Footer } from "../components/footer"

export default function HomePage() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-neutral-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Hero />
            <PopularServices />
            <HowItWorks />
            <FeaturedArtisans />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
