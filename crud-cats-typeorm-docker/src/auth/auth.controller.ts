import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register() {
    return await this.authService.register();
  }

  @Post('sign-up')
  async login() {
    return await this.authService.signUp();
  }
}