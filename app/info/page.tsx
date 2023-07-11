import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { eventsDayOne, eventsDayTwo } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Information | VANMUN 2023",
  description: "Information for VANMUN 2023",
};

export default function SchedulePage() {
  return (
    <div className="px-6 pb-24 lg:px-0 flex flex-col justify-center items-center min-w-full min-h-full">
      <div className="py-12 sm:py-16 lg:py-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Information
        </h1>
        <h3 className="mt-6 max-w-sm text-center relative text-gray-600">
          Everything you need to know about VANMUN 2023
        </h3>
      </div>
      <h1 className="py-8 lg:py-12 text-center text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Event Schedule
      </h1>
      <div className="min-w-full h-full flex flex-col justify-center items-center md:flex-row gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Day 1 (Friday)</CardTitle>
            <CardDescription>14th of July, 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event Name</TableHead>
                  <TableHead>Timings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {eventsDayOne.map((event) => (
                  <TableRow key={event.name}>
                    <TableCell>{event.name}</TableCell>
                    <TableCell>{event.timings}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Day 2 (Saturday)</CardTitle>
            <CardDescription>15th of July, 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event Name</TableHead>
                  <TableHead>Timings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {eventsDayTwo.map((event) => (
                  <TableRow key={event.name}>
                    <TableCell>{event.name}</TableCell>
                    <TableCell>{event.timings}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <h1 className="py-8 lg:py-12 text-center text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Dress Code
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle>Day 1 (Friday)</CardTitle>
            <CardDescription>Western Formals</CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle>Day 2 (Saturday)</CardTitle>
            <CardDescription>Indian Formals</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <h1 className="mt-8 py-8 lg:py-12 text-center text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        General Rules
      </h1>
      <ul className="flex flex-col items-center gap-4 text-center">
        <li>Participants must bring any identity proof (aadhar or ID card).</li>
        <li>All participants must strictly adhere to the dress code.</li>
        <li>Usage of Wi-Fi will not be allowed in committee.</li>
        <li>
          No eye contact or usage of personal pronouns will be allowed in
          committee.
        </li>
        <li>
          To pass all resolutions to the executive board, use of a USB is
          recommended.
        </li>
      </ul>
    </div>
  );
}
