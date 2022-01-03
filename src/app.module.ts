import { HttpModule, HttpService, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin/dist';
import * as admin from 'firebase-admin';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigKey, ConfigService } from './config/config.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MovieModule } from './movie/movie.module';
import { TheatreModule } from './theatre/theatre.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [
    MongooseModule.forRootAsync(
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          uri: configService.get(ConfigKey.MONGODB_URL),
        })
      },
    ),
    FirebaseAdminModule.forRootAsync(
      {
        useFactory: () => ({
          credential: admin.credential.applicationDefault(),
        }),
      }
    ),
    ConfigModule,
    HttpModule,
    AuthModule,
    UsersModule,
    MovieModule,
    TheatreModule,
    SocketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}