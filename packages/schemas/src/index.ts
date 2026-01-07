import { z } from 'zod';

export const eventPayloadSchema = z.record(z.unknown());

export const createEventSchema = z.object({
  aggregateId: z.string().min(1),
  eventType: z.string().min(1),
  payload: eventPayloadSchema,
});

export type CreateEventInput = z.infer<typeof createEventSchema>;
