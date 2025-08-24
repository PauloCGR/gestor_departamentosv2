import express from 'express'
import employedRoutes from './employeds.js'
import departamentRoutes from './departaments.js'

const router = express.Router()

router.use('/employeds', employedRoutes)
router.use('/departaments', departamentRoutes)

router.get('*', (req, res) => {
    res.status(404)
    res.send({ error: 'Not found' })
})

export default router