import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@hafezfhmi-dev/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
