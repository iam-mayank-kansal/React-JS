import React from 'react'
import ReactDOM from 'react-dom/client'
import './Index.css'
import Navbar from './Component/Navbar'
import Header from './Component/Header'
import To_Do_List from './Component/To-Do-List'
import Calculator from './Component/Calculator'

// import { New, News ,show_props} from './Component/New'
// import { Show_props } from './Component/New'

import UseEffect from './Component/Useeffect'
import Service_Section from './Component/Service-sec'
import ContactHeader from './Component/Header'
const Main = () => {
  return (
    <>
      {/* <Navbar /> */}
      <ContactHeader/>
      {/* <To_Do_List/> */}
      {/* <Calculator/> */}
      {/* <New /> */}
      {/* <News /> */}
      {/* <Show_props/> */}
      {/* <UseEffect/> */}
      {/* <Service_Section /> */}

    </>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
