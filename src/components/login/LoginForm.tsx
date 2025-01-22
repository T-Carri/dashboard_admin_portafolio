import hipoicon from '../../assets/hipoIconblack.svg'
import icongoogle from '../../assets/googleicon.svg'
const LoginForm = () => {
  return (
    <div className="login_form">
        <div className="first_space_login_form">
          <img src={hipoicon} alt="icon" width={70} />
        </div>
        
        <div className="second_space_login_form">
          

            <span className='span_iniciarsesion'  >Iniciar sesion</span>
           
            <div className="form_login">
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
            </div>
            <div className="button_enter_login"><button>Iniciar</button></div>
            <div className="content__or-text">
        <span></span>
        <span>OR</span>
        <span></span>
      </div>
           
           <div className='google_access'>
           <button className="btn google">
<img src={icongoogle} alt="icon google" width={20} />
   
        Google 
        
      </button>
           </div>
          
        </div>
<div style={{textAlign:'center'}}>
    No tengo cuenta aun <span role='button' style={{color:'#074799', cursor:'pointer', fontWeight:'600'}}>Registrarse</span>
</div>

        </div>
  )
}

export default LoginForm