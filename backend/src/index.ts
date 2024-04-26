import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors';
import { use } from 'hono/jsx';
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>();



// app.use('/api/v1/blog/*', async (c, next) => {
//   const header = c.req.header('authorizat ion') || "";
//   const response = await verify(header, c.env.JWT_SECRET);
//   if (response.id) {
//     await next();
//   }
//   else {
//     return c.json({
//       message: "Unauthorized"
//     })
//   }
// })

app.use('/*', cors());
app.get('/', async (c) => {

  return c.text('Hello Hono!')
})


app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);


export default app
