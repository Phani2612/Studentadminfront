import Axios  from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import {SERVER_URL} from './myurl'

function Readparticular() {

const {id} = useParams()

console.log(id)


const [Show , SetShow]= React.useState([])

React.useEffect(function()
{
    Axios.get(`${SERVER_URL}/read/data/${id}`).then(function(output)
    {

        SetShow(output.data)
        
    }).catch(function(error)
    {
        console.log(error)
    })
},[])

return (


<div style={{position : "absolute" , left: "900px", top:'250px'}} >



   <table id='tableread' class="table table-success table-striped-columns" border='1px' >

 <thead>

<th>Name</th>

<th>Roll No</th>

<th>City</th>

<th>Age</th>

 </thead>

<tbody>

{

Show.map(function(i)
{
    return <tr>

      <td>{i.name}</td>

      <td>{i.rollno}</td>

      <td>{i.city}</td>

      <td>{i.age}</td>

    </tr>
})


}




</tbody>


   </table>

   


</div>



)

  
}

export default Readparticular

