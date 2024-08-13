import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SlackService } from './slack.service';
import { SlackController } from './slack.controller';

@Module({
  imports: [HttpModule],
  providers: [SlackService],
  controllers: [SlackController],
  exports: [SlackService], 
})
export class SlackModule {}
