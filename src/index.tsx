import React from 'react';
import ReactDOM from 'react-dom';
import {  createServer, Model } from 'miragejs'
import { App } from './App';

createServer({

  // BD interno do mirage
  models: {
    transaction: Model
  },

  // populando o BD com alguns dados iniciais
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-10 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Moradia',
          amount: 1000,
          createdAt: new Date('2021-10-10 08:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    // passando os dados do form para a api (cria uma nova transaction)
    this.post('./transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)             // schema = BD do mirage
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);