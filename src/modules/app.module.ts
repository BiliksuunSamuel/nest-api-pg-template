import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../configuration';
import controllers from 'src/functions/load.controllers';
import repositories from 'src/functions/load.repositories';
import services from 'src/functions/load.services';
import { JwtStrategy } from 'src/providers/jwt.strategy';
import { LocalStrategy } from 'src/providers/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import constants from 'src/constants';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';
import { RolesGuard } from 'src/providers/roles.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from 'src/configuration/typeorm.config';
import { loadEntities } from 'src/functions/load.entities';
import actors from 'src/functions/load.actors';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.development'],
      load: [configuration],
    }),
    TypeOrmModule.forFeature([...loadEntities()]),
    JwtModule.register({
      global: true,
      secret: constants().secret,
      signOptions: { expiresIn: '8hrs' },
    }),
    TypeOrmModule.forRoot({
      ...typeormConfig(),
      autoLoadEntities: true,
    }),
  ],
  controllers: [...controllers],
  providers: [
    ...repositories,
    ...services,
    ...actors,
    LocalStrategy,
    JwtStrategy,
    RolesGuard,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'api/authentication/sign-in', method: RequestMethod.POST },
        { path: 'api/authentication/sign-up', method: RequestMethod.POST },
      )
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      });
  }
}
