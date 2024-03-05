import React, { createContext, useEffect } from 'react'
import Register from './Register'
import Login from './Login'
import App from '../App'
import {BrowserRouter, Link , Route , Routes} from 'react-router-dom'
import Addstudent from './Addstudentform'
import Readparticular from './Readparticular'
import Viewstudent from './Viewstudent'
import Deleteid from './Deleteid'
import UpdateStudent from './UpdateStudent'
import Main from './main'


export const Mybox = createContext();



function Parent() {


    const [showData, setShowData] = React.useState(function()
    {
             const Mystoreddata = localStorage.getItem('showData')

             return Mystoreddata ? JSON.parse(Mystoreddata) : false
    });
    console.log("My value is",showData)
    
    
    useEffect(function()
    {  
        
      localStorage.setItem('showData' , JSON.stringify(showData))

    },[showData])
    

  return (
   <BrowserRouter>

   
   
   
   <div>
        
        

   
        


        
        
        <Routes>
               
               <Route path='/' element={<Main/>}></Route>
               
               <Route path='/Login' element={<Login  ss={setShowData}/>}></Route>

               <Route path='/Register' element = {<Register />}></Route>

               {showData?
(<Route path='/home' element={<App ss = {setShowData}   />}></Route>):(<Route path='/home' element={<Main info = {true}/>}></Route>)}

               {showData ? <Route path='/Add' element = {<Addstudent/>}></Route> :<Route path='/Add' element={<Main info = {true}/>}></Route> }

               {showData ? <Route path='/View' element={<Viewstudent/>}>

 


<Route path="student/:id" element={<Readparticular  />} ></Route>

<Route path='delete/:id' element={<Deleteid />}></Route>

<Route path='update/:id' element={<UpdateStudent />}></Route>

</Route> :<Route path='/View' element={<Main info = {true}/>}></Route> }

               

               {/* <Route path='/Add' element={<Addstudent  data = {showData} />}></Route>

               <Route path='/View' element={<Viewstudent  ss = {showData} />}>

                

              
                                  <Route path="student/:id" element={<Readparticular  />} ></Route>

                                  <Route path='delete/:id' element={<Deleteid />}></Route>

                                  <Route path='update/:id' element={<UpdateStudent />}></Route>

                                  </Route> */}
        </Routes>

         



    </div>
   
   
   </BrowserRouter>
  )
}

export default Parent




// import React, { createContext, useEffect, useState } from 'react';
// import Register from './Register';
// import Login from './Login';
// import App from '../App';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Addstudent from './Addstudentform';
// import Readparticular from './Readparticular';
// import Viewstudent from './Viewstudent';
// import Deleteid from './Deleteid';
// import UpdateStudent from './UpdateStudent';
// import Main from './main';

// export const Mybox = createContext();

// function Parent() {
//   const [showData, setShowData] = useState(() => {
//     // Initialize the state with the value from localStorage or default to false
//     const storedValue = localStorage.getItem('showData');
//     return storedValue ? JSON.parse(storedValue) : false;
//   });

//   useEffect(() => {
//     // Save the state to localStorage whenever it changes
//     localStorage.setItem('showData', JSON.stringify(showData));
//   }, [showData]);

//   return (
//     <BrowserRouter>
//       <div>
//         <Routes>
//           <Route path='/' element={<Main />} />
//           <Route path='/Login' element={<Login ss={setShowData} />} />
//           <Route path='/Register' element={<Register />} />
//           {showData ? (
//             <Route path='/home' element={<App ss={setShowData} />} />
//           ) : (
//             <Route path='/home' element={<Login ss={setShowData} />} />
//           )}
//           {showData ? (
//             <Route path='/Add' element={<Addstudent data={setShowData} />} />
//           ) : (
//             <Route path='/Add' element={<Main info={true} />} />
//           )}
//           <Route path='/View' element={<Viewstudent ss={showData} />}>
//             <Route path='student/:id' element={<Readparticular />} />
//             <Route path='delete/:id' element={<Deleteid />} />
//             <Route path='update/:id' element={<UpdateStudent />} />
//           </Route>
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default Parent;
