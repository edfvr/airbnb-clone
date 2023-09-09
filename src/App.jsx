import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './data'

export default function App() {
  const cardData = Data.map(item => {
    return (
      <Card 
      id={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards--list'>
        {cardData}
      </section>
    </div>
  )
}
