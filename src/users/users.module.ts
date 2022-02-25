import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from 'src/config/config.module';
import { Movie, MovieSchema } from 'src/movies/movie.schema';
import { Theatre, TheatreSchema } from 'src/theatres/theatre.schema';
import { CardsController } from './cards/cards.controller';
import { User, UserSchema } from './user.schema';
import { AdminUsersController, UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
              name: User.name,
              schema: UserSchema,
            },
            {
              name: Movie.name,
              schema: MovieSchema,
            },
            {
              name: Theatre.name,
              schema: TheatreSchema,
            }
          ]),
          ConfigModule,
    ],
    providers: [UsersService],
    exports: [UsersService],
    controllers: [UsersController, CardsController, AdminUsersController],
})
export class UsersModule {}
