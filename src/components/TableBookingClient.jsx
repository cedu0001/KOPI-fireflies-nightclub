"use client";

import { useState } from "react";

import Tables from "./TableBookingTables";
import TableBookingForm from "./TableBookingForm";

const BookingClient = ({
  tables,
  reservations,
  events,
  selectedEvent,
}) => {

    const [activeEvent, setActiveEvent] =
    useState(selectedEvent || "");

    const [selectedTable, setSelectedTable] =
    useState("");

  return (
    <>

      <Tables
        tables={tables}
        reservations={reservations}
        selectedEvent={activeEvent}
        selectedTable={selectedTable}
        setSelectedTable={setSelectedTable}
      />

      <TableBookingForm
        events={events}
        selectedEvent={activeEvent}
        setSelectedEvent={setActiveEvent}
        selectedTable={selectedTable}
        setSelectedTable={setSelectedTable}
        reservations={reservations}
      />

    </>
  );
};

export default BookingClient;