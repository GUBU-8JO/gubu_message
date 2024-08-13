import { Module } from '@nestjs/common';
import { ConfigModule} from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { HealthController } from './health-check/health-check.controller';
import { SlackModule } from './slack/slack.module';
import { HealthCheckService } from './health-check/health-check.service';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    SlackModule,
  ],
  controllers: [HealthController],
  providers: [HealthCheckService],
})
export class AppModule {}