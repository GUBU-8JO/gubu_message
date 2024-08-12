import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WebClient } from '@slack/web-api';
import {Cron} from "@nestjs/schedule";

@Injectable()
export class SlackService {
    private slackClient: WebClient;

    constructor(private configService: ConfigService) {
        const slackToken = this.configService.get<string>('SLACK_TOKEN');
        this.slackClient = new WebClient(slackToken);
    }

    async sendMessage(channel: string, text: string): Promise<void> {
        try {
            await this.slackClient.chat.postMessage({
                channel: 'noti' ,
                text,
            });
        } catch (error) {
            console.error('Error sending message to Slack:', error);
        }
    }


    @Cron('*/10 * * * * *')
    async createNotification() {
        await this.slackClient.chat.postMessage({
            channel: 'noti' ,
            text:'서버상태',
        });
        console.log('서버상태 실행');
    }
}
