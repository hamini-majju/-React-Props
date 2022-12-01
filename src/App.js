//import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample'
import FuncProps from './FuncProps'
import StateExample from './StateExample'
import DemoExample from './DemoExample'
import Events from './Events'

function App(){

  return(
          <section>
          {/*<PropsExample name="hamini" age="19"/>
          <PropsExample name="chinni" age="19"/>
          <h1>how are u</h1>
          <p>whats going on here</p>
          <img src="https://wallpaperaccess.com/full/1204217.jpg" width="30%" alt="pic1"/>
          <ClassComponent*/}  
          <FuncProps carname="Range Rover" year="1996"/>
          <StateExample/>
          <DemoExample price="1st price"/>    
          <Events/>
          </section>
    
      )
  }
  export default App;