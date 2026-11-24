import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { RowsGallery } from './components/RowsGallery'
import { Craft } from './components/Craft'
import { Prices } from './components/Prices'
import { Booking } from './components/Booking'
import { Footer } from './components/Footer'
import './styles/site.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RowsGallery />
        <Craft />
        <Prices />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
