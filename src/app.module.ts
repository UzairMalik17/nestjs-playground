import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RequestIdService } from './request-id-service/request-id.service';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, RequestIdService],
})
export class AppModule {}
