import { aplicationServer } from '@config/server'
import { AppDataSource } from './data-source'

AppDataSource.initialize().then(() => {
  const app = aplicationServer

  app.listen(process.env.PORT, () => {
    console.log(`PostgreSQL está rodando na porta ${process.env.DB_PORT}`)
    console.log(`Express está rodando na porta ${process.env.PORT}`)
  })
})
