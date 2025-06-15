import React, { useState, useEffect } from 'react'
import { Ocorrencia } from '../models/Ocorrencia'
import { Link } from "react-router";
import './ListadeOcorrencia.css'
import Index from '../ocorrencia/index'
export default function ListadeOcorrencia() {

  let [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);
  const [expandido, setExpandido] = useState<number | null>(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("ocorrencias") || "[]");
    setOcorrencias(data);
  }, []);

  const toggleExpandir = (index: number) => {
    setExpandido(expandido === index ? null : index);
  };
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


      <div className="main-ocorrencia">
        <div className="lista-container">
          <h2>HISTÓRICO DE OCORRÊNCIAS</h2>
          {ocorrencias.length === 0 ? (
            <p>Nenhuma ocorrência registrada.</p>
          ) : (
            <ul className="lista-ocorrencias">
              {ocorrencias.map((oc, index) => (
                <li
                  key={index}
                  className={`item-ocorrencia ${expandido === index ? 'expandido' : ''}`}
                  onClick={() => toggleExpandir(index)}
                >
                  <p><strong>Aluno:</strong> {oc.alunoNome}</p>
                  <p><strong>Data:</strong> {oc.data}</p>
                  <div className="detalhes">
                    <p><strong>Turma:</strong> {oc.alunoTurma}</p>
                    <p><strong>Professor:</strong> {oc.professorNome}</p>
                    <p><strong>Disciplina:</strong> {oc.disciplina}</p>
                    <p><strong>Descrição:</strong> {oc.descricao}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}


