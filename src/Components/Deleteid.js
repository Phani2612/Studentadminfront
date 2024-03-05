import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'
import  {SERVER_URL}  from './myurl.js'

function Deleteid() {

    const [getdata , Setgetdata] = React.useState([])

    const {id} = useParams()

    const Navigate = useNavigate()

    
    
      Axios.delete(`${SERVER_URL}/delete/data/${id}`).then(function(output)
    {

      Setgetdata(output.data)
      Navigate('/View')

    }).catch(function(error)
    {
          console.log(error)
    })
  


  return (
    <div>
       
       {getdata}

    </div>
  )
}

export default Deleteid