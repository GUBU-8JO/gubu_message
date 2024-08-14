import { Controller, Post, Body } from '@nestjs/common';
import { SlackService } from './slack.service';

@Controller('slack')
export class SlackController {
  constructor(private readonly slackService: SlackService) {}

  @Post('send')
  async sendSlackMessage(@Body('message') message: string) {
    await this.slackService.sendMessage(message);
    return { status: '메세지를 보냈습니다.' };
  }
}
