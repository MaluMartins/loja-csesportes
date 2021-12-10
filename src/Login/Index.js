import React from 'react';
import './Index.css';

function Login() {
    return (
        <div className="container">
            <form>
                <h2>Login</h2>
                <br />
                <label for="username">Email ou nome de usuário:</label>
                <br />
                <input type="text" id="username" name="username"></input>
                <br /><br />
                <label for="password">Senha:</label>
                <br />
                <input type="text" id="password" name="password"></input>
                <br /><br />
                <button className="submit-btn">Login</button>
            </form>
        </div>
    )
}

export default Login;