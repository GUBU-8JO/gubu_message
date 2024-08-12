import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { SlackService } from './slack.service';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
        private readonly slackService: SlackService,
    ) {}

    async sendCategoryTitlesToSlack(): Promise<void> {
        const categories = await this.categoryRepository.find({
            select: ['category'],
        });

        const titles = categories.map(category => category.category).join('\n');

        await this.slackService.sendMessage('noti', `Category Titles:\n${titles}`);
    }
}
