"use client"

import Form from "next/form";
import { InputBasic } from "./ui/input";
import { Button } from "./ui/button";
import { SelectTrigger, SelectContent, SelectItem, SelectValue, Select } from "./ui/select";
const TableBookingForm = ({events, selectedEvent, setSelectedEvent, selectedTable, setSelectedTable, reservations}) => {
    const isReserved = (tableNumber) => {
        if(!selectedEvent) return false;
  return reservations.some(
    (reservation) =>
    Number(reservation.eventId) ===
    Number(selectedEvent) &&
    Number(reservation.table) === tableNumber
  );
};
const selectedEventTitle =
  events.find(
    (event) =>
      String(event.id) ===
      String(selectedEvent)
  )?.title;

  const selectedTableLabel =
  selectedTable
    ? `Table ${selectedTable}`
    : "";

    return ( 
        <Form className="mb-16">
            <h2>BOOK A TABLE</h2>
            <section className="flex flex-wrap gap-4">
            <InputBasic type="text" placeholder="Your Full Name"
            className="max-w-148 min-w-48"/>
            <InputBasic type="email" placeholder="Your Email"
            className="max-w-148 min-w-48"/>

            <Select
            name="table"
            value={selectedTable}
            onValueChange={(value) => setSelectedTable(Number(value))}
             className="w-full border border-input bg-transparent max-w-148 min-w-48 text-text">
            <SelectTrigger
            className="w-full  max-w-148 min-w-48">
            <SelectValue>
            {selectedTableLabel || "Select Table"}
            </SelectValue>
            </SelectTrigger>
            <SelectContent>
  {Array.from({ length: 15 }).map(
    (_, index) => {
        const tableNumber = index + 1;
      return (
      <SelectItem
        key={tableNumber}
        value={tableNumber}
        disabled={isReserved(tableNumber)}
      >
        Table {tableNumber}
        {isReserved(tableNumber)
          ? " (Reserved)"
          : ""}
      </SelectItem>
      );
    }
  )}
  </SelectContent>
</Select>
            <InputBasic type="number" placeholder="Number Of Guests"
            className="max-w-148 min-w-48"/>
          
            <Select
            name="eventId"
            value={String(selectedEvent)} 
            onValueChange={(value) => setSelectedEvent(value)}
            className="
            w-full border border-input
            bg-transparent px-2.5 py-4
            max-w-148 min-w-48 mb-4
            text-text"      >
                <SelectTrigger className="w-full max-w-148 min-w-48">
                    <SelectValue>
                    {selectedEventTitle ||
                    "Select Event"}
                    </SelectValue>
                </SelectTrigger>
            <SelectContent>
          {events.map((event) => (
            <SelectItem
              key={event.id}
              value={String(event.id)}
            >
              {event.title}
            </SelectItem>
          ))}
          </SelectContent>
        </Select>
            <InputBasic type="tel" placeholder="Your Telephone Number"
            className="max-w-148 min-w-48"/>
            </section>
            <textarea
        placeholder="Your comment"
        type="text"
        className="h-40 border w-full outline-none px-2.5 pt-2.5 mb-8"
      />
      <div className="flex justify-end">
        <Button variant="secondary" type="submit">
        RESERVE
        </Button>
      </div>
        </Form>
     );
}
 
export default TableBookingForm;