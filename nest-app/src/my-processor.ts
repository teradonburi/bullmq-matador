import { Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import type { Job } from 'bull';

@Injectable()
// `BullModule.registerQueue()` で定義したキューと同じ名前をデコレータで注入する
@Processor('myQueue')
export class MyProcessor {
  // 継承した WorkerHost に基づいて、`process()` メソッドにやりたいことを実装していく
  public async process(job: Job<unknown>) {
    console.log('Process Job', job.name, job.data);
  }
}
