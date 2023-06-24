import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Committee } from "@/lib/types";

const committees: Committee[] = [
  {
    name: "Disarmament and International Security",
    abbreviation: "DISEC",
    agenda: "(to be decided)",
  },
  {
    name: "Economic and Financial",
    abbreviation: "ECOFIN",
    agenda: "(to be decided)",
  },
  {
    name: "Social, Cultural and Humanitarian",
    abbreviation: "SOCHUM",
    agenda: "(to be decided)",
  },
  {
    name: "United Nations Human Rights Commission",
    abbreviation: "UNHRC",
    agenda: "(to be decided)",
  },
  {
    name: "United Nations Environment Programme",
    abbreviation: "UNEP",
    agenda: "(to be decided)",
  },
];

export default function CommitteesPage() {
  return (
    <div className="px-6 lg:px-0 flex flex-col justify-center items-center min-w-full">
      <div className="py-12 sm:py-16 lg:py-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          committees
        </h1>
        <div className="mt-6 max-w-sm text-center relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          We will be announcing agendas soon.
        </div>
      </div>
      <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-6 pb-8">
        {committees.map((committee) => (
          <Card key={committee.name}>
            <CardHeader>
              <CardTitle>{committee.abbreviation}</CardTitle>
              <CardDescription>{committee.name}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <h3 className="text-gray-600 text-sm">agenda</h3>
              <p className="font-medium">{committee.agenda}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
