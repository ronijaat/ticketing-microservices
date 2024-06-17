import { Publisher, Subjects, TicketCreatedEvent } from '@ronitickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
