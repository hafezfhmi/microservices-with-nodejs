import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from "@hafezfhmi-dev/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
