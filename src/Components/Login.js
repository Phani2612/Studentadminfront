// import React, { useContext } from 'react'
// import '../App.css'
// import {Link, Routes , Route , useNavigate} from 'react-router-dom'
// import Register from './Register'
// import Axios from 'axios'
// import { SERVER_URL } from './myurl'
// import { Mybox } from './Parent'



// function Login(props) {

//   // const [output , Setoutput ] = React.useState(false)


  
//   const Navigate = useNavigate()

//   const [change , setchange] = React.useState()

//   const [data , setdata ] = React.useState({

//         username:'',
//         password:''
//   })

 

//   function collectInfo(event)
//   {
//     // const {name,value} = event.target

//     // console.log(name,value)

//     setdata({...data,[event.target.name] : event.target.value})
//   }

//   function collectData(event)
//   {
       
//        event.preventDefault()

//        Axios.post(`${SERVER_URL}/Login` , data).then(function(output)
//        {

//         console.log(output.data)
       
      
//         if(output.data === false)
//         {
//             Navigate('/Login')
//         }

       
//         if(output.data === true)
//         {
//           const {token} = output.data
//           console.log(token)
//           localStorage.setItem('token', token);
//           Navigate('/home')

//           props.ss(true)
//         }

//         if(output.data === 'register')
//         {
//           Navigate('/Register')
//         }


         

//         // if(output.data)
//         // {
//         //      props.ss('App')
//         // }

//         // else{

//         //   props.ss('Register')
//         // }
        
      
//        }).catch(function(error)
//        {
//         console.error(error)
//        })
//   }


    
//   return (
//     <div>

// <Link to='/' class="btn btn-primary">Home</Link>

// <div class="login-container">
//     <h2>Login</h2>
//     <form action="#" onSubmit={collectData}>
//       <div class="form-group">
//         <label for="username">Username:</label>
//         <input type="text" id="username" name="username" required onChange={collectInfo}/>
//       </div>
//       <div class="form-group">
//         <label for="password">Password:</label>
//         <input type="password" id="password" name="password" onChange={collectInfo} required/>


//       </div>
//       <button style ={{width:'100px', marginLeft:'700px'}} type="submit">Login</button>

     
//       <Link  to='/Register'>New user?Sign up</Link>


      
//     </form>
//   </div>


//     </div>
//   )
// }

// export default Login
import React, { useContext } from 'react';
import '../App.css';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Register from './Register';
import Axios from 'axios';
import { SERVER_URL } from './myurl';
import { Mybox } from './Parent';

function Login(props) {
    const Navigate = useNavigate();
    const [data, setdata] = React.useState({
        username: '',
        password: ''
    });

    function collectInfo(event) {
        setdata({ ...data, [event.target.name]: event.target.value });
    }

    function collectData(event) {
        event.preventDefault();
        Axios.post(`${SERVER_URL}/Login`, data).then(function(response) {
            const output = response.data;
            console.log(output)
            if (output === false) {
                window.location.pathname = '/Login'
            } else if (output === true) {
                // Handle case where token is not received
                Navigate('/home')
                props.ss(true)
            } else if (output === 'register') {
                Navigate('/register');
                // props.ss(true);
                // localStorage.setItem('token', output.token);
            }
        }).catch(function(error) {
            console.error(error);
        });
    }

    return (
        <div>
            <Link to='/' className="btn btn-primary">Home</Link>
            <div className="login-container">
                <h2>Login</h2>
                <form action="#" onSubmit={collectData}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required onChange={collectInfo} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" onChange={collectInfo} required />
                    </div>
                    <button style={{ width: '100px', marginLeft: '700px' }} type="submit">Login</button>
                    <Link to='/Register'>New user? Sign up</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
