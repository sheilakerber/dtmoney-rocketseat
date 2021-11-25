import React from 'react';
import ReactDOM from 'react-dom';
import {  createServer, Model } from 'miragejs'
import { App } from './App';

createServer({

  // BD interno do mirage
  models: {
    transaction: Model
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