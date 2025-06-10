import { Disciplina } from "./Disciplina";
import { Ocorrencia } from "./Ocorrencia";

export class Professor {
     matricula: number;
     nome: string;
     email: string;
     disciplina: Disciplina;
     telefone: string;

    constructor(matricula: number, nome: string, email: string, disciplina: Disciplina, telefone: string) {

        this.matricula = matricula;
        this.nome = nome;
        this.email = email;
        this.disciplina = disciplina;
        this.telefone = telefone;

    }

    gerarOcorrencia(alunoNome: string, descricao: string, alunoTurma): Ocorrencia{
        const data = new Date().toISOString().split('T')[0];
        return{
            descricao,
            professorNome:this.nome,
            alunoNome,
            alunoTurma,
            disciplina: this.disciplina,
            data
        } 

    
    }

}