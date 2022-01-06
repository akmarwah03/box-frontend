import Register from "./forms/register";
import Login from "./forms/login";

import '../css/authentication.css';


const Authentication = () => {

    const showRegister = (e) => {
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'block';
    }

    const showLogin = (e) => {
        document.getElementById('login').style.display = 'block';
        document.getElementById('register').style.display = 'none';
    }

    return (
        <div className='authentication'>
            <div className='auth-forms'>
                <h1 className='auth-header auth-title m-3 pt-3' >Box Application</h1>
                <div id='login'>
                    <Login showRegister={showRegister} />
                </div>
                <div id='register'>
                    <Register showLogin={showLogin} />
                </div>
            </div>
        </div >
    )
}


export default Authentication; 