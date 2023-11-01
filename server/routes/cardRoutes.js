import express from 'express'
import * as cardsController from '../controllers/cardsController.js'

const router = express.Router()

router.get('/', cardsController.getCards)
router.post('/addCard', cardsController.addCard)
router.put(`/updateCard/:cardId`, cardsController.updateCard)
router.delete('/deleteCard/:cardId', cardsController.deleteCard)

export default router
