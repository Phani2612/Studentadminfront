import React, { useState } from 'react'
import Axios from "axios"
import UpdateStudent from './UpdateStudent'
import { Link, Navigate, Outlet,Route , Routes, useNavigate} from 'react-router-dom'
import Readparticular from './Readparticular'
import {SERVER_URL}  from './myurl.js'
import App from '../App.js'
import Main from './main.js'




function Viewstudent() {

  const Navigate = useNavigate()
  const [display , SetDisplay] = useState([])



    React.useEffect( function()
    {
      Axios.get(`${SERVER_URL}/Viewstudent`).then(function(output)
    {

      // if(output.data === 'Login')
      // {
      //     Navigate('/Login')
      // }

      // else{
       
      //   SetDisplay(output.data)

      // }

      SetDisplay(output.data)

      // console.log(output.data)

      // SetDisplay(output.data)

    }).catch(function(error)
    {
          console.log(error)
    })
    },[])

    // SetDisplay(Result.data)
    




  return (

    
<div className='outer'>

{/* <div style={{display:'flex' , flexDirection:'row' , flexWrap:'wrap' , justifyContent:'center' , justifyContent:'space-evenly', marginTop:'10px'}}>
      <Link class="btn btn-info" style={{fontSize:'30px' , textDecoration:'none' , color:'white'}}  to="/home">Home</Link>
  
  <Link class="btn btn-info" style={{fontSize:'30px' , textDecoration:'none' , color:'white'}}  to='/Add'>Add Student</Link>
  
  <Link class="btn btn-info" style={{fontSize:'30px' , textDecoration:'none' , color:'white'}}  to='/View'>View student</Link>
      </div> */}

<App/>

<div className='table'  >


<table id='table1' class="table table-success table-striped-columns" style={{width:"800px"}}>
  
<thead style={{textAlign:"center"}}>

  {/* <th> RollNo</th> */}

  <th>Name</th>

  <th>Action 1</th>

  <th>Action 2</th>

  <th>Action 3</th>

  {/* <th>Age</th>

  <th>City</th> */
  
  
  }

</thead>

<tbody style={{textAlign:"center" }}>

{
    

     display.map(function(i)
     {

       return <tr >

        {/* <td>{i.rollno}</td> */}

        <td >{i.name}</td>

        <td ><Link to= {`student/${i.rollno}`} class="btn btn-lg btn-success">Read</Link></td> 

        <td><Link to= {`update/${i.rollno}`} class="btn btn-lg btn-primary" >Update</Link></td>

        <td><Link to= {`delete/${i.rollno}`} class="btn btn-lg btn-danger" >Delete</Link></td>



        {/* <td>{i.age}</td>

        <td>{i.city}</td> */}
        
        
       </tr>

       


     })

  
}


<Outlet/>

</tbody>




</table>

  


</div>




</div>


  )


     
}

export default Viewstudent
