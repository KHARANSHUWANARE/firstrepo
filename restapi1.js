import { useEffect, useState } from "react";

export default function DummyApi(){
    const[emps,setEmps]= useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(emps => setEmps(emps))
    },[]);

    return(<div>
        <h1>EMPLOYEES DETAILS</h1>
        <table>
        <tr> 
                        <th>EMPID</th>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAILID</th>
                        <th>ADDRESS</th>
                        <th>COMPANY</th>
                        
</tr>
            {
                emps.map(v=>{
                    return (   
                        
                            <tr>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.username}</td>
                            <td>{v.email}</td>
                            <td>{v.address.street}</td>
                            <td>{v.company.name}</td>
                        </tr>
                       
                    )
                })
            }
        </table>
    </div>)
}