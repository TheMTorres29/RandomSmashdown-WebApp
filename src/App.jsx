import './App.css'
import SmashRoster from './components/SmashRoster/SmashRoster'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div className='app-title-container'>
        <h1 className='app-title'>Random Smashdown</h1>
        <p>[ refresh to restart ]</p>
        <p></p>
      </div>
      <SmashRoster />
      <Footer />
    </>
  )
}

export default App