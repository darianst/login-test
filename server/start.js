const express = require('express');
const data = require('./providers.json');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/banklist', (request, response) => {
  const res = data.map(bank => ({
    connectorId: bank.connectorId,
    displayName: bank.displayName,
    logoURL: bank.logoURL,
    authMethod: bank.authMethod,
  }));
  response.send(res);
});

app.get('/bank/:bankId', (request, response) => {
  const res = data.find(bank => bank.connectorId === request.params.bankId);
  response.send(res);
});

app.get('/data', (request, response) => {
  response.send('ok');
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
