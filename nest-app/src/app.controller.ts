import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private id = 0;

  constructor(
    @Inject(AppService)
    private readonly appService: AppService,
  ) {}

  @Get()
  public addJob(): Promise<string> {
    this.id++;
    return this.appService.addJob(this.id);
  }
}
