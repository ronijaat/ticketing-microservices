import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@ronitickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
