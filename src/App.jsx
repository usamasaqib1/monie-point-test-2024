import './App.css'
import Statistics from './Components/statistics/statistics'
import Navbar from './Components/header/header'
import Hero from './Components/hero/hero'
import SystemGrowth from './Components/systemGrowth/systemGrowth'
import ScreenDemo from './Components/screenDemo/screenDemo'
import DataControlParent from './Components/dataControlParent/dataControlParent'
import GetStarted from './Components/getStarted/getStarted'
import Footer from './Components/footer/footer'

function App() {

  return (
    <div className="w-full mt-4">
      <Navbar />
      <div className="flex flex-col mt-20 gap-28">
        <Hero />
        <Statistics />
        <SystemGrowth />
        <ScreenDemo />
        <DataControlParent />
        <GetStarted />
      </div>
      <Footer />
    </div>
  );
}

export default App
