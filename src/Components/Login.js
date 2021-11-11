import React, { useState }  from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import './Login.css';

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            login({
            name: name,
            email: email, 
            password: password,
            loggedIn: true,
        })
    );
};

    return (
        <div className="login">
            <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Connectez-vous 👇🏻</h1>
                <label htmlFor="">Nom</label>
                <input 
                    type="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="">Email</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="">Mot de passe</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="submit__btn">Envoyer</button>
            </form>
        </div>
    )
}

export default Login