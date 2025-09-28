import { Hono } from 'hono'
import { createNodeWebSocket } from '@hono/node-ws'
import { serve } from '@hono/node-server'
import { newWebSocketRpcSession } from 'capnweb'
import { MyApiServer } from './my-api-server'

const app = new Hono()

const { injectWebSocket, upgradeWebSocket } = createNodeWebSocket({ app })

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

const server = serve({
  port: 8787,
  fetch: app.fetch
})

injectWebSocket(server)
