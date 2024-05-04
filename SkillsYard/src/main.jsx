import React from 'react'
import ReactDOM from 'react-dom/client'
import './Index.css'
// import Hello from './Index.jsx'
// import './index.css'
import Navbar from './Component/Navbar'
const Main = () => {
  return (
    <>
      {/* <Hello /> */}
      <Navbar/>
    </>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
