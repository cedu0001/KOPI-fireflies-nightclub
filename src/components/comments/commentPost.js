"use server";
/* AI hjælp med toISOString, kører på UCT time, hvilket var et helt nyt term for mig */
export default async function commentPost(
  prevState,
  formData,
) {
  const eventId = Number(formData.get("eventId"));

  const name = formData.get("name");
  const content = formData.get("content");
  const email = formData.get("email");

  if (!eventId || !name || !content || !email) {
    return {
      success: false,
      message: "Please fill out all fields.",
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId,
          name,
          content,
          email,
          date: new Date().toISOString(),
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to send comment");
    }

    return {
      success: true,
      message: "Comment posted!",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}
