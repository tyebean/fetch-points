// import Transaction model!
// import res from 'express/lib/response.js';
import res from 'express';

import { Transaction } from '../models/transaction.mjs'

// console.log(read_token(request));
// console.log('controllers');


function createTransaction() {
  console.log('creating a transaction!');
  Transaction.find({})
  .then(transaction => {
    console.log('turning your transaction into a json obj!');
    res.json(transaction);
  })
  .catch(err =>{
    console.log('Index Error ❌', err);
    res.redirect('/transactions')
  })
}

function indexTransaction() {
  console.log('reading all transactions!');
  res.render('transactions')
}

export {
  createTransaction,
  indexTransaction
}