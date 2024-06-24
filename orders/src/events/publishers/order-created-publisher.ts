import { OrderCreatedEvent, Publisher, Subjects } from '@ronitickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: OrderCreatedEvent['subject'] = Subjects.OrderCreated;
}
