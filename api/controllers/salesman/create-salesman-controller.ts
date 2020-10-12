import pool from '../../config/dbconfig'
import { getRandomId } from '../../utils/random-id'

export async function generateSalesmanCodeHandler ({ arg1: { userId } }: generateSalesmanCodeArgs): Promise<GenerateSalesmanCodeOutput> {
  const salesmanCod = getRandomId()
  const client = await pool.connect()

  const sql = `INSERT INTO "public"."salesman" ("cod", "user_id") VALUES ('${salesmanCod}', '${userId}');`
  await client.query(sql)
  client.release()

  return {
    salesman_cod: salesmanCod
  }
}
