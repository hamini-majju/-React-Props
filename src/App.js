//import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample'
//import FuncProps from './FuncProps'
//import StateExample from './StateExample'
//import DemoExample from './DemoExample'
//import Events from './Events'
//import JSX from './JSX'
import Home  from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound'

function App(){
  return(
          <section>
          <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
            </Routes>
            </BrowserRouter>
          {/*<PropsExample name="hamini" age="19"/>
          <PropsExample name="chinni" age="19"/>
          <h1>how are u</h1>
          <p>whats going on here</p>
          <img src="https://wallpaperaccess.com/full/1204217.jpg" width="30%" alt="pic1"/>
          <ClassComponent/> 
          <FuncProps carname="Range Rover" year="1996"/>
            <DemoExample price="1st price"/>  
            <Events/>
            <JSX/>
         <StateExample/>*/}
          </section>
    
      )
  }
  export default App;