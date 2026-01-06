import { Body, Controller, Post } from '@nestjs/common';

import { CreateEventDto } from './dto/create-event.dto';

@Controller('events')
export class EventsController {
  @Post()
  create(@Body() body: CreateEventDto) {
    return {
      status: 'accepted',
      aggregateId: body.aggregateId,
      eventType: body.eventType,
    };
  }
}
