import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [user_name, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputUserName = event => {
        setUserName(event.target.value);
    };

    const inputEmail = event => {
        setEmail(event.target.value);
    };

    const inputPassword = event => {
        setPassword(event.target.value);
    };

    const [data, setData] = useState('');

    const msg = () => {
        alert('success');
    };

    const reload = () => {
        return window.location.reload()
    }

    const senddata = (e) => {
        e.preventDefault();
        console.log('data was sent');
        
        axios.post('http://127.0.0.1:8000/s/add/', {
            "username": user_name,
            "email": email,
            "password": password
        }).then((res) => {
            console.log((res.data));
            setData(res.data);
            msg();
            reload();
        })
    }



  return (
    <div className='form'>
        <form>
            <label>UserName</label>
            <input id='f' type='text' placeholder='username' onChange={inputUserName} required />
            <br />
            <label>Email</label>
            <input id='f' type='email' placeholder='email' onChange={inputEmail} required />
            <br />
            <label>Password</label>
            <input id='f' type='password' placeholder='password' onChange={inputPassword} required />
            <button onClick={senddata} className='btn'>Signup</button>
        </form>
    </div>
  )
}

export default Signup
