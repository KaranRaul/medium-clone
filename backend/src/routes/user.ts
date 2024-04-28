import { Hono } from "hono";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
// import { PrismaClient } from '@prisma/client/edge'
import { SigninInput, SignupInput, signupInput } from "@karan_raul/medium-common";
export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();


userRouter.get('/cc', (c) => {
    return c.json('testing');
})

userRouter.post('/signup', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (!success) {
        c.status(401);
        return c.json({ error: "wrong inputs" })
    }

    // await prisma.user.create()
    try {
        const user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password
            }
        });

        const token = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({
            jwt: token
        });

    } catch (error) {
        c.status(411);
        return c.json("invalid")
    }
})

userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();

    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
            password: body.password,
        }
    });

    if (!user) {
        c.status(403);
        return c.json({
            error: "user not found"
        });
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
})