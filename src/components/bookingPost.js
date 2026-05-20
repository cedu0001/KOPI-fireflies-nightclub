"use server";

export default async function commentPost(
  prevState,
  formData
) {
  const eventId = Number(
    formData.get("eventId")
  );

  const name = formData.get("name");
  const content = formData.get("content");
  const email = formData.get("email");
  const table = formData.get("table");
  const guests = formData.get ("guests");
  const phone = formData.get ("phone");

  if (!eventId || !name || !table || !email || !guests || !phone) {
    return {
      success: false,
      message: "Please fill out all fields.",
    };
  }

  try {
    console.log({
  eventId,
  name,
  table,
  guests,
  phone,
  email,
  content,
});

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
          name,
          table,
          guests,
          phone,
          email,
          content,
          date: event.date
        }),
      }
    );

    if (!response.ok) {
        const errorText =
    await response.text();

  console.log(errorText);

      throw new Error(
        "Failed to reserve"
      );
    }

    return {
      success: true,
      message: "Table is reserved",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}