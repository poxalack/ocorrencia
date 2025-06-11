import { Cursos } from "./Curso";
import { Disciplina } from "./Disciplina";
import { Semestres } from "./Semestres";
import { Turma } from "./Turma"

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

//separando curso e turma

export let separarTurmaPorCurso: Record <Cursos, Turma[]> = {
  [Cursos.Admnistração]:[
    Turma.Administracao1,
    Turma.Administracao2,
    Turma.Administracao3
  ],
  [Cursos.Agropecuária]: [
    Turma.Agropecuaria1,
    Turma.Agropecuaria2,
    Turma.Agropecuaria3
  ],
  [Cursos.EnergiaRenovavel]:[
    Turma.EnergiasRenovaveis1,
    Turma.EnergiasRenovaveis2,
    Turma.EnergiasRenovaveis3
  ],
  [Cursos.Finanças]:[
    Turma.Financas1,
    Turma.Financas2,
    Turma.Financas3
  ],
  [Cursos.Informatica]:[
    Turma.Informatica1,
    Turma.Informatica2,
    Turma.Informatica3
  ]
  

}
