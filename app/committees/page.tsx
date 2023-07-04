import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { committees } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Committees | VANMUN 2023",
  description: "Committees for VANMUN 2023",
};

export default function CommitteesPage() {
  return (
    <div className="px-6 lg:px-0 flex flex-col justify-center items-center min-w-full">
      <div className="py-12 sm:py-16 lg:py-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Committees
        </h1>
        <h3 className="mt-6 max-w-sm text-center relative text-gray-600">
          Here are the committees for VANMUN 2023
        </h3>
      </div>
      <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-6 pb-8">
        {committees.map((committee) => (
          <Card key={committee.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{committee.abbreviation}</CardTitle>
              <CardDescription>{committee.name}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-2">
              <h3 className="text-gray-600 text-sm font-medium">agenda</h3>
              <p className="font-normal ">{committee.agenda}</p>
            </CardContent>
            <CardFooter>
              <Link
                className="text-gray-400 font-medium"
                href={`/secretariat#${committee.name}`}
              >
                executive board
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
