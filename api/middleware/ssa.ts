import { Request, Response, NextFunction } from 'express'

export function ServerToServerAuthentication (request: Request, response: Response, next: NextFunction): Response {
  const secret = request.header('X-Server-Secret')

  if (secret !== process.env.GRAPHQL_SERVER_ACTION_SECRET) {
    return response.status(403).send({ message: 'SSA Failed' })
  }
  next()
}
