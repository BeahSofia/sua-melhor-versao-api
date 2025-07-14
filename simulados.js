import express from 'express';
const router = express.Router();

const simulados = [
  { nome: "Simulado ENEM", link: "https://www.todamateria.com.br/simulado-enem/" },
  { nome: "Simulado Fuvest", link: "https://www.guiadacarreira.com.br/simulado/fuvest" },
  { nome: "Simulado ITA", link: "https://www.qconcursos.com/questoes-de-vestibular/provas/ita" }
];

router.get('/', (req, res) => {
  res.json(simulados);
});

export default router;
