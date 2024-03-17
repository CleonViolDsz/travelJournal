import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Journal from './components/Journal'
import Footer from './components/Footer'
import travelJournalData from './travelJournalData'

function App() {
  const [count, setCount] = useState(0)
  const [journal, setJournal] = useState(travelJournalData);

  const journals = journal.map(data=>{
    return <Journal 
      {...data}
    />
  })

  return (
    <>
      <Header />
      <Welcome />
      <section className='journal-list'>
      {journals}
      </section>
      <Footer />
    </>
  )
}

export default App
