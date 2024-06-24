import { OrderCancelledEvent, Publisher, Subjects } from '@ronitickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
