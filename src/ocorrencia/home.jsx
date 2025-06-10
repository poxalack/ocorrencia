import React from "react";
import { Link } from "react-router";
import Index from ".";
import Login from "./login";
export default function Home() {
    return (
        <>
            <div className="head">
                <div className="head-titulo">
                    <h1><a href="/" className="h1-head">Ocorrências</a></h1>
                </div>
                <div className="li-button">
                    <button className="botao-tema" onClick={toggleTheme}>Tema</button>
                </div>
            </div>
        </>
    )
}