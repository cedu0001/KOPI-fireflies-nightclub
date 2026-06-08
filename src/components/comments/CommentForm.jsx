"use client";

import { useActionState } from "react";

import commentPost from "@/components/comments/commentPost";

import { Button } from "@/components/ui/button";
import { InputBasic } from "@/components/ui/input";

const CommentForm = ({ eventId }) => {
	const [state, formAction, isPending] = useActionState(commentPost, {
		success: false,
		message: "",
	});

	return (
		<form action={formAction} className="mt-(--space-xl) flex flex-col gap-(--space-s)">
			<h2>LEAVE A COMMENT</h2>

			<input type="hidden" name="eventId" value={eventId} />

			{state?.message && (
				<div
					className={`border p-(--space-s) ${state.success ? "" : "border-(--color-destructive) text-(--color-destructive)"}`}
				>
					{state.message}
				</div>
			)}
			<div className="form-grid">
				<InputBasic name="name" placeholder="Your name" type="text" className="max-w-148 min-w-48"/>
				<InputBasic name="email" placeholder="Your Email" type="email" className="max-w-148 min-w-48" />
			</div>

			<textarea
				name="content"
				placeholder="Your comment"
				className="min-h-32 border p-(--space-s) focus:border-highlight-primary outline-none"
			/>

			<div className="flex justify-end">
				<Button variant="secondary" type="submit">
					{isPending ? "Posting..." : "POST COMMENT"}
				</Button>
			</div>
		</form>
	);
};

export default CommentForm;
