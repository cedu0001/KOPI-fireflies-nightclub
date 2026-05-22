"use client";
import Form from "next/form";
import { Button } from "../ui/button";
import { useActionState } from "react";

import newsletterPost from "@/components/newsletter/newsletterPost";

const Newsletter = () => {
	const [state, formAction, isPending] = useActionState(newsletterPost, {
		success: false,
		message: "",
	});
	return (
		<section className="flex flex-col gap-3 items-center my-(--space-3xl)">
			<div className="text-center pb-(--space-xl)">
				<h5 className="!py-0">WANT THE LATEST NIGHT CLUB NEWS?</h5>
				<p className="!py-0">
					Subscribe to our newsletter and never miss an <span className="text-(--highlight-secondary)">Event</span>
				</p>
			</div>
			<Form action={formAction} className="flex flex-col sm:flex-row gap-10">
				{state?.message && (
					<div className={`border p-4 ${state.success ? "" : "border-red-500 text-red-500"}`}>{state.message}</div>
				)}
				<input
					name="email"
					className="w-[353px] lg:w-[500px] placeholder-primary-foreground p-(--space-2xs) text-left border-b-2 bg-primary text-primary-foreground border-primary-foreground [a]:hover:bg-primary/80 aria-expanded:bg-primary aria-expanded:text-primary-foreground"
					type="email"
					placeholder="Enter your email"
				/>
				<Button variant="secondary" type="submit" className="w-[173px] mr-auto ml-auto">
					{isPending ? "Sending..." : "SEND"}
				</Button>
			</Form>
		</section>
	);
};

export default Newsletter;
