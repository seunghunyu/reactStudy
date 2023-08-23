import React, { Component } from 'react';
class Content extends Component{
    render(){
      return(
        <article>
              {/* <h2>HTML</h2>
              HTML is HyperText Markup Language. */}
              <h2>{this.title}</h2>
              {this.props.title}
        </article>
      );
    }
  }
  export default Content;