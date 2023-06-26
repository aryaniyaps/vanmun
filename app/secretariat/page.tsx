import { MemberCard } from "@/components/member-card";
import { generals, members } from "@/lib/data";

export default function ExecutiveBoardPage() {
  return (
    <div className="px-6 lg:px-0 flex flex-col justify-center items-center min-w-full">
      <div className="py-12 sm:py-16 lg:py-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          secretariat
        </h1>
        <p className="mt-6 max-w-sm text-center text-gray-600">
          Here are the people onboard for VANMUN 2023
        </p>
      </div>
      <div className="grid w-full grid-flow-row sm:grid-cols-2 gap-6 mb-6">
        {generals.map((general) => (
          <MemberCard member={general} key={general.name} />
        ))}
      </div>
      <div className="w-full grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {members.map((member) => (
          <MemberCard member={member} key={member.name} />
        ))}
      </div>
    </div>
  );
}
