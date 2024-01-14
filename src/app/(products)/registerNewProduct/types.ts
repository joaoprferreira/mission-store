import { z } from 'zod'

export const registerNewProductSchema = z.object({
  nameProduct: z
    .string()
    .min(1, 'Nome do produto deve ter pelo menos 1 caractere'),
  priceProduct: z
    .number({ coerce: true })
    .int()
    .min(1, { message: 'O número deve ser maior ou igual a 1' })
    .positive({ message: 'Preço do produto deve ser um número positivo' }),
  descriptionProduct: z.string().min(1, {
    message: 'Descrição do produto deve ter pelo menos 1 caractere',
  }),
})

export type registerFormData = z.infer<typeof registerNewProductSchema>
