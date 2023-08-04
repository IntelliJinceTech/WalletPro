import express from 'express'
import * as cardsController from '../controllers/cardsController.js'

const router = express.Router()

router.get('/getCards', cardsController.getCards)
router.post('/addCards', cardsController.addCards)
router.put('/editCards', cardsController.editCards)
router.delete('/deleteCards', cardsController.deleteCards)

export default router
