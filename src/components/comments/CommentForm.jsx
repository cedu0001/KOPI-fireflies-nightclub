"use client";

import { useActionState } from "react";

import commentPost from "@/components/comments/commentPost";

import { Button } from "@/components/ui/button";
import { InputBasic } from "@/components/ui/input";

const CommentForm = ({ eventId }) => {

  const [state, formAction, isPending] =
    useActionState(commentPost, {
      success: false,
      message: "",
    });

  return (
    <form
      action={formAction}
      className="mt-12 flex flex-col gap-4"
    >
        <h2>LEAVE A COMMENT</h2>

      <input
        type="hidden"
        name="eventId"
        value={eventId}
      />

      {state?.message && (
        <div
          className={`border p-4 ${
            state.success
              ? ""
              : "border-red-500 text-red-500"
          }`}
        >
          {state.message}
        </div>
      )}
        <div className="flex gap-4">
      <InputBasic
        name="name"
        placeholder="Your name"
        type="text"
      />
      <InputBasic
        name="email"
        placeholder="Your Email"
        type="email"
      />
      </div>

      <textarea
        name="content"
        placeholder="Your comment"
        className="min-h-32 border p-4 focus:border-highlight-primary outline-none"
      />

      <div className="flex justify-end">
        <Button
          variant="secondary"
          type="submit"
        >
          {isPending
            ? "Posting..."
            : "POST COMMENT"}
        </Button>
      </div>
    </form>
  );
};

export default CommentForm;