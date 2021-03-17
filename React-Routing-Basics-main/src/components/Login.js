import React,{useState} from 'react'

const Login = ({history}) => {
    const[name,setName] = useState()
    
   
    const dashBoardFun =() => {      
        history.push("./dashboard",{
            fName:name
        })
    }

    const getName = (e) =>{
        setName(e.target.value)
    }
    return (
        <div className="one">
             <h1 className="two"><b> LOGIN</b></h1>
            <b>Enter Your Email Address</b><input type="text" value={name} onChange={getName} />
            <b>Enter Your Password</b><input type="Password"/>
           
            <button onClick={dashBoardFun}>Login</button>
        </div>
    )
}

export default Login
