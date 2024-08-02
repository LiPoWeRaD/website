import { z } from "zod"

export const FormSchema = z.object({
    email: z.string().email("Некорректная почта").min(1, "Поле не может быть пустым"),
    username: z.string().min(1, "Поле не может быть пустым").max(16),
    surname: z.string().min(1, "Поле не может быть пустым").max(28),
    password: z
      .string()
      .min(1, "Поле не может быть пустым")
      .min(8, "Пароль должен быть больше 8 символов"),
    confirmPassword: z.string().min(1, "Поле не может быть пустым"),
  })

export type FormSchemaType = z.infer<typeof FormSchema>