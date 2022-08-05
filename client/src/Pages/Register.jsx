import React from 'react'
import { useState } from 'react'
import "./Login/Login.css"
import axios from 'axios'
import swal from "sweetalert"
import { useNavigate } from 'react-router-dom'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

function Register() {
    const navigate=useNavigate();
    const [contacts,setContacts]=useState({
        name:"",
        email:"",
        mobile:"",
        address:"",
        role:"",
        password:"",
        repassword:"",

    })

    const [erroruname,setErroruname]=useState(false)
    const [erroremail,setErroremail]=useState(false)
    const [errormobile,setErrormobile]=useState(false)
    const [errortype,setErrortype]=useState(false)
    const [erroraddress,setErroraddress]=useState(false)
    const [errorpassword,setErrorpassword]=useState(false)
    const [errorpass,setErrorpass]=useState(false)
    const [errorpassw,setErrorpassw]=useState(false)


    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setContacts({
            ...contacts,
            [name]:value
        })
        console.log(contacts);
    }


    const vaidation=(e)=>{
        e.preventDefault();
        setErroruname(false)
        setErroremail(false)
        setErrormobile(false)
        setErroraddress(false)
        setErrortype(false)
        setErrorpassword(false)
        setErrorpass(false)
        setErrorpassw(false)
        console.log(contacts);
      if(contacts.name==="") {
        setErroruname(true)
      }
      else if(contacts.email===""){
        setErroremail(true)
      }
      else if(contacts.mobile===""){
        setErrormobile(true)
      }
      else if(contacts.address===""){
        setErroraddress(true)
      }
      else if(contacts.role===""){
        setErrortype(true)
      }
      else if(contacts.password===""){
        setErrorpassword(true)
      }
      else if(contacts.repassword===""){
        setErrorpass(true)
      }
      else if(contacts.password!==contacts.repassword){
        setErrorpassw(true)
      }
      else {
        console.log(contacts);
        axios.post("http://localhost:5000/register/user-register",contacts)
      .then((response) => {
          console.log("Result========",response)
          if(response.data.success==true)
          {
            
            swal(response.data.message);
            navigate('/login')
          }
          else{
              swal(response.data.message);
          }
   }).catch((err)=>{
    swal(err.response.data.message);
   })
  
  
      }
    }
  return (<>
    <Nav/>
    <div className='loginpage'>
    <div className="loginmain">

    <div className="logincontainer">
        <form onSubmit={vaidation} className="appointment-form" id="appointment-form">
            <h2>Register Here</h2>
            <div className="form-group-1">
                <input type="text" name="name" value={contacts.name} onChange={handleInputChange} id="title" placeholder="Your Name"  />
                {erroruname?<span className='errormsg'>Please Enter User Name</span>:null}

                <input type="email" name="email" value={contacts.email} onChange={handleInputChange} id="name" placeholder="Your Email"  />
                {erroremail?<span className='errormsg'>Please Enter User Email address</span>:null}

                <input type="number" name="mobile" value={contacts.mobile} onChange={handleInputChange} id="email" placeholder="Phone Number"  />
                {errormobile?<span className='errormsg'>Please Enter Phone Number</span>:null}

                <input type="text" name="address" value={contacts.address} onChange={handleInputChange} id="phone_number" placeholder="Address"  />
                {erroraddress?<span className='errormsg'>Please Enter city</span>:null}

                <div className="select-list">
                    <select name="role" value={contacts.role} onChange={handleInputChange} id="course_type">
                        <option slected value="">User type</option>
                        <option value="2">User</option>
                        <option value="3">Fisher man</option>
                    </select>
                </div>
                {errortype?<span className='errormsg'>Please Choose Roll</span>:null}

                <input type="password" name="password" value={contacts.password} onChange={handleInputChange} id="password" placeholder="Password"  />
                {errorpassword?<span className='errormsg'>Please Enter Password</span>:null}

                <input type="password" name="repassword" value={contacts.repassword} onChange={handleInputChange} id="pawwsord" placeholder="Repeat Password"  />
                {errorpass?<span className='errormsg'>Please Enter confirm password</span>:errorpassw?<span className='errormsg'> password mismatch</span>:null}

            </div>
            <div className="form-check">
                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                <label for="agree-term" className="label-agree-term"> Already have an account?   <a href="/login" className="term-service"> Click here to sign in</a></label>
            </div>
            <div className="form-submit">
                <input type="submit" style={{width:"200px"}} name="submit" id="submit" className="submit" value="Register" />
            </div>
           <p> Already have an account? Click here to sign in</p>
        </form>
    </div>
    </div>
</div>
<Footer/>
</>
  )
}

export default Register