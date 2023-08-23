import logo from './logo.svg';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';
import { Component } from 'react';


/**
 *  클래스 안에 선언된 함수는 function 을 안붙여도 사용된다. 
 */

//클래스 방식
class App extends Component{
  render(){
    return (
      <div className="App">
        {/* <h1>Hello World!</h1>
        Hello, React! */}
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>  
    );
  }
}

// class App extends Component{
//   render(){
//     var test = 'React!';
//     return (
//       <div className="App">
//         <h1>Hello, {test}</h1>
//       </div>  
//     );
//   }
// }

//함수방식 
// function App() {
//   var variable = 'World ~ ! ';

//   return (
//     <div className="App">
//       <h1>Hello {variable}</h1>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

export default App;
