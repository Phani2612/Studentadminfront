import React, { useState } from 'react'

import Axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

import {SERVER_URL}  from './myurl.js'



function UpdateStudent() {

    const [myname, setName] = React.useState('')
    const [myroll , setRoll] = React.useState()
    const [myage , setAge] = React.useState()
    const [mycity,setCity] = React.useState('')

    const {id} = useParams()
    console.log(id)

    const Navigate = useNavigate()

    // React.useEffect(function()
    // {
    //   Axios.get(`${SERVER_URL}/update/${id}`).then(function(output)
    //   {

    //     console.log(output.data)
    //      output.data.map(function(i)
    //      {

    //       setName(i.name)

    //      setAge(i.age)

    //      setCity(i.city)

    //      setRoll(i.rollno)

         

    //      })

      
       

    //   }).catch(function(error)
    //   {
    //         console.log(error)
    //   })
    // },[])

    const[formdata , setFormdata] = useState({

      myname:"",
      myrollno:"",
      myage:"",
      mycity:""
    })
  
    function collectdata(event)
    {
      // const{name , value} = event.target
      // console.log('i am here')

      // console.log(event)
      setFormdata({...formdata , [event.target.name]: event.target.value})
    }

   async function collect(event)
    {      event.preventDefault()

           const result =  await Axios.patch(`${SERVER_URL}/update/${id}` , formdata)

           Navigate('/View')
    }


  return (
    <div >


             
<form onSubmit={collect}>
        <h2>Student Registration</h2>
        <label for="name">Name:</label>
        <input type="text" id="name" name="myname" required onChange={collectdata} />

        <label for="rollno">Roll No:</label>
        <input type="number" id="rollno" name="myrollno"   disabled />

        <label for="age">Age:</label>
        <input type="number" id="age" name="myage" required  onChange={collectdata} />

        <label for="city">City:</label>
        <input type="text" id="city" name="mycity" required   onChange={collectdata}/>

        <button type="submit">Submit</button>


      
    </form>

    
              
              



            
    </div>
  )
}

export default UpdateStudent