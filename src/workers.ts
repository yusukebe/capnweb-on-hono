import { Hono } from 'hono'
import { MyApiServer } from './my-api-server'
import { newRpcResponse } from '../middleware/capnweb'
import { upgradeWebSocket } from 'hono/cloudflare-workers'

const app = new Hono()

app.all('/api', (c) => {
  return newRpcResponse(c, new MyApiServer(), {
    upgradeWebSocket
  })
})

export default app
