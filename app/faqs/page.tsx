import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Information | VANMUN 2023",
  description: "Information for VANMUN 2023",
};

export default function SchedulePage() {
  return (
    <div className="px-6 pb-24 lg:px-0 flex flex-col justify-center items-center min-w-full min-h-full">
      <div className="py-12 sm:py-16 lg:py-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <h3 className="mt-6 max-w-sm text-center relative text-gray-600">
          Everything you need to know about VANMUN 2023
        </h3>
      </div>
      <div className="min-w-full w-[300px] md:w-[500px] lg:w-[600px]">
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Should students bring bonafides from school?
            </AccordionTrigger>
            <AccordionContent>
              Yes, students will have to submit bonafides from their respective
              schools on the 14th of July before committee starts.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What is the dress code for the event?
            </AccordionTrigger>
            <AccordionContent>
              The dress code for the event is Western Formals on Day 1 (Friday)
              and Indian Formals on Day 2 (Saturday). Delegates are strictly
              expected to follow the dress code.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What are the prizes available?</AccordionTrigger>
            <AccordionContent>
              From each committee, three delegates will win prizes, for best
              delegate, high commendation and special mention. Apart from this,
              every delegate will receive a certificate of participation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Should delegates be accompanied by a teacher?
            </AccordionTrigger>
            <AccordionContent>
              No, delegates needn&apos;t be accompanied by a teacher.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Will lunch be provided at the event?
            </AccordionTrigger>
            <AccordionContent>
              Yes, lunch will be provided at the event. We will be putting up
              food stalls where delegates can pay to buy lunch.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Who can I contact if I have any queries?
            </AccordionTrigger>
            <AccordionContent>
              f you are having any queries rearding the event, please feel free
              to contact +919444713386 between 10:00 AM and 8:00 PM.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Should delegates bring any identity proof?
            </AccordionTrigger>
            <AccordionContent>
              Yes, delegates are expected to bring any identity proof (Aadhar or
              ID card).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>
              I&apos;m new to MUNs. How can I start preparation?
            </AccordionTrigger>
            <AccordionContent>
              We would recommend getting familiar with the Rules of Procedure
              first.
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
                href="https://www.un.org/en/model-united-nations/introduction"
              >
                Introduction to MUNs
              </a>
              <br />
              Next, go through the backround guide for your committee. This will
              guide you in the right direction in research.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              Where can I find the background guide for my committee?
            </AccordionTrigger>
            <AccordionContent>
              You can find the background guide for your committee{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
                href="/committees"
              >
                here
              </Link>
              .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>
              Can I use Wi-Fi during committee time?
            </AccordionTrigger>
            <AccordionContent>
              No. Usage of Wi-Fi is prohibited during committee time.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
