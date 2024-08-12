import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SlackService } from './slack.service';
import { SlackController } from './slack.controller';
import {CategoryService} from "./category.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Category} from "./entities/category.entity";

@Module({
    imports: [ConfigModule,
        TypeOrmModule.forFeature([Category])],
    providers: [SlackService,CategoryService],
    controllers: [SlackController],
    exports: [SlackService],
})
export class SlackModule {}
