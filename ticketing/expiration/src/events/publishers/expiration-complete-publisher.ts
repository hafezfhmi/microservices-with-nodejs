import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@hafezfhmi-dev/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
