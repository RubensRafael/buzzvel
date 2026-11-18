"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/Button";

const COPY = {
  title: "Contact us",
  description: "Fill out the fields and we will get in touch.",
  submit: "Send message",
  sending: "Sending...",
  success: "Thanks! Your message was sent. We’ll reply within 24 hours.",
};

type FormState = { sent: boolean };

async function sendMessage(): Promise<FormState> {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return { sent: true };
}

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "email";
  autoComplete?: string;
  multiline?: boolean;
};

function Field({
  id,
  label,
  placeholder,
  type = "text",
  autoComplete,
  multiline = false,
}: FieldProps) {
  const className =
    "mt-2 w-full rounded-lg border border-line bg-cream px-4 text-sm/6 placeholder:text-muted focus:border-blue focus:outline-none";

  return (
    <div>
      <label htmlFor={id} className="block text-sm/6 font-bold">
        {label}
        <span aria-hidden="true" className="ml-1 text-red-600">
          *
        </span>
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          required
          className={`${className} block h-25 resize-none py-3.5 xl:h-30`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required
          className={`${className} h-12 py-3`}
        />
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendMessage, {
    sent: false,
  });

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-line bg-white px-5 py-6 shadow-sm xl:w-135 xl:shrink-0 xl:p-10"
    >
      <h3 className="font-display text-xl/8 font-bold">{COPY.title}</h3>
      <p className="mt-2 text-sm/6 text-muted">{COPY.description}</p>
      <div className="mt-6 flex flex-col gap-5">
        <Field
          id="name"
          label="Full name"
          placeholder="Your name"
          autoComplete="name"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          placeholder="youremail@example.com"
          autoComplete="email"
        />
        <Field
          id="question"
          label="Your question"
          placeholder="Tell us how we can help..."
          multiline
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={isPending}
        className="mt-6 w-full"
      >
        {isPending ? COPY.sending : COPY.submit}
      </Button>
      <p role="status" className="mt-4 text-sm/6 text-blue empty:mt-0">
        {state.sent && !isPending ? COPY.success : ""}
      </p>
    </form>
  );
}
