import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

export const Signup = ()=>{
    const [formdata,setFormdata] = useState({});
    const [getdata,setGetdata] = useState([]);
    console.log(getdata)
    const [flag,setFlag] = useState();
    const navigate = useNavigate()

    useEffect(()=>{
        get_from_api();
    })

    const get_from_api = async ()=>{
        const fetched_data = await fetch("https://userserver1.herokuapp.com/users").then((d)=>d.json())
        setGetdata(fetched_data)
    }
    const handlechange = (e)=>{
        const {name,value} = e.target
        setFormdata({...formdata,
        [name]:value
    })
    }
    return <div className="signup_box">
        <h1>SIGN UP</h1>
        <label htmlFor="">First Name: </label>
        <input className = "box"type="text" name = "firstname" placeholder="Firstname" onChange ={handlechange}  /><br/><br/>
        <label htmlFor="">Last Name: </label>
        <input className = "box"type="text" name = "lastname" placeholder="Lastname" onChange ={handlechange} /><br/><br/>
        <label htmlFor="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:   </label>
        <input className = "box" type="email" name = "email" placeholder="Email" onChange ={handlechange}  /><br/><br/>
        <label htmlFor="">Password:  </label>
        <input className = "box" type="password" name = "password" placeholder="Password" onChange ={handlechange} /><br/>
        <button className = "signup1" onClick = {()=>{
            getdata.map((e)=>{
                if((e.email==formdata.email&&e.firstname==formdata.firstname)||(e.email==formdata.email)){
                    setFlag(true);
                    
                }
                else{
                    setFlag(false)

                    
                }
            })
            //     for(var i = 0;i<getdata.length;i++){
            //         if(getdata[i].email === formdata.email){
            //             setFlag(true)
                        
            //         }
            //         else{
            //             setFlag(false);
                        
                        
            //         }

            // }
            if(flag===false){
                fetch("https://userserver1.herokuapp.com/users",{
                method:"POST",
                headers:{
                    "Content-Type":'application/json'
                },
                body:JSON.stringify(formdata),
    })
    alert("Sign up Successful")
    navigate("/login")
        
        }}}>Sign up</button>
        <h4>Already have an account ?</h4>
        <button className = "signup" onClick={()=>{
            navigate("/login")
        }}>Login</button>
        <div className = "check">{flag?<h2>You  already have an account</h2>:null}</div>
        
    </div>
}