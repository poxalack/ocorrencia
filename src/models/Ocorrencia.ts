import { Disciplina } from "./Disciplina";
import { Turma } from "./Turma";

export interface Ocorrencia{
    descricao: string;
    professorNome: string;
    alunoNome: string;
    alunoTurma: Turma;
    disciplina: Disciplina;
    data: string;
}