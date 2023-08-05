import express from 'express'
import * as cardsController from '../controllers/cardsController.js'

const router = express.Router()

router.get('/', cardsController.getCards)
router.post('/addCards', cardsController.addCard)
router.put('/updateCards/:cardId', cardsController.updateCards)
// router.delete('/deleteCards', cardsController.deleteCards)

export default router
