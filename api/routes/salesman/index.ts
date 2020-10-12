import { Request, Response, Router } from 'express'
import { generateSalesmanCodeHandler } from '../../controllers/salesman/create-salesman-controller'

const router = Router()

router.post('/salesman', async (req: Request, res: Response) => {
  const params: generateSalesmanCodeArgs = req.body.input
  const data = await generateSalesmanCodeHandler(params)
  return res.json(data.salesman_cod)
})

export default router
