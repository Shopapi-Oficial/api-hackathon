import { Pool } from 'pg'

const connectionString = process.env.API_DB_CONNECTION_STRING || 'postgres://user:password@127.0.0.1:5432/name_db'

export default new Pool({
  max: 20,
  connectionString,
  idleTimeoutMillis: 30000
})
