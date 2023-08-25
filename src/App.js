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
          onChangePage={function(e){
            this.setState({mode:'welcome'})
          }.bind(this)}  
        </Subject>
        {/* 일반적인 자바스크립트에서는 onclick 소문자로 입력 
        하지만 리액트에서는 명명규칙상 onClick으로 사용 */}
        {/* <header>
            <h1><a href="/" onClick={function(e) {
                
                console.log(e);
                e.preventDefault(); // 화면 reload 되는 부분을 방지
                
                // this.state.mode = 'welcome' 호출시 에러 -> 이벤트 안에서 this에 아무것도 세팅 되어있지않기에 에러
                // -> 함수가 끝나는 시점에 .bind(this) 코드 추가
                // bind를 썼어도 this.state.mode 에 직접적인 값을 세팅을 하면 해당 값은 바뀌어도 
                // state 의 변경사항을 알지 못하기에 아무 이벤트가 일어나지 않는다. 그렇기에 setState를 사용 -> this.state 방식으로 세팅할경우 생성자에서는 값이 제대로 먹힌다.
                console.log(this.state.mode);
                if(this.state.mode == 'welcome'){
                  this.setState({
                    mode:'read'
                  });
                }else{
                  this.setState({
                    mode:'welcome'
                  });
                }
                // debugger; 해당 코드 호출시점에 breakpoint 거릶
            }.bind(this)}>{this.state.subject.title}</a></h1>
            {this.state.subject.sub}
        </header> */}
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
