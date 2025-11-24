import Elysia from 'elysia'

export const test = new Elysia()
  .post('/user', () => {
    return {
      someBody: 'Some Body',
    }
  })
  .get('/user/:id', ({ params }) => {
    return {
      userId: params.id,
      userName: 'Some User',
    }
  })
  .get('/test', () => {
    return {
      a: 'a',
      b: 1,
      c: true,
      d: null,
      e: undefined,
      f: [1, 2, 3],
      g: { c: 'c', d: 'd' },
      h: new Date(),
    }
  })
