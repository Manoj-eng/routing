import React,{useState} from "react";


const Signup = ({history}) => {
    const[fName,setFname] = useState()
    const[lName,setLname] = useState()
    const[email,setEmail] = useState()
    const[num,setNum] = useState()
    
    const changeFname = (e) => {
        setFname(e.target.value);
    }
    const changeLname = (e) => {
        setLname(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changeNum = (e) => {
        setNum(e.target.value)
    }

    const sendData = () => {
        history.push("./dashboard2",{
            fName : {fName},
            lName : {lName},
            email:{email},
            num:{num}
        })
    }

  return (
    <div className="p">
      
      <h1>SIGNUP </h1>
       
        <b> First Name </b> <input type="text" className="y" placeholder="first-name" value={fName} onChange={changeFname}/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <b> Last Name </b> <input type="text" className="u" placeholder="last-name" value={lName} onChange={changeLname}/>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <b> Email Address</b> <input type="text" className="i" placeholder="email" value={email} onChange={changeEmail}/>   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <b> Contact Number </b> <input type="text" className="o" placeholder="Contact Number" value={num} onChange={changeNum}/>   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
       
        <button className="mybtn" onClick={sendData}><b>REGISTER</b></button>


     
    </div>
  );
};

export default Signup;
