/* eslint-disable @typescript-eslint/restrict-template-expressions */
import pool from '../../config/dbconfig'
import { getRandomId } from '../../utils/random-id'

export async function generateSalesmanCodeHandler (session: any): Promise<GenerateSalesmanCodeOutput> {
  const salesmanCod = getRandomId()
  const client = await pool.connect()
  const userId = session['x-hasura-user-id']
  const sqlInsert = `INSERT INTO "public"."salesman" ("cod", "user_id") VALUES ('${salesmanCod}', '${userId}');`
  const sqlQuery = `SELECT cod from "public"."salesman" where user_id = '${userId}'`

  const { rows, rowCount } = await client.query(sqlQuery)

  if (rowCount > 0) {
    return {
      salesman_cod: rows[0].cod
    }
  }

  await client.query(sqlInsert)
  client.release()

  return {
    salesman_cod: salesmanCod
  }
}
