import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<nav className="navbar navbar-expand-sm bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>



<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://ganeshdutt.netlify.app/GaneshNewImagePhoneView2.png" className="d-block w-100" alt="https://ganeshdutt.netlify.app/GaneshNewImagePhoneView2.png" />
    </div>
    <div className="carousel-item">
      <img src="https://ganeshdutt.netlify.app/GaneshNewImagePhoneView2.png" className="d-block w-100" alt="https://ganeshdutt.netlify.app/GaneshNewImagePhoneView2.png" />
    </div>
    <div className="carousel-item">
      <img src="https://ganeshdutt.netlify.app/GaneshNewImagePhoneView2.png" className="d-block w-100" alt="https://ganeshdutt.netlify.app/GaneshNewImagePhoneView2.png" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="container">
  <div className="row">
   <div className="col">
    <h1>Hello World</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto et voluptas quia recusandae neque minus ipsam nemo cumque iste molestias quos doloremque nam unde, consequatur eum iure dolorum maiores harum.</p>
   </div>
   <div className="col">
     <img src="https://ganeshdutt.netlify.app/GaneshNewImagePhoneView2.png" className="d-block w-100 rounded" alt="https://ganeshdutt.netlify.app/GaneshNewImagePhoneView2.png" />
   </div>
  </div>
</div>


    </>
  )
}

export default App
