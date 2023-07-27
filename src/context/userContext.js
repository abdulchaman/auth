import { createContext, useContext, useState } from "react";
// import {Link, useNavigate} from "react-router-dom";
const lUrl = "https://noplan.maastrixdemo.com/noplan/public/api/login";
const rUrl = "https://noplan.maastrixdemo.com/noplan/public/api/register";

const userContext = createContext();

export const AuthUserContext = ({ children }) => {
    const [user, setUser] = useState();
    const [message, setMessage] = useState('');
    const logIn = async (email, password) => {
        console.log("outside fetch", email, password)
        const logDetail = {
            "email": email,
            "password": password
        }
        await fetch(lUrl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer NOPLAN@12345!",
            },
            body: JSON.stringify(logDetail)
        })
            .then((res) => res.json())
            .then((data) => {
                // setUser(data);
                console.log(data)
            })
    }
    const register = async (name, date, userName, email, password, confirmpassword, phoneNumber) => {
        const regDetails = {
            "name": name,
            "date": date,
            "userName": userName,
            "email": email,
            "password": password,
            "confirmpassword": confirmpassword,
            "phoneNumber": phoneNumber
        }
        await fetch(rUrl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer NOPLAN@12345!",
            },
            body: JSON.stringify(regDetails)
        })
            .then((res) => res.json())
            .then((data) => {
                // setUser(data);
                console.log(data);
                if (data.access_token !== null) {
                    sessionStorage.setItem('rtk', data.access_token)
                    setUser(data);
                } else {
                    setMessage("error");
                }
            })
    }
    return (
        <userContext.Provider value={{user, logIn, register }}>
            {children}
        </userContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(userContext);
}