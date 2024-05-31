import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyProcessor } from './my-processor';

@Module({
  imports: [
    BullModule.forRoot({
      // Redis との接続
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    // キューの名前を任意に決めて登録する
    BullModule.registerQueue({
      name: 'myQueue',
    }),
  ],
  controllers: [AppController],
  providers: [MyProcessor, AppService],
})
export class AppModule {}
