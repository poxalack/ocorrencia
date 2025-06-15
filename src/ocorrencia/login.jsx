import React from "react";
import './login.css'
import Index from "./index";
import { Link } from "react-router";
import Home from "./home";

export default function Login() {
    return (
        <>
            <div className="king-login">
                <div className="one">
                    <h1 className="h1-one">Inicie no nosso site!</h1>
                    <p className="p-one">Faça seu login aqui professor, após esse processo você<br /> terá acesso a todas as nossas opções.</p>
                    <a href="https://www.instagram.com/eeeppejoaoboscodelima/"><img src="../src/assets/main-index.png" alt="" className="instagram-img" /></a>
                </div>
                <div className="two">
                    <a href=""><img src="../src/assets/main-index.png" alt="" className="login-img" /></a>
                    <h1 className="h1-login">Login</h1>
                    <input type="email" placeholder="E-mail ou Matricula" className="input-two" />
                    <input type="password" placeholder="Senha" className="input-two" />
                    <Link to={'./home'}>
                        <button className="botao-entrar">Entrar</button>
                    </Link>
                </div>
            </div>
        </>
    )
}