import React from 'react'
import '../App.css'
import Axios from 'axios'
import Login from './Login'
import { Route , Routes, useNavigate , Link } from 'react-router-dom'
import Parent from './Parent'
import Main from './main'

function Register() {

     
    const Navigate = useNavigate()
  
    const [print , setprint] = React.useState(false)
    const [output , setoutput] = React.useState()
    const [data , setdata ] = React.useState({

        name:'',
        password:'',
        confirm:''

  })

  function collectinfo(event)

  {

    setdata({...data,[event.target.name] : event.target.value})
  }

  function collectdata(event)
  {

    event.preventDefault()

        // console.log(data)

        Axios.post('http://localhost:7001/Register', data).then(function(output)
        {

                
            setoutput(output.data)

            
            

           Navigate('/Login')

          

        }).catch(function(error)
        {
            console.error(error)
        })


  }

  


    
  return (
    <div >
       
<Link to='/' class="btn btn-primary">Home</Link>


<div class="container">
    <h2 style={{textAlign:'center', marginBottom:'25px'}}>Registration Form</h2>
    <form action="#" onSubmit={collectdata}>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" style={{marginLeft:'100px', width:'250px'}} required onChange={collectinfo}/>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" style={{marginLeft:'72px', width:'250px'}} required onChange={collectinfo}/>
      </div>
      <div class="form-group">
        <label for="confirm_password">Confirm Password:</label>
        <input type="password" id="confirm_password" name="confirm" style={{marginLeft:'12px', width:'250px'}} onChange={collectinfo} required/>
      </div>
      <button style={{width:'100px'}} type="submit">Register</button>
    </form>
  </div>

   

    </div>

    
  )
}

export default Register