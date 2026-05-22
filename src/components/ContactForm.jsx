"use client"
import { useActionState } from "react";
import contactPost from "@/components/contactPost"
import { InputBasic } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [state, formAction, isPending] =
    useActionState(contactPost, {
      success: false,
      message: "",
    });
  return (
    <form
    action={formAction}
    className="max-w-[700px] mr-auto ml-auto my-16">

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

      <InputBasic
        name="name"
        placeholder="Your name"
        type="text"
      />
      <InputBasic
        name="email"
        placeholder="Your email"
        type="email"
      />
      <textarea
        name="content"
        placeholder="Your comment"
        type="text"
        className="h-40 border w-full outline-none px-2.5"
      />
      <div className="flex justify-end">
        <Button
          variant="secondary"
          className="mt-8"
          type="submit"
        >
          {isPending ? "Sending..." : "SEND"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
