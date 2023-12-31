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
  title: "Schedule | VANMUN 2023",
  description: "Schedule for VANMUN 2023",
};

export default function SchedulePage() {
  return (
    <div className="px-6 pb-24 lg:px-0 flex flex-col justify-center items-center max-w-3xl min-h-full">
      <div className="py-12 sm:py-16 lg:py-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Schedule
        </h1>
        <h3 className="mt-6 max-w-sm text-center relative text-gray-600">
          Here&apos;s the schedule for VANMUN 2023
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
    </div>
  );
}
