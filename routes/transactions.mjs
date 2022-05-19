import { Router } from 'express'
import * as transactionCtrl from '../controllers/transactions.mjs'
const router = Router()
// console.log("routes");


router.post('/', transactionCtrl.createTransaction)
router.get('/', transactionCtrl.indexTransaction)

export { router }

