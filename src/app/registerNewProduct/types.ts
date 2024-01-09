import { z } from 'zod'

export const registerNewProductSchema = z.object({
  nameProduct: z
    .string()
    .min(3, { message: 'o usuário precisa ter pelo menos 3 caracters' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'o usuário precisa ter apenas letras e hifens',
    })
    .transform((username) => username.toLocaleLowerCase()),
  priceProduct: z
    .string()
    .min(3, { message: 'o nome precisa ter pelo menos 3 caracters' }),
  descriptionProduct: z.string(),
})

export type registerFormData = z.infer<typeof registerNewProductSchema>
