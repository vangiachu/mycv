/// src/guards/auth.guard.ts

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name);
  constructor(private readonly requestService: RequestService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    if (this.requestService.getUserId() === '1') {
      this.logger.log('You are admin. You can continue.');
      return true;
    } else {
      this.logger.log('You are not admin. Access denied');
      return false;
    }
  }
}