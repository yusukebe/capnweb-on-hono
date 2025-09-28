import { Hono } from 'hono'
import { upgradeWebSocket } from 'hono/deno'
import { newWebSocketRpcSession } from 'capnweb'
import { MyApiServer } from './my-api-server.ts'

const app = new Hono()

app.get(
  '/api',
  upgradeWebSocket((_c) => {
    return {
      onOpen(_event, ws) {
        newWebSocketRpcSession(ws.raw!, new MyApiServer())
      }
    }
  })
)

export default app
