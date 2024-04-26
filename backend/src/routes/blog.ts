import { Hono } from "hono";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>();


blogRouter.use('/*', async (c, next) => {
    const authHeader = c.req.header('authorization') || "";
    const user = await verify(authHeader, c.env.JWT_SECRET);
    if (user) {
        c.set('userId', user.id);
    }
    else {
        c.status(403)
        return c.json({
            error: "Not Logged In"
        })
    }
    await next();
})


blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();

    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: c.get('userId'),
        },
    });

    return c.json({
        post
    })
})

blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    try {
        const post = await prisma.post.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,

            },
        });
        return c.json({
            id: post.id
        })

    } catch (error) {
        return c.json(error)
    }

})


blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const posts = await prisma.post.findMany();

    return c.json(posts);
})

blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id').toString();
    console.log("hello" + id);
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    // const body = await c.req.json();

    try {

        const post = await prisma.post.findUnique({
            where: {
                id
            },
        });

        return c.json(post)

    } catch (error) {
        c.json(error)
    }

})
//todo: pagination

