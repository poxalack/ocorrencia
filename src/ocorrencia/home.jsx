import React, { useEffect } from "react";
import { Link } from "react-router";
import Index from "./index";
import Login from "./login";
import './home.css';
export default function Home() {
    const alternarTema = () => {
        const temaAtual = document.documentElement.getAttribute('data-theme');
        const proximoTema = temaAtual === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', proximoTema);
        localStorage.setItem('tema', proximoTema);
    };

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema');
        const sistemaPrefereEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const tema = temaSalvo || (sistemaPrefereEscuro ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', tema);
    }, []);

    return (
        <>
            <div className="main-home">
                <div className="head">
                    <div className="head-titulo">
                        <h1><a href="/" className="h1-head">Ocorrências</a></h1>
                    </div>
                    <div className="li-button">
                        <li>
                            <ol><a href="./model/aplicarOcoreencia" className="aplicar-a">APLICAR</a></ol>
                            <ol><a href="./model/aplicarOcoreencia" className="historico-a">HITÓRICO</a></ol>
                        </li>
                        <button className="botao-tema" onClick={alternarTema}>Tema</button>
                    </div>
                </div>
                <h1></h1>
            </div>
        </>
    )
}