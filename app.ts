import express from 'express';
import serverles from 'serverless-http'

const app = express()

app.use(express.json())

app.get('/api/info', (req, res) => {
  res.send({ application: 'sample-app', version: '1.0' });
});
app.post('/api/v1/getback', (req, res) => {
  res.send({ ...req.body });
});

export { app }