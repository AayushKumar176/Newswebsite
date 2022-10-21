
// import './App.css';

// import React, { Component } from 'react'
// import Navbar from './Components/Navbar';
// import News from './Components/News';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";

// export default class App extends Component {
 
//   render() {
//     return (

//       <div>
//         <Router>
//         {/* Hello my first class based component {c} */}
//        <Navbar />
//        {/* <News pageSize={5} country="in" category="science"/> */}
//        <Switch>
//           <Route exact path="/"><News key="general" pageSize={5} country="in" category="general"/></Route>
//           <Route exact path="/business"><News key="business" pageSize={5} country="in" category="business"/></Route>
//           <Route exact path="/entertainment"><News key="entertainment" pageSize={5} country="in" category="entertainment"/></Route>
//           <Route exact path="/general"><News key="general" pageSize={5} country="in" category="general"/></Route>

//           <Route exact path="/health"><News key="health" pageSize={5} country="in" category="health"/></Route>
//           <Route exact path="/science"><News key="science" pageSize={5} country="in" category="science"/></Route>
//           <Route exact path="/sports"><News key="sports" pageSize={5} country="in" category="sports"/></Route>
//           <Route exact path="/technology"><News key="technology" pageSize={5} country="in" category="technology"/></Route>
          
//         </Switch>
//        </Router>
//       </div>
//     )
//   }
// }

 import './App.css';

 import React, { useState } from 'react'
 import Navbar from './Components/Navbar';
 import News from './Components/News';

import {BrowserRouter,Route,Routes,} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize=6;
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  // state={
  //   progress:0
  // }
  // setProgress=(progress)=>{
  //   setState({progress:progress})
  // }
 
    return (
      <div>
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
      height={3}
        color='#f11946'
        progress={progress}
      
      />
        <Routes>
          <Route exact path='/' element= { <News setProgress={setProgress}  apiKey={apiKey} key="Home" pageSize={pageSize} country="in" category="general"/> }/>
          <Route exact path='/general' element= { <News setProgress={setProgress} apiKey={apiKey} key="Home" pageSize={pageSize} country="in" category="general"/> }/>
          <Route exact path='/entertainment' element= { <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/> }/>
          <Route exact path='/business' element= { <News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/> }/>
          <Route exact path='/health' element= { <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/> }/>
          <Route exact path='/science' element= { <News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/> }/>
          <Route exact path='/sports' element= { <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/> }/>
          <Route exact path='/technology' element= { <News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/> }/>
        </Routes> 
      </BrowserRouter>
      </div>
    )
  
}

export default App
 