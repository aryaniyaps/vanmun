import { MemberCard } from "@/components/member-card";
import { Member, SocialType } from "@/lib/types";

const generals: Member[] = [
  {
    name: "Bhavya Boligorla",
    avatarURL: "/avatars/avatar.jpg",
    writeup: "writeup goes here",
    role: "Secretary General",
    socials: [{ type: SocialType.Email, id: "placeholder@example.com" }],
  },
  {
    name: "Shreyan Iyappan",
    avatarURL: "/avatars/avatar.jpg",
    writeup: "writeup goes here",
    role: "Deputy Secretary General",
    socials: [{ type: SocialType.Email, id: "placeholder@example.com" }],
  },
];

const members: Member[] = [
  {
    name: "Jwalika Balaji",
    avatarURL: "/avatars/jwalika-balaji.jpg",
    writeup:
      "Jwalika Balaji is an alumnus of Vana Vani (2018). She recently graduated from the National Law School of India University, Bangalore (2023). She specialises in human rights law and socio-legal issues. ",
    role: "Chairperson",
    socials: [
      { type: SocialType.Instagram, id: "jwalikabalaji" },
      { type: SocialType.Email, id: "jwalika00@gmail.com" },
    ],
  },
  {
    name: "Mozim Michael",
    avatarURL: "/avatars/avatar.jpg",
    writeup: "writeup goes here",
    role: "Chairperson",
    socials: [{ type: SocialType.Email, id: "placeholder@example.com" }],
  },
  {
    name: "Lakshman Kishore",
    avatarURL: "/avatars/avatar.jpg",
    writeup: "writeup goes here",
    role: "Chairperson",
    socials: [{ type: SocialType.Email, id: "rlakshmankishore@gmail.com" }],
  },
  {
    name: "Aasish Bayya",
    avatarURL: "/avatars/avatar.jpg",
    writeup: "writeup goes here",
    role: "Chairperson",
    socials: [{ type: SocialType.Email, id: "placeholder@example.com" }],
  },
  {
    name: "Aryan Iyappan",
    avatarURL: "/avatars/avatar.jpg",
    writeup:
      "Aryan Iyappan just graduated from Vana Vani (2023). He is a former MUN Secretary General of the school. He is a diplomatic person who enjoys solicitous debates.",
    role: "Chairperson",
    socials: [
      {
        type: SocialType.Instagram,
        id: "aryaniyaps",
      },
      {
        type: SocialType.Email,
        id: "aryaniyappan2006@gmail.com",
      },
    ],
  },
  {
    name: "Shreyas",
    avatarURL: "/avatars/avatar.jpg",
    writeup: "writeup goes here",
    role: "Chairperson",
    socials: [{ type: SocialType.Email, id: "placeholder@example.com" }],
  },
  {
    name: "Nanda Kishore",
    avatarURL: "/avatars/avatar.jpg",
    writeup: "writeup goes here",
    role: "Chairperson",
    socials: [{ type: SocialType.Email, id: "placeholder@example.com" }],
  },
  {
    name: "Isha Atteri",
    avatarURL: "/avatars/avatar.jpg",
    writeup: "writeup goes here",
    role: "Chairperson",
    socials: [{ type: SocialType.Email, id: "placeholder@example.com" }],
  },
  {
    name: "Sandhya",
    avatarURL: "/avatars/avatar.jpg",
    writeup: "writeup goes here",
    role: "Chairperson",
    socials: [{ type: SocialType.Email, id: "placeholder@example.com" }],
  },
  {
    name: "Nithya Subramaniam",
    avatarURL: "/avatars/avatar.jpg",
    writeup: "writeup goes here",
    role: "Chairperson",
    socials: [{ type: SocialType.Email, id: "placeholder@example.com" }],
  },
];

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
