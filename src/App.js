// import React from 'react'

// import {Link , BrowserRouter , Route , Routes} from "react-router-dom"

// import Addstudent from './Components/Addstudentform'
// import Viewstudent from './Components/Viewstudent'
// import UpdateStudent from './Components/UpdateStudent'
// import Readparticular from './Components/Readparticular'
// import Deleteid from './Components/Deleteid'
// import Register from './Components/Register'
// import './App.css'
// import Login from './Components/Login'

// function App() {
//   return (
//     <div>
   
// <BrowserRouter>



// <Link style={{fontSize:'20px' , textDecoration:'none'}}  to="/home">Home</Link>

// <Link style={{fontSize:'20px' , textDecoration:'none'}}  to='/Add'>Add Student</Link>

// <Link style={{fontSize:'20px' , textDecoration:'none'}}  to='/View'>View student</Link>

//           <Routes>

//                 <Route path='/home'></Route>

//                 <Route path='/Add' element={<Addstudent/>}></Route>

//                 <Route path='/View' element={<Viewstudent/>}>

              
//                                   <Route path="student/:id" element={<Readparticular />} ></Route>

//                                   <Route path='delete/:id' element={<Deleteid/>}></Route>

//                                   <Route path='update/:id' element={<UpdateStudent/>}></Route>
      


//                 </Route>

//           </Routes>
//       </BrowserRouter>



//     </div>
//   )
// }

// export default App


import React, { useContext } from 'react'

import {Link , BrowserRouter , Route , Routes, useNavigate} from "react-router-dom"

import Addstudent from './Components/Addstudentform'
import Viewstudent from './Components/Viewstudent'
import UpdateStudent from './Components/UpdateStudent'
import Readparticular from './Components/Readparticular'
import Deleteid from './Components/Deleteid'
import Register from './Components/Register'
import './App.css'
import Login from './Components/Login'

import Main from './Components/main'




function App(props) {




function logout()
{
    localStorage.removeItem('showData')
    window.location.pathname = '/'
}

 

   

  return (
    <div>
   <div style={{display:'flex' , flexDirection:'row' , flexWrap:'wrap' , justifyContent:'center' , justifyContent:'space-evenly', marginTop:'10px'}}>
  

  {/* <Link class="btn btn-info" style={{fontSize:'30px' , textDecoration:'none' , color:'white'}}  to="/home">Home</Link> */}
  
  <Link class="btn btn-info" style={{fontSize:'30px' , textDecoration:'none' , color:'white'}}  to='/Add'>Add Student</Link>
  
  <Link class="btn btn-info" style={{fontSize:'30px' , textDecoration:'none' , color:'white'}}  to='/View'>View student</Link>
  
  <Link class="btn btn-danger" onClick={function()
  {
    logout()
  }} style={{padding:'20px'}}>Logout</Link>

 
  
  </div>

 
          


                {/* <Route path='/home'></Route>

                <Route path='/Add' element={<Addstudent/>}></Route>

                <Route path='/View' element={<Viewstudent/>}>

              
                                  <Route path="student/:id" element={<Readparticular />} ></Route>

                                  <Route path='delete/:id' element={<Deleteid/>}></Route>

                                  <Route path='update/:id' element={<UpdateStudent/>}></Route>
      


                </Route> */}

         
     



    </div>
  )
}

export default App


