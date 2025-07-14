import express from 'express';
const router = express.Router();

const dicas = [
  "Beba água antes e durante os estudos.",
  "Prefira snacks leves como frutas, oleaginosas e iogurte.",
  "Evite excesso de açúcar para não causar sonolência.",
  "Faça pausas para refeições equilibradas durante maratonas de estudo."
];

router.get('/', (req, res) => {
  res.json({ dica: dicas[Math.floor(Math.random() * dicas.length)] });
});

export default router;
