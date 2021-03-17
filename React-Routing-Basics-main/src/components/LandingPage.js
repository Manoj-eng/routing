import React from 'react'

const LandingPage = ({history,location}) => {
    const loginPage = () => {
        history.push('/login')
    }
    const signUpPage = () => {
        history.push('/signup')
    }
    return (
        <div className="t">
            <h3 className="q"> Signup To Continue </h3>
           <button className="w" onClick={signUpPage}><b>SIGNUP</b></button> 

           
            
           <h3 className="r">Already Have An Account? Click Login</h3>
           <button className="e" onClick={loginPage}><b>LOGIN</b></button>
           
          
        </div>
    )
}

export default LandingPage
