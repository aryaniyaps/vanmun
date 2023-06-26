import { MemberCard } from "@/components/member-card";
import { Member, SocialType } from "@/lib/types";

const generals: Member[] = [
  {
    name: "Bhavya Boligorla",
    avatarURL: "/avatars/bhavya.jpg",
    writeup:
      "Bhavya is a 11th grader with a passion for learning and has attended multiple MUNs in the past four years. She is a responsible and meticulous student and is driven by a genuine desire to understand the world, improve herself and make a positive impact.",
    role: "Secretary General",
    socials: [
      { type: SocialType.Email, id: "madhavisanj@gmail.com" },
      { type: SocialType.Phone, id: "+918939096046" },
    ],
  },
  {
    name: "Shreyan Iyappan",
    avatarURL: "/avatars/avatar.jpg",
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
    name: "Michael Mozim",
    avatarURL: "/avatars/mozim.jpg",
    writeup:
      "Michael Mozim is an avid MUNner who just graduated from VIT Vellore having done B.Tech in Computer Science and Engineering. He has gone for a large number of MUNs during his school days in Sishya, and also chaired in SANMUN 2018 and SISHMUN 2018. He loves reading up on current affairs, and gets involved in any debate regarding diplomacy.",
    role: "Chairperson",
    socials: [
      { type: SocialType.Facebook, id: "mozim.michael" },
      { type: SocialType.Instagram, id: "mozim_michael" },
      { type: SocialType.Snapchat, id: "mozim_michael" },
      { type: SocialType.Email, id: "mmozim2000@gmail.com" },
    ],
  },
  {
    name: "Nithya Subramaniam",
    avatarURL: "/avatars/nithya.jpg",
    writeup:
      "Nithya Subramaniam is a 3rd year Law Student at Jindal Global Law School. She was the MUN Secretary General from 2017-19. She is extremely passionate about debate and research and has a variety of experiences in the legal sphere.",
    role: "Chairperson",
    socials: [
      { type: SocialType.Instagram, id: "nithyasubs" },
      { type: SocialType.Email, id: "nithyasubramaniam2002@gmail.com" },
    ],
  },
  {
    name: "Lakshman Kishore R",
    avatarURL: "/avatars/avatar.jpg",
    writeup: `Lakshman Kishore R is an alumnus of Chettinad Vidyashram and currently pursuing his BTech degree at IIT Madras. As a member of the official oratory contingent of IIT Madras, Lakshman possesses excellent public speaking skills. His remarkable experience of participating in 32 MUNs, including 16 executive board positions, highlights his exceptional diplomacy and critical thinking abilities. Recently he also chaired the IITM Diplomacia MUN. Beyond academics, Lakshman finds joy in Air Pistol Shooting and playing chess. He firmly upholds the belief that "He who has no charity deserves no mercy."`,
    role: "Chairperson",
    socials: [{ type: SocialType.Email, id: "rlakshmankishore@gmail.com" }],
  },
  {
    name: "Ashish Bayya",
    avatarURL: "/avatars/avatar.jpg",
    role: "Chairperson",
    socials: [{ type: SocialType.Email, id: "placeholder@example.com" }],
  },
  {
    name: "Aryan Iyappan",
    avatarURL: "/avatars/aryan.jpg",
    writeup:
      "Aryan Iyappan just graduated from Vana Vani (2023). He is a former MUN Secretary General of the school. He has been a part of the school's MUN club for more than 6 years and has attended various MUNs. He is a vivid debater who embraces diplomacy.",
    role: "Chairperson",
    socials: [
      {
        type: SocialType.Instagram,
        id: "aryaniyaps",
      },
      { type: SocialType.Twitter, id: "aryaniyaps" },
      {
        type: SocialType.Email,
        id: "aryaniyappan2006@gmail.com",
      },
    ],
  },
  {
    name: "Shreyas S",
    avatarURL: "/avatars/avatar.jpg",
    role: "Chairperson",
    socials: [{ type: SocialType.Email, id: "placeholder@example.com" }],
  },
  {
    name: "Nanda Kishore K",
    avatarURL: "/avatars/nanda.jpg",
    role: "Chairperson",
    writeup:
      "Nanda Kishore is pursuing his first year of electrical engineering in college. He has been a part of the school's MUN club for 6 years. He is a tech geek who is into automobiles and aviation. He loves debating in general.",
    socials: [
      { type: SocialType.Instagram, id: "nandakishore.7" },
      { type: SocialType.Email, id: "nanda07kishore@gmail.com" },
    ],
  },
  {
    name: "Isha Atteri",
    avatarURL: "/avatars/isha.jpg",
    writeup:
      "Isha Atteri is an alumnus of Vana Vani MHSS and is currently pursuing B.tech at Vellore Institute of Technology, Chennai. She has previous MUNs experience and possesses a huge interest for current political affairs.",
    role: "Chairperson",
    socials: [
      { type: SocialType.Email, id: "ishaatteri@gmail.com" },
      { type: SocialType.Phone, id: "+919677055760" },
    ],
  },
  {
    name: "Sandhya",
    avatarURL: "/avatars/avatar.jpg",
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
