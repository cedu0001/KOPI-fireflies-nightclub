"use client"

import Form from "next/form";
import { InputBasic } from "./ui/input";
import { Button } from "./ui/button";
const TableBookingForm = ({events, selectedEvent, setSelectedEvent, selectedTable, setSelectedTable}) => {
    return ( 
        <Form className="mb-16">
            <h2>BOOK A TABLE</h2>
            <section className="flex flex-wrap gap-4">
            <InputBasic type="text" placeholder="Your Full Name"
            className="max-w-148 min-w-48"/>
            <InputBasic type="email" placeholder="Your Email"
            className="max-w-148 min-w-48"/>
            <select
            name="table"
            value={selectedTable}
            onChange={(e) => setSelectedTable(e.target.value)}
             className="w-full border border-input bg-transparent px-2.5 py-4 max-w-148 min-w-48 text-text">
            <option value="">
            Select Table
            </option>
  {Array.from({ length: 15 }).map(
    (_, index) => (
      <option
        key={index + 1}
        value={index + 1}
      >
        Table {index + 1}
      </option>
    )
  )}
</select>
            <InputBasic type="number" placeholder="Number Of Guests"
            className="max-w-148 min-w-48"/>
            <select
            name="eventId"
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            className="
            w-full border border-input
            bg-transparent px-2.5 py-4
            max-w-148 min-w-48 mb-4
            text-text"      >

          <option value="">
            Select Event
          </option>

          {events.map((event) => (
            <option
              key={event.id}
              value={event.id}
            >
              {event.title}
            </option>
          ))}
        </select>
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