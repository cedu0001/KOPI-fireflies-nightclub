"use server";

export default async function contactAction(prevState, formData) {
	const email = formData.get("email");

	if (!email) {
		return {
			success: false,
			message: "Please fill out the box.",
		};
	}

	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletters`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
			}),
		});
		console.log(await response.text());

		if (!response.ok) {
			throw new Error("Failed to send");
		}

		return {
			success: true,
			message: "You've subscribed successfully!",
		};
	} catch (error) {
		return {
			success: false,
			message: "Something went wrong.",
		};
	}
}
