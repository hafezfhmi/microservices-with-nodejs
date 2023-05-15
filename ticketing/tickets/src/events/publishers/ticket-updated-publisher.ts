import { Publisher, Subjects, TicketUpdatedEvent } from "@hafezfhmi-dev/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
