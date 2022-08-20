import { useEffect, useState } from "react"
import {useNavigate} from "react-router"
export let identity = "";

export const Login = ()=>{
    const [formdata,setFormdata] = useState({});
    const [flag,setFlag] = useState(false);
    const navigate = useNavigate();
    

    

    const checkdata = async ()=>{
        const fetched_data = await fetch("https://userserver1.herokuapp.com/users").then((d)=>d.json())
        fetched_data.map((e)=>{
            if(e.email === formdata.email && e.password === formdata.password){
                identity = e.firstname;
                navigate("/success")

            }
            else{
                setFlag(!flag)
            }
        })

    }
    const handlechange = (e)=>{
        const {name,value} = e.target
        setFormdata({...formdata,
        [name]:value
    })
    }
    return <div className = "login_box">
        <h1>LOGIN</h1>
        <label htmlFor="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: </label>
        <input className = "box" type="email" name = "email" placeholder="Email" onChange ={handlechange} required/><br/><br/><br/>
        <label htmlFor="">Password: </label>
        <input className = "box" type="password" name = "password" placeholder="Password" onChange ={handlechange} required /><br/><br/>
        <button className = "login2" onClick= {checkdata}>LOGIN</button>
        <h4>Don't have an account yet?</h4>
        <button className = "login3" onClick={()=>{
            navigate("/")
        }}>Sign up</button>
        <button className = "login3" onClick={()=>{
            navigate("/admin")
        }}>Admin</button>
        <div className = "check">{flag?<h2>Incorrect email or password</h2>:null}</div>
    </div>
}