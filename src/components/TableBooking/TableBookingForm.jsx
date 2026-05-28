"use client";

import bookingPost from "./bookingPost";
import { useActionState } from "react";
import { InputBasic } from "../ui/input";
import { Button } from "../ui/button";
import {
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  Select,
} from "../ui/select";
const TableBookingForm = ({
  events,
  selectedEvent,
  setSelectedEvent,
  selectedTable,
  setSelectedTable,
  reservations,
  tables,
}) => {
  const [state, formAction, isPending] =
    useActionState(bookingPost, {
      success: false,
      message: "",
      values: {},
    });

  const isReserved = (tableNumber) => {
    if (!selectedEvent) return false;
    return reservations.some(
      (reservation) =>
        Number(reservation.eventId) ===
          Number(selectedEvent) &&
        Number(reservation.table) === tableNumber,
    );
  };

  const selectedEventTitle = events.find(
    (event) =>
      String(event.id) === String(selectedEvent),
  )?.title;

  const selectedTableLabel = selectedTable
    ? `Table ${selectedTable}`
    : "";

  return (
    <form
      className="mb-(--space-2xl)"
      action={formAction}
      key={state.message}
    >
      <h2>BOOK A TABLE</h2>
      {state?.message && (
        <div
          className={`border p-(--space-s) ${state.success ? "" : "border-(--color-destructive) text-(--color-destructive)"}`}
        >
          {state.message}
        </div>
      )}
      <section className="flex flex-wrap gap-(--space-s)">
        <InputBasic
          name="name"
          type="text"
          placeholder="Your Full Name"
          defaultValue={state.values?.name}
          className="max-w-148 min-w-48"
        />
        <InputBasic
          name="email"
          type="email"
          placeholder="Your Email"
          defaultValue={state.values?.email}
          className="max-w-148 min-w-48"
        />
        {/* AI hjælp, havde først brugt HTML select/option - men havde problemer med styling (primært fonten) og er derfor nu shadCN select, efter AI's anbefaling da det er nemmere at style */}
        <Select
          value={String(selectedEvent)}
          onValueChange={(value) =>
            setSelectedEvent(value)
          }
          className="w-full border border-input
            	bg-transparent px-2.5 py-(--space-s)
           	 	max-w-148 min-w-48 mb-(--space-s)
				text-text"
        >
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

        <Select
          value={String(selectedTable)}
          onValueChange={(value) =>
            setSelectedTable(Number(value))
          }
          className="w-full border border-input bg-transparent max-w-148 min-w-48 text-text"
        >
          <SelectTrigger className="w-full  max-w-148 min-w-48">
            <SelectValue>
              {selectedTableLabel ||
                "Select Table"}
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
                    disabled={isReserved(
                      tableNumber,
                    )}
                  >
                    Table {tableNumber}
                    {isReserved(tableNumber)
                      ? " (Reserved)"
                      : ""}
                  </SelectItem>
                );
              },
            )}
          </SelectContent>
        </Select>

        {/* AI brugt til hjælp med hvordan selected value bliver sendt med når vi poster formen, den kom med forslaget om det hidden input her */}
        <input
          type="hidden"
          name="table"
          value={selectedTable || ""}
        />
        <input
          type="hidden"
          name="eventId"
          value={selectedEvent || ""}
        />
        <InputBasic
          name="guests"
          type="number"
          placeholder="Number Of Guests"
          min={1}
          max={8}
          onChange={(e) => {
            if (e.target.value > 8) {
              e.target.value = 8;
            }
          }}
          defaultValue={state.values?.guests}
          className="max-w-148 min-w-48"
        />
        <InputBasic
          name="phone"
          type="tel"
          placeholder="Your Telephone Number"
          defaultValue={state.values?.phone}
          className="max-w-148 min-w-48"
        />
      </section>

      <textarea
        name="content"
        placeholder="Your comment"
        type="text"
        defaultValue={state.values?.content}
        className="h-40 border w-full focus:border-highlight-primary outline-none px-2.5 pt-2.5 mb-(--space-l)"
      />
      <div className="flex justify-end">
        <Button variant="secondary" type="submit">
          {isPending ? "Reserving..." : "RESERVE"}
        </Button>
      </div>
    </form>
  );
};

export default TableBookingForm;
