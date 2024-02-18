import React, { useState } from 'react'
import './LoginSignup.css'
import email from '../Assets/email.ico'
import password from '../Assets/password.ico'
import person from '../Assets/person.ico'


const LoginSignup =()=>
{
    const [action,setAction]=useState("Sign Up")
    return(
        <div className='Container'>
            <div className='header'>
                <div className='text'>{action}   </div>
                    
             

                <div className='underline'></div>

            </div>

        <div className='inputs'>

            {action==="Login"?<div></div>:<div className='input'>
                <img src ={person}  alt =" " style={{ width: '16px', height: '16px' }} />
                <input type ="text" placeholder='name'/>
             </div>
}
            
             <div className='input'>
                <img src ={email}  alt =" " style={{ width: '16px', height: '16px' }}/>
                <input type ="email" placeholder='Email-id'/>
             </div>

             <div className='input'>
                <img src ={password}  alt =" " style={{ width: '16px', height: '16px' }}/>
                <input type ="password" placeholder='password'/>
             </div>

        </div>
        {action==="Sign Up"?<div></div>:   <div className="forgot-password">  forgot Password <span> Clcik here</span></div>} 
      

        <div className='Submit-container'>

            <div className={action==="Login" ?"submit gray":"submit"} onClick={ ()=>{ setAction("Sign Up")}}>Sign-Up  </div>
            <div className={action==="Sign Up" ? "submit gray":"submit"} onClick={()=> {setAction ("Login")}}> Login</div>


        </div>
        </div>
    )
}

export default LoginSignup
