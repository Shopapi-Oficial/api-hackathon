
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import salesmanRoutes from './routes/salesman'
import pool from './config/dbconfig'
import { ServerToServerAuthentication } from './middleware/ssa'

class Server {
  private readonly app

  constructor () {
    this.app = express()
    this.config()
    this.routerConfig()
    this.dbConnect()
    dotenv.config()
  }

  private config (): void {
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(bodyParser.json({ limit: '1mb' })) // 100kb default
  }

  private dbConnect (): void {
    pool.connect(function (err, client, done) {
      if (err) throw new Error(err.message)
    })
  }

  private routerConfig (): void {
    this.app.use(ServerToServerAuthentication)
    this.app.use(salesmanRoutes)
  }

  public start = (port: number): Promise<any> => {
    return new Promise((resolve, reject) => {
      this.app.listen(port, () => {
        resolve(port)
      }).on('error', (err: Object) => reject(err))
    })
  }
}

export default Server
