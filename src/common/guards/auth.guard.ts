// src/common/guards/auth.guard.ts
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    request.user = {
      id: 1,
      name: 'dummy user',
      role: 'admin',
    };

    return true;
  }
}
