// import logo from './logo.svg';
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
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      subject : {title : 'WEB', sub:'world wide web!'},
      welcome : {title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id : 1, title:'HTML', desc:'HTML is for information'},
        {id : 2, title:'CSS', desc:'CSS is for design'},
        {id : 3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render(){
    console.log("App Render!!");
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <h1>Hello World!</h1>
        Hello, React! */}
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        {/* <Subject title="React" sub="For UI"></Subject> */}
        <TOC data={this.state.contents}></TOC>
        {/* <Content 
          title="HTML"
          desc="HTML is HyperText Markup Language" >
        </Content> */}
        <Content title={_title} desc={_desc}></Content>
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
