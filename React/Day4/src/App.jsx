
// import './App.css'
import Cards from './components/Cards'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ToDoList from './components/ToDoList'
import UseState from './components/UseState'
// import './style.css'

function App() {

  // let para1 = " Quo voluptas quod, magnam eligendi laborum modi id autem accusamus illo eum itaque nisi a necessitatibus dolor? Sequi minus vero iusto laboriosam."
  // let para2 = " Quo voluptas quod, magnam eligendi laborum modi id autem accusamus illo eum itaque nisi a necessitatibus dolor? Sequi minus vero iusto laboriosam."
  // let para3 = " Quo voluptas quod, magnam eligendi laborum modi id autem accusamus illo eum itaque nisi a necessitatibus dolor? Sequi minus vero iusto laboriosam."

  // let imgUrl = "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"


  // let imgUrl2 = "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww"  
  return (
    <>
     {/* <Navbar title="GYM"/>
     <HeroSection/>
     <div className="cards flex">
      <Cards heading="Card 1" para={para1} imgSrc={imgUrl}/>
      <Cards heading="Card 2" para={para2} imgSrc={imgUrl2}/>
      <Cards heading="Card 3" para={para3} imgSrc={imgUrl}/>

     </div>
     <Footer/> */}
     {/* <UseState/> */}
     <ToDoList/>
    </>
  )
}

export default App
