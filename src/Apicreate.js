import React from 'react'

import { useState ,useEffect} from 'react'
import axios from 'axios'


function Apicreate(){

    const [users,setUsers]=useState([]);
    const[name,setName]=useState("")
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setUsers(res.data)
            console.log(users)
             console.log(res.data)
        })
    },[])
    
    const postData=(e)=>{
    e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/users",{name:name})
        .then((res)=>{
            // console.log(res.data)
            setUsers([...users,res.data])
        })
        console.log("post data")
    
    }
    
    
    const updateData=(e)=>{
        e.preventDefault()
            axios.patch(`https://jsonplaceholder.typicode.com/users/${2}`,{name:name})
            .then((res)=>{
                 console.log(res.data)
                setUsers(res.data)
            })
            console.log("patch data")
        
        }
    
        const deleteData=(e)=>{
            e.preventDefault()
                axios.delete(`https://jsonplaceholder.typicode.com/users/${2}`,{name:name})
                .then((res)=>{
                     console.log(res.data)
                    setUsers(res.data)
                    
                })
                console.log("delete data")
            
            }
        return(
            <div className='api-sec'>
                {/* {
                    users.map((user,id)=>(
                        <div key={id}>
                            <p>{user.name}</p>
    
                        </div>
                    ))
                }  */}
    
                {users.name}
               <div className='api-content'>
               <input type='text' className='api-input' value={name}  onChange={(e)=>setName(e.target.value)}/> 
    
                     <button onClick={postData} className='api-btn1'>post  </button>

                     <button onClick={updateData} className='api-btn2' >update </button>
                     <button onClick={deleteData} className='api-btn3' >delete </button>
               </div>
            </div>
        )
}


export default Apicreate