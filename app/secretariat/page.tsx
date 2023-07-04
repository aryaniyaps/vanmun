import { MemberCard } from "@/components/member-card";
import { secretariat } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secretariat | VANMUN 2023",
  description: "Secretariat for VANMUN 2023",
};

export default function SecretariatPage() {
  return (
    <div className="px-6 lg:px-0 flex flex-col justify-center items-center w-full">
      <div className="py-8 sm:py-12 lg:py-16 flex flex-col justify-center items-center">
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
              className="w-full flex flex-col gap-8 items-center"
              id={category}
            >
              <a
                href={`#${category}`}
                className="text-lg font-bold text-gray-400 pt-8"
              >
                {category}
              </a>
              <div className="min-w-full flex flex-wrap justify-center gap-6 overflow-x-clip">
                {members.map((member) => (
                  <div className="flex-member-card" key={member.name}>
                    <MemberCard member={member} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
