import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  aggregateId!: string;

  @IsString()
  @IsNotEmpty()
  eventType!: string;

  @IsObject()
  payload!: Record<string, unknown>;
}
