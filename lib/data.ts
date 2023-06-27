import { Committee, Event, Member, SocialType } from "@/lib/types";

export const committees: Committee[] = [
  {
    name: "Disarmament and International Security",
    abbreviation: "DISEC",
    agenda: "(to be announced soon)",
  },
  {
    name: "Economic and Financial",
    abbreviation: "ECOFIN",
    agenda: "(to be announced soon)",
  },
  {
    name: "Social, Cultural and Humanitarian",
    abbreviation: "SOCHUM",
    agenda: "(to be announced soon)",
  },
  {
    name: "United Nations Human Rights Council",
    abbreviation: "UNHRC",
    agenda: "(to be announced soon)",
  },
  {
    name: "United Nations Environment Programme",
    abbreviation: "UNEP",
    agenda: "(to be announced soon)",
  },
];

export const eventsDayOne: Event[] = [
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
    timings: "1:00 - 1:45 PM",
  },
  {
    name: "Session 2",
    timings: "1:45 - 4:30 PM",
  },
];
export const eventsDayTwo: Event[] = [
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
    timings: "12:00 - 12:45 PM",
  },
  {
    name: "Session 2",
    timings: "12:45 - 3:00 PM",
  },
  {
    name: "Valedictory ceremony",
    timings: "3:30 - 4:30 PM",
  },
];

export const secretariat: Record<string, Member[]> = {
  "Secretary Generals": [
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
  ],
  "Rolling Chairpersons": [
    {
      name: "Jwalika Balaji",
      avatarURL: "/avatars/jwalika-balaji.jpg",
      writeup:
        "Jwalika Balaji is an alumnus of Vana Vani (2018). She recently graduated from the National Law School of India University, Bangalore (2023). She specialises in human rights law and socio-legal issues. ",
      role: "Rolling Chairperson",
      socials: [
        { type: SocialType.Instagram, id: "jwalikabalaji" },
        { type: SocialType.Email, id: "jwalika00@gmail.com" },
      ],
    },

    {
      name: "Nithya Subramaniam",
      avatarURL: "/avatars/nithya.jpg",
      writeup:
        "Nithya Subramaniam is a 3rd year Law Student at Jindal Global Law School. She was the MUN Secretary General from 2017-19. She is extremely passionate about debate and research and has a variety of experiences in the legal sphere.",
      role: "Rolling Chairperson",
      socials: [
        { type: SocialType.Instagram, id: "nithyasubs" },
        { type: SocialType.Email, id: "nithyasubramaniam2002@gmail.com" },
      ],
    },
  ],
  "Social, Cultural and Humanitarian": [
    {
      name: "Ashish Bayya",
      avatarURL: "/avatars/avatar.jpg",
      role: "Guest Chairperson",
      socials: [{ type: SocialType.Email, id: "placeholder@example.com" }],
    },
    {
      name: "Sandhya",
      avatarURL: "/avatars/avatar.jpg",
      role: "Chairperson",
      socials: [{ type: SocialType.Email, id: "placeholder@example.com" }],
    },
  ],
  "Disarmament and International Security": [
    {
      name: "Michael Mozim",
      avatarURL: "/avatars/mozim.jpg",
      writeup:
        "Michael Mozim is an avid MUNner who just graduated from VIT Vellore having done B.Tech in Computer Science and Engineering. He has gone for a large number of MUNs during his school days in Sishya, and also chaired in SANMUN 2018 and SISHMUN 2018. He loves reading up on current affairs, and gets involved in any debate regarding diplomacy.",
      role: "Guest Chairperson",
      socials: [
        { type: SocialType.Facebook, id: "mozim.michael" },
        { type: SocialType.Instagram, id: "mozim_michael" },
        { type: SocialType.Snapchat, id: "mozim_michael" },
        { type: SocialType.Email, id: "mmozim2000@gmail.com" },
      ],
    },
  ],
  "Economic and Financial": [
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
  ],
  "United Nations Human Rights Council": [
    {
      name: "Lakshman Kishore R",
      avatarURL: "/avatars/lakshman.jpg",
      writeup: `Lakshman Kishore R is an alumnus of Chettinad Vidyashram and currently pursuing his BTech degree at IIT Madras. As a member of the official oratory contingent of IIT Madras, he possesses excellent public speaking skills. His remarkable experience of participating in 32 MUNs, including 16 executive board positions, highlights his exceptional diplomacy and critical thinking abilities. He firmly upholds the belief that "He who has no charity deserves no mercy."`,
      role: "Guest Chairperson",
      socials: [
        { type: SocialType.Instagram, id: "_lakshman_kishore_" },
        { type: SocialType.Email, id: "rlakshmankishore@gmail.com" },
      ],
    },
    {
      name: "Isha Atteri",
      avatarURL: "/avatars/isha.jpg",
      writeup:
        "Isha Atteri is an alumnus of Vana Vani MHSS and is currently pursuing BTech at Vellore Institute of Technology, Chennai. She has previous MUNs experience and possesses a huge interest for current political affairs.",
      role: "Chairperson",
      socials: [
        { type: SocialType.Email, id: "ishaatteri@gmail.com" },
        { type: SocialType.Phone, id: "+919677055760" },
      ],
    },
  ],
  "United Nations Environment Programme": [
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
        "Nanda Kishore K is pursuing his first year of electrical engineering in college. He has been a part of the school's MUN club for 6 years. He is a tech geek who is into automobiles and aviation. He loves debating in general.",
      socials: [
        { type: SocialType.Instagram, id: "nandakishore.7" },
        { type: SocialType.Email, id: "nanda07kishore@gmail.com" },
      ],
    },
  ],
  Admin: [
    {
      name: "Sivaraman M",
      avatarURL: "/avatars/sivaraman.jpg",
      role: "Head of Admin",
      socials: [{ type: SocialType.Email, id: "visu.murugappan@gmail.com" }],
    },
  ],
  Press: [
    {
      name: "Netra K",
      avatarURL: "/avatars/netra.jpg",
      role: "Head of Press",
      socials: [{ type: SocialType.Email, id: "netrakathir@gmail.com" }],
    },
  ],
};
