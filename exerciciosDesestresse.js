import express from 'express';
const router = express.Router();

const exercicios = [
  "Respire fundo por 1 minuto. Inspire contando até 4, segure, expire devagar.",
  "Levante-se e alongue os braços, pernas e pescoço por 3 minutos.",
  "Faça 10 polichinelos para ativar a circulação.",
  "Medite por 2 minutos com foco na sua respiração."
];

router.get('/', (req, res) => {
  res.json({ exercicio: exercicios[Math.floor(Math.random() * exercicios.length)] });
});

export default router;
