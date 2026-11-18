import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClockIcon } from "@/components/ui/icons/ClockIcon";
import { MessageIcon } from "@/components/ui/icons/MessageIcon";
import { ContactForm } from "./ContactForm";

const COPY = {
  eyebrow: "Contact",
  title: "Get in touch",
  description:
    "Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.",
  email: "contact@luma.com",
  responseTime: "Up to 24 hours on business days",
};

type ContactItemProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

function ContactItem({ icon, title, children }: ContactItemProps) {
  return (
    <li className="flex items-center gap-4 rounded-xl bg-cream p-4 xl:p-5">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-soft text-blue">
        {icon}
      </span>
      <div className="flex flex-col gap-0.5 text-sm/6 xl:gap-1">
        <p>{title}</p>
        {children}
      </div>
    </li>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-white py-15 xl:py-25">
      <Container className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
        <div className="xl:w-120">
          <SectionHeading eyebrow={COPY.eyebrow} title={COPY.title} />
          <p className="mt-4 text-sm/6 text-muted xl:text-lg/7">
            {COPY.description}
          </p>
          <ul className="mt-8 flex flex-col gap-4 xl:mt-10">
            <ContactItem icon={<MessageIcon />} title="Email">
              <a
                href={`mailto:${COPY.email}`}
                className="w-fit text-blue hover:underline"
              >
                {COPY.email}
              </a>
            </ContactItem>
            <ContactItem icon={<ClockIcon />} title="Response Time">
              <p className="text-muted">{COPY.responseTime}</p>
            </ContactItem>
          </ul>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
