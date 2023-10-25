import express from 'express'
import * as cardsController from '../controllers/cardsController.js'

const router = express.Router()

router.get('/', cardsController.getCards)
router.post('/addCard', cardsController.addCard)
router.put('/updateCard/:cardId', cardsController.updateCards)
router.delete('/deleteCard/:cardId', cardsController.deleteCards)

export default router
