import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

export const loginSchema = toTypedSchema(
  z.object({
    email: z.string(),
    password: z.string(),
  }),
)
export const registerSchema = toTypedSchema(
  z.object({
    email: z.string(),
    password: z.string(),
    passwordConfirm: z.string(),
    tosAccepted: z.boolean(),
  }),
)
