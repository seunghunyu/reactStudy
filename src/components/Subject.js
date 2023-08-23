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
export default Subject;