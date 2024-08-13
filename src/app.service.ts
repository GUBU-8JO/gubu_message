import { Injectable } from '@nestjs/common';
import { SlackService } from './slack/slack.service'; // 경로 확인

@Injectable()
export class AppService {
  constructor(private readonly slackService: SlackService) {}

  async notifySlack(message: string) {
    await this.slackService.sendMessage(message);
  }
}
