import React from 'react'

const Profile = ({location,history}) =>{

    const Dash = () =>{
        history.push('/')
    }

    return(<div>
        
        <p>User Details</p>
        <button onClick={Dash}>Back to Landing Page</button>
    </div>)
}

export default Profile