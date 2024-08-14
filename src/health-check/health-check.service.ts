import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Interval } from '@nestjs/schedule';
import { SlackService } from '../slack/slack.service';

@Injectable()
export class HealthCheckService {
  private readonly healthCheckUrl = 'http://localhost:300/health'; // 체크할 서비스 URL

  constructor(private readonly slackService: SlackService) {}

  @Interval(1000) 
  async checkBatchServiceHealth() {
    try {
      const response = await axios.get(this.healthCheckUrl);

      if (response.status === 200) {
        console.log ('배치 서비스가 정상입니다.');
      } else {
        await this.slackService.sendMessage('배치 서비스 상태가 비정상입니다.');
      }
    } catch (error) {
      await this.slackService.sendMessage('배치 서비스에 연결할 수 없습니다.');
    }
  }
}
