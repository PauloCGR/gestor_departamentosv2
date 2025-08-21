import express from 'express'
import employedRoutes from './employeds.js' // Importación estática

const router = express.Router()

// Cargar rutas manualmente
router.use('/employeds', employedRoutes)
// Agrega aquí otras rutas que tengas

router.get('*', (req, res) => {
    res.status(404)
    res.send({ error: 'Not found' })
})

export default router