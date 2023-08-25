import React, { Component } from 'react';

class TOC extends Component{
    render(){
      console.log("TOC Render!!");
      var lists = []; 
      var data  = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
        <li key={data[i].id}>
          <a href={"/contents/"+data[i].id}
             onClick={function(e){
                e.preventDefault();
                this.props.onChangePage();
             }.bind(this)}
          >{data[i].title}</a>
        </li>);
        i+=1;
      }
      return(
        <nav>
            <ul>
                {/* <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li> */}
                {lists}
            </ul>    
        </nav>
      );
    }
  }

  export default TOC;