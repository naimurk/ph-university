import { z } from "zod";



 export const UserValidationSchema = z.object({
    // id: z.string(),
    password: z.string({invalid_type_error: "password must be string"}),
    // needsPasswordChange:z.boolean().optional().default(true),
    // role: z.enum(["admin", "student", "faculty"]),
    // status: z.enum(["in-progress", "blocked"]).default("in-progress"),
    // isDeleted: z.boolean().optional().default(false)

  });


  export const userValidation = {
    UserValidationSchema
  }