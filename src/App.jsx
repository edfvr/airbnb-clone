import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './data'

export default function App() {
  const cardData = Data.map(item => {
    return (
      <Card 
      key={item.id}
      item={item}
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
