import { PaymentCreatedEvent, Publisher, Subjects } from '@ronitickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
