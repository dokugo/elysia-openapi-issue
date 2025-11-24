import { Elysia } from 'elysia'
import { openapi, fromTypes } from '@elysiajs/openapi'
import { test } from './test'

const app = new Elysia()
  .use(openapi({ references: fromTypes('src/index.ts') }))
  .use(test)
  .listen(4242)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
