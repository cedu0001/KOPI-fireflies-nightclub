"use client"

import bookingPost from "./bookingPost";
import { useActionState } from "react";
import { InputBasic } from "./ui/input";
import { Button } from "./ui/button";
import { SelectTrigger, SelectContent, SelectItem, SelectValue, Select } from "./ui/select";
const TableBookingForm = ({events, selectedEvent, setSelectedEvent, selectedTable, setSelectedTable, reservations}) => {

const [state, formAction, isPending] =
    useActionState(bookingPost, {
      success: false,
      message: "",
    });

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
        <form className="mb-16" action={formAction}>
            <h2>BOOK A TABLE</h2>
            {state?.message && (
        <div
          className={`border p-4 ${
            state.success
              ? ""
              : "border-red-500 text-red-500"
          }`}
        >
          {state.message}
        </div>
      )}
            <section className="flex flex-wrap gap-4">
            <InputBasic
            name="name"
            type="text" placeholder="Your Full Name"
            className="max-w-148 min-w-48"/>
            <InputBasic
            name="email"
            type="email" placeholder="Your Email"
            className="max-w-148 min-w-48"/>

            <Select
            value={String(selectedTable)}
            onValueChange={(value) =>
            setSelectedTable(Number(value))}
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
        value={String(tableNumber)}
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
<input
type="hidden"
name="table"
value={selectedTable || ""}/>
            <InputBasic
            name="guests"
            type="number" placeholder="Number Of Guests"
            className="max-w-148 min-w-48"/>
          
            <Select
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
        <input
        type="hidden"
        name="eventId"
        value={selectedEvent || ""}/>
            <InputBasic
            name="phone"
            type="tel" placeholder="Your Telephone Number"
            className="max-w-148 min-w-48"/>
            </section>
            <textarea
            name="content"
        placeholder="Your comment"
        type="text"
        className="h-40 border w-full outline-none px-2.5 pt-2.5 mb-8"
      />
      <div className="flex justify-end">
        <Button variant="secondary" type="submit">
        {isPending
            ? "Reserving..."
            : "RESERVE"}
        </Button>
      </div>
        </form>
     );
}
 
export default TableBookingForm;