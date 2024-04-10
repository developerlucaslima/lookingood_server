import { PrismaBookingsRepository } from '@/repositories/prisma/prisma-bookings-repository'
import { ChangeBookedServiceUseCase } from '../change-booked-service'
import { PrismaEstablishmentsRepository } from '@/repositories/prisma/prisma-establishments-repository'
import { PrismaProfessionalsRepository } from '@/repositories/prisma/prisma-professionals-repository'
import { PrismaSchedulesRepository } from '@/repositories/prisma/prisma-schedules-repository'
import { PrismaServicesRepository } from '@/repositories/prisma/prisma-services-repository copy'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

export function makeChangeBookedServicesUseCase() {
  const establishmentsRepository = new PrismaEstablishmentsRepository()
  const professionalsRepository = new PrismaProfessionalsRepository()
  const servicesRepository = new PrismaServicesRepository()
  const schedulesRepository = new PrismaSchedulesRepository()
  const bookingsRepository = new PrismaBookingsRepository()
  const usersRepository = new PrismaUsersRepository()

  const changeBookedServiceUseCase = new ChangeBookedServiceUseCase(
    establishmentsRepository,
    professionalsRepository,
    servicesRepository,
    schedulesRepository,
    bookingsRepository,
    usersRepository,
  )

  return changeBookedServiceUseCase
}
