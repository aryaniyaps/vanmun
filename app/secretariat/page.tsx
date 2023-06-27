import { MemberCard } from "@/components/member-card";
import { secretariat } from "@/lib/data";

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
      <div className="w-full flex flex-col gap-12 mb-32">
        {Object.entries(secretariat).map(([category, members]) => {
          return (
            <div
              key={category}
              className="flex flex-col gap-8 justify-center items-center"
              id={category}
            >
              <a
                href={`#${category}`}
                className="text-lg font-bold text-gray-400 py-8"
              >
                {category}
              </a>
              <div className="w-full flex flex-col justify-center sm:flex-row gap-6">
                {members.map((member) => (
                  <MemberCard member={member} key={member.name} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
