import React, { useState, useEffect } from 'react'
import { Professor } from '../models/Professor'
import { Disciplina } from "../models/Disciplina";
import { Ocorrencia } from "../models/Ocorrencia";
import { Turma } from "../models/Turma";
import { Cursos } from "../models/Curso";
import { Semestres } from "../models/Semestres";
import { disciplinasEspecificas, separarTurmaPorCurso } from "../models/SepararDisciplinasEturmas";
import './CriarOcorrencia.css';
import { Link } from "react-router";
import Index from '../ocorrencia';

export default function CriarOcorrencia() {
    let [alunoNome, setAlunoNome] = useState("");
    let [descricao, setDescricao] = useState("");
    let [professorNome, setProfessor] = useState("")
    let [disciplinaSelecionada, setDisciplinaSelecionada] = useState<Disciplina | null>(null);
    let [turmaSelecionada, setTurmaSelecionada] = useState<Turma>(Turma.Administracao1);
    let [ocorrenciaGerada, setOcorrenciaGerada] = useState<Ocorrencia | null>(null);
    let [cursoSelecionado, setCursoSelecionado] = useState<Cursos | "">("");
    let [semestreSelecionado, setSemestreSelecionado] = useState<Semestres | "">("");

    const disciplinasFiltradas = cursoSelecionado && semestreSelecionado
        ? disciplinasEspecificas[cursoSelecionado][semestreSelecionado]
        : [];

    const gerarOcorrencia = () => {
        if (!disciplinaSelecionada) {
            alert("Selecione uma disciplina antes de gerar a ocorrência.");
            return;
        }

        let professor = new Professor(
            11111,
            professorNome,
            "xxxxx",
            disciplinaSelecionada,
            "(88)xxxxx-xxxx"
        );

        let ocorrencia = professor.gerarOcorrencia(alunoNome, descricao, turmaSelecionada);
        setOcorrenciaGerada(ocorrencia);

        let salvarOcorrencia = JSON.parse(localStorage.getItem("ocorrencias") || "[]");
        salvarOcorrencia.push(ocorrencia);
        localStorage.setItem("ocorrencias", JSON.stringify(salvarOcorrencia));
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

            <div className='main-ocorrencia'>
                <div className="occurrence-container">
                    <h2>GERAR OCORRÊNCIA</h2>

                    <div className="input-row">
                        <div className="input-group">
                            <label>Nome do Professor</label>
                            <input
                                type="text"
                                value={professorNome}
                                onChange={(e) => setProfessor(e.target.value)}
                                placeholder="Digite o nome do professor"
                            />
                        </div>

                        <div className="input-group">
                            <label>Nome do Aluno</label>
                            <input
                                type="text"
                                value={alunoNome}
                                onChange={(e) => setAlunoNome(e.target.value)}
                                placeholder="Digite o nome do aluno"
                            />
                        </div>

                        <div className="input-group">
                            <label>Curso</label>
                            <select
                                value={cursoSelecionado}
                                onChange={(e) => {
                                    setCursoSelecionado(e.target.value as Cursos);
                                    setDisciplinaSelecionada(null);
                                }}
                            >
                                <option value="">Selecione um curso</option>
                                {Object.values(Cursos).map((curso) => (
                                    <option key={curso} value={curso}>{curso}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="input-row">
                        <div className="input-group">
                            <label>Turma</label>
                            <select
                                value={turmaSelecionada}
                                onChange={(e) => setTurmaSelecionada(e.target.value as Turma)}
                            >
                                {cursoSelecionado &&
                                    separarTurmaPorCurso[cursoSelecionado]?.map((turma) => (
                                        <option key={turma} value={turma}>
                                            {turma}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        <div className="input-group">
                            <label>Semestre</label>
                            <select
                                value={semestreSelecionado}
                                onChange={(e) => {
                                    setSemestreSelecionado(e.target.value as Semestres);
                                    setDisciplinaSelecionada(null);
                                }}
                            >
                                <option value="">Selecione um semestre</option>
                                {Object.values(Semestres).map((sem) => (
                                    <option key={sem} value={sem}>{sem}</option>
                                ))}
                            </select>
                        </div>

                        <div className="input-group">
                            <label>Disciplina</label>
                            <select
                                value={disciplinaSelecionada ?? ""}
                                onChange={(e) => setDisciplinaSelecionada(e.target.value as Disciplina)}
                            >
                                <option value="">Selecione uma disciplina</option>
                                {disciplinasFiltradas.map((disc) => (
                                    <option key={disc} value={disc}>{disc}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="input-row">
                        <div className="input-group full-width">
                            <label>Motivo da Ocorrência</label>
                            <input
                                type="text"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                placeholder="Qual o motivo da ocorrência?"
                            />
                        </div>
                    </div>

                    <button onClick={gerarOcorrencia}>Aplicar ocorrência</button>


                    {ocorrenciaGerada && (
                        <div className="resultado-ocorrencia">
                            <h3>Ocorrência Gerada:</h3>
                            <p><strong>Aluno:</strong> {ocorrenciaGerada.alunoNome}</p>
                            <p><strong>Turma:</strong> {ocorrenciaGerada.alunoTurma}</p>
                            <p><strong>Professor:</strong> {ocorrenciaGerada.professorNome}</p>
                            <p><strong>Disciplina:</strong> {ocorrenciaGerada.disciplina}</p>
                            <p><strong>Descrição:</strong> {ocorrenciaGerada.descricao}</p>
                            <p><strong>Data:</strong> {ocorrenciaGerada.data}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
