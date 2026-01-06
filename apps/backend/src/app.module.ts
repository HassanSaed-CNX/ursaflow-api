import { Module } from '@nestjs/common';

import { EventsModule } from './events/events.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [HealthModule, EventsModule],
})
export class AppModule {}
