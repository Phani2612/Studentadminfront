import React from 'react'

import {BrowserRouter , Route , Routes , Link, useNavigate} from 'react-router-dom'

function Main(props) {

  const Navigate = useNavigate()

  if(props.info === true)
  {
     window.location.pathname = '/Login'
  }


  return (
    <div>


<Link style={{marginLeft:'1350px', width:'100px', height:'40px', marginTop:'10px', textAlign:'center'}} to = '/Login' class="btn btn-primary">Login</Link>

<Link to='/Register' style={{marginLeft:'1200px', width:'100px', height:'40px', marginTop:'-70px', textAlign:'center'}}  class="btn btn-success">Register</Link>

<Link to='/home' style={{marginLeft:'1000px', width:'100px', height:'40px', marginTop:'-120px', textAlign:'center'}}  class="btn btn-success">Home</Link>

<h1 style={{fontFamily:'monospace', marginLeft:'200px', marginTop:'80px', fontSize:'70px'}}><b>Welcome to StudenZ Application</b></h1>


<p style={{fontFamily:'cursive', fontSize:'40px', marginTop:'20px',textAlign:'center'}}>A simple place , where you can add and delete and update the details</p>

    </div>
  )
}

export default Main