import z from "zod";

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional(),
});

export type SignupInput = z.infer<typeof signupInput>;

export const SigninInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export type SigninInput = z.infer<typeof SigninInput>;

export const createBlogInput = z.object({
    title: z.string().min(3),
    content: z.string().min(3),
});

export type CreateBlogInput = z.infer<typeof createBlogInput>;
export const updateBlogInput = z.object({
    title: z.string().min(3),
    content: z.string().min(3),
});


export type UpdateBlogInput = z.infer<typeof updateBlogInput>; 