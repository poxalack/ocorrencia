import React, { useEffect } from "react";
import { Link } from "react-router";
import './index.css';
import Login from "./login";

export default function Index() {
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
         <div className="head">
            <div className="head-titulo">
               <h1><a href="/" className="h1-head">Ocorrências</a></h1>
            </div>
            <div className="li-button">
               <Link to='./login'>
                  <button className="botao-login">Login</button>
               </Link>
               <button className="botao-tema" onClick={toggleTheme}>Tema</button>
            </div>
         </div>
         <div className="main">
            <h1 className="h1-main">OCORRÊNCIAS</h1>
            <p className="p-main">
               Site criado por alunos do 2° ano informática da E.E.E.P Padre João Bosco de Lima,<br />
               feito com o objetivo de facilitar o processo de ocorrência na escola.
            </p>
         </div>
      </>
   );
}
