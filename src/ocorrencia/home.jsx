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

            <div className="head">
                <div className="head-titulo">
                    <h1><a href="/home" className="h1-head">Ocorrências</a></h1>
                </div>
                <div className="li-button">
                    <li className="li-head">
                        <ol><Link to="/ocorrencia" className="aplicar-a">APLICAR</Link></ol>
                        <ol><Link to="/historicoOcorrencia" className="historico-a">HISTÓRICO</Link></ol>
                    </li>
                    <button className="botao-tema" onClick={alternarTema}>Tema</button>
                </div>
            </div>
            <div className="main-home">

            </div>
        </>
    )
}