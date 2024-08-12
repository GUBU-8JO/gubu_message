import { Controller, Get } from '@nestjs/common';
import { SlackService } from './slack.service';
import { CategoryService } from "./category.service";

@Controller('slack')
export class SlackController {
    constructor(
        private readonly slackService: SlackService,
        private readonly categoryService: CategoryService
    ) {}

    // http://localhost:3003/slack/category-slack 접속하면 바로 보내줌
    @Get('notify-slack')
    async notifySlack(): Promise<string> {
        await this.slackService.sendMessage('noti', 'Hello from NestJS!');
        return 'Slack notification sent!';
    }

    @Get('category-slack')
    async sendCategoryTitlesToSlack(): Promise<string> {
        await this.categoryService.sendCategoryTitlesToSlack();
        return 'Category sent to Slack!';
    }

}
