import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import type { Queue } from 'bull';

@Injectable()
export class AppService {
  // `BullModule.registerQueue()` で定義したキューと同じ名前をデコレータで注入する
  constructor(@InjectQueue('myQueue') private messageQueue: Queue) {}

  public async addJob(id: number): Promise<string> {
    // ジョブを追加する・第2引数が渡したいデータ
    const job = await this.messageQueue.add('myJob', { id });
    console.log('Job Added', id, job.name, job.data);
    return `Job Added ${id}`;
  }
}
