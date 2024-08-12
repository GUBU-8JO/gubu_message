import { Injectable } from '@nestjs/common';
import { SlackService } from './slack/slack.service';

@Injectable()
export class AppService {
  constructor(private readonly slackService: SlackService) {}

  //http://localhost:3003/slack/notify-slack 접속하면 바로 보내줌
  async notifySlack(): Promise<void> {
    await this.slackService.sendMessage('#general', 'Hello from NestJS!');
  }
}