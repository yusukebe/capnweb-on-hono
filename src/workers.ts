import { Hono } from 'hono'
import { newWorkersRpcResponse } from 'capnweb'
import { MyApiServer } from './my-api-server'

const app = new Hono()

app.get('/api', (c) => {
  return newWorkersRpcResponse(c.req.raw, new MyApiServer())
})

export default app
