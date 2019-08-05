import React, { Component } from 'react';


export default class Add extends Component{
    state={
        title=""
    }

 item=(e)=>{
     this.setState({e.target.value })
 } 
    
render (){
return(    
<>
<form>
<input type="text" onChange={this.item} ></input>



<button onClick={this.props.added.bind(this,)} >Add</button>
</form>











</>
)}}