import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { EstablishmentNotFoundException } from '@/errors/establishment-not-found.exception'
import { makeAddProfessionalUseCase } from '@/use-cases/factories/make-add-professional-use-case'

export async function addProfessionalController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { name, imageUrl } = z
    .object({
      name: z.string(),
      imageUrl: z.string().nullable(),
    })
    .parse(request.body)

  try {
    const addProfessionalUseCase = makeAddProfessionalUseCase()

    await addProfessionalUseCase.execute({
      name,
      imageUrl,
      establishmentId: request.user.sub,
    })
  } catch (err) {
    if (err instanceof EstablishmentNotFoundException) {
      return reply.status(404).send({ message: err.message })
    }

    throw err
  }

  return reply.status(201).send()
}
