import '../css/LoginForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function LoginForm() {
    return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
        <div className='login'>
            <h2 className='form-group mb-2'>Login</h2>
            <div className='form-group'>
                <label className='form-label'>Email Address</label>
                <input type="email" className='form-control'></input>
            </div>
            <div className='form-group mb-2'>
                <label className='form-label'>Password</label>
                <input type="password" className='form-control'></input>
            </div>
            <button type='submit' className='btn btn-primary mt-2'>Sign In</button>
        </div>
    </div>
    )
}

export default LoginForm