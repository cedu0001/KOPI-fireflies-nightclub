"use server";
/* AI hjælp med toISOString, kører på UCT time, hvilket var et helt nyt term for mig */
export default async function contactAction(
  prevState,
  formData,
) {
  const name = formData.get("name");
  const email = formData.get("email");
  const content = formData.get("content");

  if (!name || !email || !content) {
    return {
      success: false,
      message: "Please fill out all fields.",
    };
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/contact_messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          content,
          date: new Date().toISOString(),
        }),
      },
    );
    console.log(await response.text());

    if (!response.ok) {
      throw new Error("Failed to send");
    }

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}
