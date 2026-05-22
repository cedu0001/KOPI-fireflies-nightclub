import Banner from "@/components/Banner";
import BookingSystem from "@/components/TableBooking/TableBookingServer";
import { Suspense } from "react";
import TableStatus from "@/components/TableBooking/TableBookingAvailability";

export default async function BookingPage({searchParams,}){

  return (
    <main>

      <Banner title="BOOK TABLE" />
      <TableStatus />
      <Suspense
      fallback={<div>Loading...</div>}>
      <BookingSystem searchParams={searchParams}
      />
      </Suspense>

    </main>
  );
}
