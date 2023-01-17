import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSeesionIndex } from '../Features/DataSlice'

const Login = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const  reduxState:any=useSelector((states:any)=>states)
  const [state, setState] = useState({
    msg: ''
})
useEffect(()=>{
  if(reduxState.sessionIndex!=-1){
    navigate('/')
  }
},[])
  const SignInHandler = (e: any) => {
    e.preventDefault()
    let cnt=-1
    let x = e.target
    reduxState.users.forEach((user:any,i:any)=>{
      if (x.email.value == user.email && x.password.value == user.password) 
        cnt=i  
       })
 
if(cnt!==-1)
{dispatch(setSeesionIndex(cnt))
navigate('/')
}else{
  setState({msg:'Wrong username or password!!'})
}
}
  return (
   <div className="d-flex justify-content-center align-items-center text-center" style={{backgroundColor:'#f1f2f3'}}>
     <main className="form-signin " style={{minWidth:'300px',width:"30%"}}>
      <form onSubmit={SignInHandler}>
        <img className="mb-4" src="Infinity-1s-171px.gif" alt="" width="100" height="80" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <h6><small>{state.msg}</small></h6>

        <div className="form-floating">
          <input type="email" name='email' className="form-control" id="floatingInput" placeholder="name@example.com" required />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating my-2">
          <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" required />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted" onClick={()=>navigate('/signup')}>Sign up</p>
      </form>
    </main>
   </div>
  )
}

export default Login