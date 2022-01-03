import {HttpService, Injectable } from '@nestjs/common';
import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin/dist';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private readonly firebaseAuth: FirebaseAuthenticationService,
    private readonly configService: ConfigService,
  ) {

  }
}
