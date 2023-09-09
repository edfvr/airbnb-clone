import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './data'

export default function App() {
  const cardData = Data.map(card => {
    return (
      <Card 
      id={item.id}
      img={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      title={card.title}
      price={card.price}
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
