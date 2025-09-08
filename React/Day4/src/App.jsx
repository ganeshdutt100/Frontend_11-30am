
// import './App.css'
import Cards from './components/Cards'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import './style.css'

function App() {

  let para1 = " Quo voluptas quod, magnam eligendi laborum modi id autem accusamus illo eum itaque nisi a necessitatibus dolor? Sequi minus vero iusto laboriosam."
  let para2 = " Quo voluptas quod, magnam eligendi laborum modi id autem accusamus illo eum itaque nisi a necessitatibus dolor? Sequi minus vero iusto laboriosam."
  let para3 = " Quo voluptas quod, magnam eligendi laborum modi id autem accusamus illo eum itaque nisi a necessitatibus dolor? Sequi minus vero iusto laboriosam."
  return (
    <>
     <Navbar title="GYM"/>
     <HeroSection/>
     <div className="cards">
      <Cards heading="Card 1" para={para1}/>
      <Cards heading="Card 2" para={para2}/>
      <Cards heading="Card 3" para={para3}/>

     </div>
     <Footer/>
    </>
  )
}

export default App
