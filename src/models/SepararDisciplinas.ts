import { Cursos } from "./Curso";
import { Disciplina } from "./Disciplina";
import { Semestres } from "./Semestres";

type DisciplinasPorCursoESemestre = {
  [curso in Cursos]: {
    [semestre in Semestres]: Disciplina[];
  };
};

const disciplinasComuns: Disciplina[] = [
  Disciplina.AprofundamentoEmLinguaPortuguesa,
  Disciplina.Biologia,
  Disciplina.EducacaoFisica,
  Disciplina.Filosofia,
  Disciplina.Fisica,
  Disciplina.Geografia,
  Disciplina.Historia,
  Disciplina.LinguaEspanhol,
  Disciplina.LinguaIngles,
  Disciplina.LinguaPortuguesa,
  Disciplina.Matematica,
  Disciplina.Quimica,
  Disciplina.Sociologia
];

export let disciplinasEspecificas: DisciplinasPorCursoESemestre = {
  [Cursos.Informatica]: {
    [Semestres.Primeiro]: [
      ...disciplinasComuns,
      Disciplina.GestaoDeStartupsI,
      Disciplina.NocoesDeRobotica,
      Disciplina.SistemasOperacionais,
      Disciplina.ProgramacaoOrientadaAObjetos,
      Disciplina.ProgramacaoWeb
    ],
    [Semestres.Segundo]: [...disciplinasComuns],
    
  },
  [Cursos.Agropecuária]: {
    [Semestres.Primeiro]: [...disciplinasComuns],
    [Semestres.Segundo]: [...disciplinasComuns],
  
  },
  [Cursos.Admnistração]: {
    [Semestres.Primeiro]: [...disciplinasComuns],
    [Semestres.Segundo]: [...disciplinasComuns],
    
  },
  [Cursos.Finanças]: {
    [Semestres.Primeiro]: [...disciplinasComuns],
    [Semestres.Segundo]: [...disciplinasComuns],
    
  },
  [Cursos.EnergiaRenovavel]: {
    [Semestres.Primeiro]: [...disciplinasComuns],
    [Semestres.Segundo]: [...disciplinasComuns],
    
  }
};
