import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'

import ItemsController from '../controllers/items.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()


router.get('/',ItemsController.getItems)

router.get('/:itemId', (req, res) => {
res.status(200).sendFile(path.resolve(__dirname, '../public/item.html'))
})
  export default router