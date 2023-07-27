import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useUserContext } from '../../context/userContext';
const RegisterForm = () => {
  const navigate = useNavigate();
  const { register } = useUserContext();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfpassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name === "" || dob === "" || username === "" || email === "" || password === "" || confpassword === "" || phoneNumber === "") {
        setError('Every field is mandatory');
        return;
      }
      else {
        await register(name, dob, username, email, password, confpassword, phoneNumber);
        navigate("/home");
        // console.log(name, dob, username, email, password, confpassword, phoneNumber)
      }
    } catch (error) {
      console.error("error", error)
    }
  }
  return (
    <div className='container'>
      {error && (
        <div class="alert alert-danger alert__wd" role="alert">
          {error}
        </div>
      )}
      <div className='wrap__cont'>
        <h2>Create an account</h2>
        <div className='form__wrap'>
          <form className="form-floating" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input type="text"
                className="form-control"
                id="floatingName"
                placeholder="Your name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="date"
                className="form-control"
                id="floatingDob"
                placeholder="Your date-of-birth"
                name="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <label htmlFor="floatingInput">DOB</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text"
                className="form-control"
                id="floatingUser"
                placeholder="Your username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="Your email id"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password"
                className="form-control"
                id="floatingConfPass"
                placeholder="Password"
                name="confpassword"
                value={confpassword}
                onChange={(e) => setConfpassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Confirm Password</label>
            </div>
            <div className="form-floating">
              <input type="number"
                className="form-control"
                id="floatingPhone"
                placeholder="Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <label htmlFor="floatingPassword">Phone Number</label>
            </div>
            <button className='btn btn-success mt-3' type='submit'>Register</button>
          </form>
          <h5 className='mt-3'>Already have an account? <Link to ="/">SignIn</Link> </h5>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm;