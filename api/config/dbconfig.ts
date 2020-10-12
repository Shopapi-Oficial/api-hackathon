import { Pool } from 'pg'

const connectionString = process.env.API_DB_CONNECTION_STRING

export default new Pool({
  max: 20,
  connectionString,
  idleTimeoutMillis: 30000
})
