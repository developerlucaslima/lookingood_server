// Status code 422 (Unprocessable Entity) - Unprocessable Entity: The server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions.
const UNPROCESSABLE_ENTITY_ERROR_CODE = 422

export class InvalidServiceDurationException extends Error {
  public readonly code: number

  constructor(reason?: string) {
    let errorMessage = 'Oops! This service duration is not valid.'
    if (reason) {
      errorMessage += ` ${reason}`
    }
    super(errorMessage)
    this.name = 'InvalidServiceDurationException'
    this.code = UNPROCESSABLE_ENTITY_ERROR_CODE
  }
}
