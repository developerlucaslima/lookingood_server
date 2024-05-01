// Status code 409 (Conflict) - Conflict: Indicates that the request could not be completed due to a conflict with the current state of the target resource.
const CONFLICT_ERROR_CODE = 409

export class EmailNotAvailableException extends Error {
  public readonly code: number

  constructor() {
    super('This email is already in use. Please choose another one.')

    this.name = 'EmailNotAvailableException'
    this.code = CONFLICT_ERROR_CODE
  }
}
