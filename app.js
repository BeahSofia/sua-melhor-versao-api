import express from 'express';
import dicasAlimentacaoRouter from './routes/dicasAlimentacao.js';
import exerciciosDesestresseRouter from './routes/exerciciosDesestresse.js';
import simuladosRouter from './routes/simulados.js';
import recursosEstudoRouter from './routes/recursosEstudo.js';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('API Sua Melhor Versão está no ar!');
});

app.use('/dicas-alimentacao', dicasAlimentacaoRouter);
app.use('/exercicios-desestresse', exerciciosDesestresseRouter);
app.use('/simulados', simuladosRouter);
app.use('/recursos-estudo', recursosEstudoRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
