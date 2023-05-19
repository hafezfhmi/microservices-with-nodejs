import { Publisher, OrderCreatedEvent, Subjects } from "@hafezfhmi-dev/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
