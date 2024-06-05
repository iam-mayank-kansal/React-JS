import React from 'react'
import ReactDOM from 'react-dom/client'
import './Index.css'
import Navbar from './Component/Navbar'
import To_Do_List from './Component/To-Do-List'
import Calculator from './Component/Calculator'
const Main = () => {
  return (
    <>
      {/* <Navbar/> */}
      <To_Do_List/>
      <Calculator/>

    </>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
