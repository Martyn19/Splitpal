require('dotenv').config() // Carga el .env PRIMERO

const express = require('express')
const cors    = require('cors')

const app  = express()
const PORT = process.env.PORT || 3000

// Middlewares globales
app.use(cors())           // permite peticiones desde la app móvil
app.use(express.json()) // permite leer JSON en el body de las peticiones

// Ruta de prueba — para verificar que el servidor funciona
app.get('/', (req, res) => {
  res.json({ message: 'SplitPal API funcionando 🎉' })
})

// Levanta el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})