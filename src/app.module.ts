import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
<<<<<<< HEAD
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [AuthModule, UsersModule, DatabaseModule, ConfigModule],
=======

@Module({
  imports: [AuthModule, UsersModule],
>>>>>>> 1cc8cdf3c84b83a15b6bb558dea6f8efaee7b9e4
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
