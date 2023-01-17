import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../Features/DataSlice'

const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const  reduxState:any=useSelector((states:any)=>states)
    const [state, setState] = useState({
        msg: ''
    })
    useEffect(()=>{
        if(reduxState.sessionIndex!=-1){
          navigate('/')
        }
      },[])
    const SignUpHandler = (e: any) => {
        e.preventDefault()
        let cnt = true
        let x = e.target
        // Match uppercase, lowercase, digit or #$!%*?& and make sure the length is 8 to 96 in length  
        const pwdFilter = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu
        if (!pwdFilter.test(x.password.value)) {
            // Show error that password has to be adjusted to match criteria
            x.confirmPassword.style.borderColor = 'red'
            x.password.style.borderColor = 'red'
            cnt = false
            setState({ msg: 'must include Match uppercase, lowercase, digit or #$!%*?& and make sure the length is 8 to 96 in length in password' })
        }
        else if (x.password.value !== x.confirmPassword.value) {
            x.confirmPassword.style.borderColor = 'red'
            x.password.style.borderColor = 'red'
            setState({ msg: 'both password must be same.' })
            cnt = false
        } else {
            x.confirmPassword.style.borderColor = ''
            x.password.style.borderColor = ''
        }
        var mob_regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
        if (!mob_regex.test(x.mobile.value)) {
            x.mobile.style.borderColor = 'red'
            cnt = false
        } else {
            x.mobile.style.borderColor = ''
        }






        if (cnt) {
            dispatch(addUser({
                name: x.name.value,
                number: x.mobile.value,
                email: x.email.value,
                pic: x.pic.value,
                password: x.password.value
            }))
            navigate('/login')
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center text-center" style={{ backgroundColor: '#f1f2f3' }}>
            <main className="form-signin " style={{ minWidth: '300px', width: "30%" }}>
                <form onSubmit={SignUpHandler}>
                    <img className="mb-4" src="Infinity-1s-171px.gif" alt="" width="100" height="80" />

                    <h5 className="h3 mb-3 fw-normal">Please sign up</h5>
                    <h6><small className='text-danger col-12'>{state.msg}</small></h6>
                    <div className="form-floating my-2">
                        <input type="text" name='name' className="form-control" id="floatingInput" placeholder="name" required />
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    <div className="form-floating my-2">
                        <input type="number" name='mobile' className="form-control" id="floatingInput" placeholder="+91" required />
                        <label htmlFor="floatingInput">Mobile Number</label>
                    </div>

                    <div className="form-floating my-2">
                        <input type="email" name='email' className="form-control" id="floatingInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="input-group flex-nowrap my-2">
                        <span className="input-group-text" id="addon-wrapping">Profile Pic Link</span>
                        <input type="text" className="form-control" required name='pic' placeholder="https:w3.com//jai.png" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="form-floating my-2">
                        <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating my-2">
                        <input type="password" name='confirmPassword' className="form-control" id="floatingPassword1" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                    <p className="mt-5 mb-3 text-muted" onClick={() => navigate('/login')}>Sign in</p>
                </form>
            </main>
        </div>
    )
}

export default Signup