import { Request, Response, Router } from 'express'
import { generateSalesmanCodeHandler } from '../../controllers/salesman/create-salesman-controller'

const router = Router()

router.post('/salesman', async (req: Request, res: Response) => {
  const session = req.body.session_variables
  const data = await generateSalesmanCodeHandler(session)
  console.log({ data })

  return res.json(data)
})

export default router
