import React, { useEffect } from "react";
import { Link } from "react-router";
import Index from "./index";
import Login from "./login";
import './home.css';
export default function Home() {
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
    }, []);
    return (
        <>
<div className="main-home">
            <div className="head">
                <div className="head-titulo">
                    <h1><a href="/" className="h1-head">Ocorrências</a></h1>
                </div>
                <div className="li-button">
                    <button className="botao-tema" onClick={toggleTheme}>Tema</button>
                </div>
            </div>
            
                <p>suzi</p>
            </div>
        </>
    )
}