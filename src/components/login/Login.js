import React from 'react'
import Inputtext from '../utils/components/Inputtext';
import Button from '../utils/components/Button';
import './loginpage.css';
import {useNavigate} from 'react-router-dom';
import {postData} from '../utils/Helper';
import {postLogin_URL} from '../utils/Endpoint';

function Login() {
    const navigate = useNavigate();

  const [loginData, setloginData] = React.useState({
    userId :"",
    passWord :""
  });
const handleChangeEmail =(e)=>{
  const {name, value} = e.target;
  setloginData({...loginData, [name]:value});
}
const handleChangePassword =(e)=>{
  const {name, value} = e.target;
  setloginData({...loginData, [name]:value})
}
const onLogIn =async (e)=>{
  e.preventDefault();
  const preparedSubmitData ={
    regesterid : 0,
    email:loginData.userId,
    phonenumber : loginData.userId,
    password:loginData.passWord,
    lattitude: "77.8",
    longtitude: "76.58"
  }
  try{
    const url = await postLogin_URL()
    const response = await postData(url,preparedSubmitData)
    if(response.ok){
        navigate("/dashboard");
        console.log('Post Request successful');
        return
    }else{
      console.log('Post Request failed');
    }
  }catch(ex){
    console.log('Any error occurrs');
  }
}
  return (
    <div class="login-page">
      <div className='card p-4 d-flex flex-column'>
        <h4>Welcome to Login Page</h4>
        <span className='py-2 text-secondary'>Sign in to your account and enjoy unlimited perks</span>
        <div className='d-flex flex-column py-1'>
          <span className='py-2'>Email or Phone Number</span>
          <Inputtext 
            className="form-control" 
            type="text" 
            name="userId"
            text={loginData.userId} 
            placeholder="Enter your Email or Phone Number" 
            handleChangeText={handleChangeEmail}
          />
        </div>
        <div className='d-flex flex-column py-1'>
          <span className='py-2'>Password</span>
           <Inputtext
            className="form-control"
            type="password"
            name="passWord"
            text={loginData.passWord}
            placeholder="Password"
            handleChangeText={handleChangePassword}
          />
        </div>
        <div className='d-flex justify-content-between align-items-center flex-row pt-4'>
          <Button className="btn px-0" type="submit" text="Forgot Password" />
          <Button className="btn-sm btn-primary" type="submit" text="Log In" onClick={onLogIn}/>
        </div>
      </div>
    </div>
  )
}

export default Login

