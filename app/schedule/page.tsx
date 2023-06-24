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

const eventsDayOne = [
  {
    name: "Delegate registration",
    timings: "7:45 - 8:45 AM",
  },
  {
    name: "Inaugural ceremony",
    timings: "9:00 - 9:30 AM",
  },
  {
    name: "Session 1",
    timings: "9:45 AM - 1:00 PM",
  },
  {
    name: "Lunch break",
    timings: "1:00 - 1:30 PM",
  },
  {
    name: "Session 2",
    timings: "1:30 - 4:30 PM",
  },
];
const eventsDayTwo = [
  {
    name: "Delegate arrival",
    timings: "7:45 AM",
  },
  {
    name: "Session 1",
    timings: "8:00 AM - 12:00 PM",
  },
  {
    name: "Lunch break",
    timings: "12:00 - 12:30 PM",
  },
  {
    name: "Session 2",
    timings: "12:30 - 3:00 PM",
  },
  {
    name: "Valedictory ceremony",
    timings: "3:30 - 4:30 PM",
  },
];

export default function SchedulePage() {
  return (
    <div className="px-6 lg:px-0 flex flex-col justify-center items-center min-w-full min-h-full">
      <div className="py-12 sm:py-16 lg:py-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          event schedule
        </h1>
        <div className="mt-6 max-w-sm text-center relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          This event schedule is subject to change.
        </div>
      </div>
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
