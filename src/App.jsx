import './App.css'
import SmashRoster from './components/SmashRoster/SmashRoster'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div className='app-title-container'>
        <div className='title-bar'>
          <h1 className='app-title'>Random-Smashdown.site</h1>
        </div>
      </div>
      <SmashRoster />
      <Footer />
    </>
  )
}

export default App