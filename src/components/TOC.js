import React, { Component } from 'react';

class TOC extends Component{
    shouldComponentUpdate(newProps, newState){
      console.log('===>Toc render shouldComponentUpdate'    
        ,newProps.data
        ,this.props.data
      );
      if(this.props.data === newProps.data){
        return false;
      }
      return true;
    }
    render(){
      console.log("TOC Render!!");
      var lists = []; 
      var data  = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
        <li key={data[i].id}>
          <a 
             href={"/contents/"+data[i].id}
             data-id={data[i].id}
             onClick={function(id, num, e){   
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
             }.bind(this, data[i].id, 10)}
             //bind this 이후 파라미터에 값을 세팅하면 function 
             //앞자리부터 파라미터를 추가로 받게해준다. 기존에 입력되어있던애들은 뒤로 하나씩 밀림 
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