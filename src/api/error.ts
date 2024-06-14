export class ApiError extends Error {
  status;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(401, message);
  }
}

export class ForbiddenError extends ApiError {
  constructor(message: string) {
    super(403, message);
  }
}

export class InternetServerError extends ApiError {
  constructor(message: string) {
    super(500, message);
  }
}
