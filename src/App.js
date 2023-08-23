import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Subject extends Component{
  render(){
    return(
        <header>
            {/* <h1>WEB</h1> */}
            {/* props 는 html tag 의 attribute 개념 */}
            <h1>{this.props.title}</h1>
            {this.props.sub}
            world wide web!
        </header>
    );
  }
}

class TOC extends Component{
  render(){
    return(
      <nav>
          <ul>
              <li><a href="1.html">HTML</a></li>
              <li><a href="2.html">CSS</a></li>
              <li><a href="3.html">JavaScript</a></li>
          </ul>    
      </nav>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <article>
            {/* <h2>HTML</h2>
            HTML is HyperText Markup Language. */}
            <h2>{this.props.title}</h2>
            {this.props.title}
      </article>
    );
  }
}

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
