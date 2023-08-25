import { Component } from 'react';

class Subject extends Component{
  render(){
    console.log("Subject Render!!")
    return(
        <header>
            {/* <h1>WEB</h1> */}
            {/* props 는 html tag 의 attribute 개념 */}
            <h1><a href="/" onClick={function(e){
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}>{this.props.title}</a></h1>
            {this.props.sub}
        </header>
    );
  }
}
export default Subject;