import express from 'express';
const router = express.Router();

const recursos = [
  { nome: "Domínio Público – Livros Gratuitos", link: "http://www.dominiopublico.gov.br" },
  { nome: "Khan Academy", link: "https://pt.khanacademy.org/" },
  { nome: "Biblioteca Digital Unesp", link: "https://bibliotecadigital.unesp.br/" },
  { nome: "Projetos de Resolução – Youtube", link: "https://www.youtube.com/c/ProjetoRedacao" }
];

router.get('/', (req, res) => {
  res.json(recursos);
});

export default router;
