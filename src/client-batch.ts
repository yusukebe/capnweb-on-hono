import { newHttpBatchRpcSession, RpcStub } from 'capnweb'
import type { PublicApi } from './my-api-server'

const stub: RpcStub<PublicApi> = newHttpBatchRpcSession<PublicApi>('http://localhost:8787/api')

console.log(await stub.hello("Cap'n Web"))
