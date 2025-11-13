import { MyApiServer } from './my-api-server.ts'
import { Hono } from 'hono'
import { newRpcResponse } from '../middleware/capnweb.ts'
import { upgradeWebSocket } from 'hono/deno'

const app = new Hono()

app.all('/api', (c) => {
  return newRpcResponse(c, new MyApiServer(), {
    upgradeWebSocket
  })
})

export default app
