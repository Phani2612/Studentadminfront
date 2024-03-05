// import React, { useState } from 'react'

// import Axios from "axios"



// function App() {

//  const [Addstudent , setAddstudent] = useState('')
//  function addstudentform()
//  {

//     Axios.get("http://localhost:7000/addstudent")

//     .then(function(output)
//     {
//        setAddstudent(output.data)
//     })

//     .catch(function(error)
//     {
//       console.log(error)
//     })

//  }


//   return (
//     <div>

//       <button onClick={addstudentform}>Add student</button>

//       <div dangerouslySetInnerHTML={{__html : Addstudent}}></div>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'
import '../addstudent.css'

import Axios from "axios"
import { useNavigate , Link } from 'react-router-dom'

import {SERVER_URL} from './myurl.js'
import App from '../App.js'
import '../App.css'
import Main from './main.js'

function Addstudent() {

  
    
 

  // const [stay , setstay] = React.useState(false)

  const Navigate = useNavigate()

  const [message , setMessage] = useState('')


  const[formdata , setFormdata] = useState([{

    name:"",
    rollno:"",
    age:"",
    city:""
  }])

  function collectdata(event)
  {
    // const{name , value} = event.target

    setFormdata({...formdata , [event.target.name]: event.target.value})
  }


  async function displaydata(event)
  {
      event.preventDefault()

      // console.log(event)

      // console.log(`${SERVER_URL}`)
      
     await Axios.post(`${SERVER_URL}/addstudent` , formdata).then(function(output)
     {
      console.log(output.data)
      setMessage(output.data)
      Navigate('/add')
      // props.data(true)
      // Navigate('/Add')
      
     }).catch(function(error)
     {
        console.log(error)
     })


     
     
  }


  return (
    <div>
      
      
     
      

      {/* <div style={{display:'flex' , flexDirection:'row' , flexWrap:'wrap' , justifyContent:'center' , justifyContent:'space-evenly', marginTop:'10px'}}>
      <Link class="btn btn-info" style={{fontSize:'30px' , textDecoration:'none' , color:'white'}}  to="/home">Home</Link>
  
  <Link class="btn btn-info" style={{fontSize:'30px' , textDecoration:'none' , color:'white'}}  to='/Add'>Add Student</Link>
  
  <Link class="btn btn-info" style={{fontSize:'30px' , textDecoration:'none' , color:'white'}}  to='/View'>View student</Link>
      </div> */}
    
    <App />
   
   <form id='addstudent' onSubmit={displaydata} >
        <h2 style={{textAlign:'center'}}>Student Registration</h2>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"  onChange={collectdata}/>

        <label for="rollno">Roll No:</label>
        <input type="number" id="rollno" name="rollno" onChange={collectdata}/>

        <label for="age">Age:</label>
        <input type="number" id="age" name="age"  onChange={collectdata}/>

        <label for="city">City:</label>
        <input type="text" id="city" name="city"  onChange={collectdata}/>

        <button type="submit">Submit</button>

        {message}

        
    </form>
          

    </div>
  )
}

export default Addstudent