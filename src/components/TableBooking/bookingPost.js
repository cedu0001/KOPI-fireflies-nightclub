"use server";

export default async function commentPost(
  prevState,
  formData
) {
  const eventId = Number(
    formData.get("eventId")
  );

  const values = {
    eventId: formData.get("eventId"),
    name: formData.get("name"),
    content: formData.get("content"),
    email: formData.get("email"),
    table: formData.get("table"),
    guests: formData.get("guests"),
    phone: formData.get("phone"),
  };

  if (!eventId || !values.name || !values.table || !values.email || !values.guests || !values.phone) {
    return {
      success: false,
      message: "Please fill out all fields.",
      values,
    };
  }

  try {

    const selectedEventData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${eventId}`);

    const event = await selectedEventData.json();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/reservations`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
        eventId,
        name: values.name,
        table: values.table,
        guests: values.guests,
        phone: values.phone,
        email: values.email,
        content: values.content,
        date: event.date,
        }),
      }
    );

    if (!response.ok) {
      /* --AI HJÆLP TIL AT DEBUGGE----
      const errorText = await response.text();
      console.log(errorText); */

      throw new Error(
        "Failed to reserve"
      );
    }

    return {
      success: true,
      message: "Table is reserved",
      values: {
        name: "",
        email: "",
        table: "",
        guests: "",
        eventId: "",
        phone: "",
        content: "",
      },
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}