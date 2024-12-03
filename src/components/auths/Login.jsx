import React, { useState } from 'react';
import './Login.css';
import Image6 from "../../assets/image6.png";
import Image1 from "../../assets/image-1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [ishome, setIshome] = useState(false);
  return (

    <div className="login-main">
      <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
      </div>
    <div className={`container-box ${isActive ? 'active' : ''}`}>
      {/* Login Form */}
      <div className="form-box login">
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FontAwesomeIcon icon={faUser} className='input-icons'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FontAwesomeIcon icon={faLock} className='input-icons'/>
          </div>
          <div className="forgot-link">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-btn" >Login</button>
          <p>or login with social platforms</p>
          <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faGoogle} className='icons'/></a>
            <a href="#"><FontAwesomeIcon icon={faFacebookF} className='icons'/></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} className='icons'/></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} className='icons'/></a>
          </div>
          <div className='fotter' style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            padding:'10px'
          }}>
            <FontAwesomeIcon icon={faCopyright} style={{width:'20px',height:'20px',margin:'4px'}}/>
            <p>Copyright@<a href='#' style={{textDecoration:'none',}}>Silicon Techlab Pvt.Ltd.</a></p>
          </div>
        </form>
      </div>

      {/* Registration Form */}
      <div className="form-box register">
        <form>
          <h1>Signup</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FontAwesomeIcon icon={faUser} className='input-icons'/>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <FontAwesomeIcon icon={faEnvelope} className='input-icons'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FontAwesomeIcon icon={faLock} className='input-icons'/>
          </div>
          <button type="submit" className="login-btn">Signup</button>
          <p>or Signup with social platforms</p>
          <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faGoogle} className='icons'/></a>
            <a href="#"><FontAwesomeIcon icon={faFacebookF} className='icons'/></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} className='icons'/></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} className='icons'/></a>
          </div>
          <div className='fotter' style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            padding:'10px',
          }}>
            <FontAwesomeIcon icon={faCopyright} style={{width:'20px',height:'20px',margin:'4px'}}/>
            <p>Copyright@<a href='#' style={{textDecoration:'none'}}>Silicon Techlab Education Pvt.Ltd.</a></p>
          </div>
        </form>
      </div>

      {/* Toggle Panels */}
      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <div className='toggle-panel-head' style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
          }}>
          <h4 style={{fontSize:'2.2rem', marginRight:'.2em'}}>TMS</h4>
          <p>A Product By STLe</p>
          </div>
           <img src={Image1} alt="" style={{width:'70%', height:'50%'}}/>
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <button className="btn register-btn" onClick={() => setIsActive(true)}>
            Register
          </button>
        </div>
        <div className="toggle-panel toggle-right">
        <div className='toggle-panel-head' style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
          }}>
          <h4 style={{fontSize:'2.2rem', marginRight:'.2em'}}>TMS</h4>
          <p>A Product By STLe</p>
          </div>
           <img src={Image6} alt="" style={{width:'70%', height:'50%'}}/>
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <button className="btn login-btn" onClick={() => setIsActive(false)}>
            Login
          </button>
        </div>
      </div>
     </div>
    </div>
  
  );
};

export default Login;