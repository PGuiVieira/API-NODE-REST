import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionRoute } from './routes/transactions'

export const app = fastify()

app.register(cookie)
app.register(transactionRoute, {
  prefix: 'transactions',
})
