import { useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiServices';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction'
import { ImSpinner10 } from "react-icons/im"
import 'nprogress/nprogress.css'
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dishpash = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleLogin = async () => {
        // validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid email')
            return;
        }

        if (!password) {
            toast.error('Invalid password')
            return;
        }
        setIsLoading(true);
        //submit api
        let data = await postLogin(email, password);
        if (data && data.EC === 0) {
            dishpash(doLogin(data))
            toast.success(data.EM)
            setIsLoading(false);
            navigate('/')
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM)
            setIsLoading(false);
        }
    }

    return (
        <div className="login-container">
            <div className='header'>
                <span className='font-header-span'>  Don't have an account yet?  </span>
                <button onClick={() => navigate('/register')}>Sign up</button>
            </div>
            <div className='title col-4 mx-auto'>
                ZeT1
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who's this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input type={"email"} className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type={"password"} className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
                <span className='forgot-password'

                >For got password?</span>
                <div>
                    <button className='btn-submit'
                        onClick={() => handleLogin()}
                        disabled={isLoading}

                    >
                        {isLoading === true && <ImSpinner10 className='loader-icon' />}
                        <span>Login to ZeT1</span></button>
                </div>
                <div className='back text-center'>
                    <span onClick={() => { navigate('/') }}> &#60;&#60; Go to Homepage</span>
                </div>
            </div>
        </div>
    )
}
export default Login;