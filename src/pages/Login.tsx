import '../style/Login.css'
import nicepic from '../assets/nicepic.jpg'
import LoginForm from '../components/login/LoginForm'
const Login = () => {
  return (
    <main className="main_container">

<div className='space_one_login' style={{backgroundImage:`url(${nicepic})`}}></div>
<div className='space_two_form'>
    <LoginForm/>
</div>
    </main>
  )
}

export default Login