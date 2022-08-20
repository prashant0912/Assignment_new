import {useEffect, useState} from "react"
export const Admin = ()=>{
    const [data,setData] = useState([]);
    console.log(data)
    useEffect(()=>{
        getdata();
    })
    const getdata = async()=>{
        const data = await fetch("https://userserver1.herokuapp.com/users").then((e)=>e.json())
        setData(data);
    }
    return <div className = "admin">
    <h1>Registered Users</h1>
        <table >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((e)=>{
          return(
          <tr className="row" key = {e.id}>
            <td className="first_name">{e.firstname}</td>
            <td className="last_name">{e.lastname}</td>
            <td className="email">{e.email}</td>
            
          </tr>)
          })}
        </tbody>
      </table>
        
    </div>
}