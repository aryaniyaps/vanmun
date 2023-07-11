import { Committee, Event, Member, SocialType } from "@/lib/types";

export const committees: Committee[] = [
  {
    name: "Disarmament and International Security",
    abbreviation: "DISEC",
    agenda: "The threat of nuclear weapons on international peace and security",
    bgDownloadURL: "/background-guides/DISEC-BG-VANMUN23.pdf",
  },
  {
    name: "Economic and Financial",
    abbreviation: "ECOFIN",
    agenda:
      "Discussion on the economic implications and economic recovery from the crisis in Libya",
    bgDownloadURL: "/background-guides/ECOFIN-BG-VANMUN23.pdf",
  },
  {
    name: "Social, Cultural and Humanitarian",
    abbreviation: "SOCHUM",
    agenda:
      "Evaluating the implementation of the International Bill of Human Rights in conflict-prone territories with special emphasis on the Donbas Region",
    bgDownloadURL: "/background-guides/SOCHUM-BG-VANMUN23.pdf",
  },
  {
    name: "United Nations Human Rights Council",
    abbreviation: "UNHRC",
    agenda:
      "Discussing methods to curb human rights violations and infringements, with a special emphasis on advancements in artificial intelligence and automation",
    bgDownloadURL: "/background-guides/UNHRC-BG-VANMUN23.pdf",
  },
  {
    name: "United Nations Environment Programme",
    abbreviation: "UNEP",
    agenda: "Climate change and its effects in the 21st century",
    bgDownloadURL: "/background-guides/UNEP-BG-VANMUN23.pdf",
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
  "Advisory Board": [
    {
      name: "Harishankar Padmanabhan",
      avatarURL: "/avatars/hari.jpg",
      writeup:
        "Harishankar Padmanabhan is the Founder and CEO of Speak Your Mind Education, a startup that focuses on training students in public speaking and on taking care of their mental health. Hari is a reputed public speaker with an experience of 100+ MUNs and public speaking events. He has been on several executive boards for MUNs conducted by some of the most prestigious institutes in the country like IIT, IIM, BITS, Christ, Manipal, VIT and Symbiosis to name a few.",
      role: "Chief MUN Advisor",
      socials: [{ type: SocialType.Instagram, id: "harishankarpadmanabhan" }],
    },
  ],
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
      avatarURL: "/avatars/shreyan.jpg",
      writeup:
        "Shreyan is a 10th grader with a keen interest in international affairs and diplomacy. With each MUN experience, Shreyan aims to broaden their understanding of global issues and actively contribute to meaningful discussions.",
      role: "Deputy Secretary General",
      socials: [
        { type: SocialType.Email, id: "shreyaniyappan2006@gmail.com" },
        { type: SocialType.Phone, id: "+919043597499" },
      ],
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
    {
      name: "Nanda Kishore K",
      avatarURL: "/avatars/nanda.jpg",
      role: "Rolling Chairperson",
      writeup:
        "Nanda Kishore K is pursuing his first year of electrical engineering in college. He has been a part of the school's MUN club for 6 years. He is a tech geek who is into automobiles and aviation. He loves debating in general.",
      socials: [
        { type: SocialType.Instagram, id: "nandakishore.7" },
        { type: SocialType.Email, id: "nanda07kishore@gmail.com" },
      ],
    },
  ],
  "Social, Cultural and Humanitarian": [
    {
      name: "Ashish Bayya",
      avatarURL: "/avatars/ashish.jpg",
      writeup: `Ashish is a recent graduate of B.A. (Hons) Global Affairs from Jindal Global University. With five years of experience in MUN circuits and chairing conferences in India, he has a special interest in humanitarian committees. Currently a Centre Associate at the Centre for Security Studies, he brings expertise in Security Studies and serves as the Publishing Editor at Project Statecraft, a youth-led think-tank. Ashish's leadership roles include being the President of his college's Student Council and his university's Rotaract Club. He aims to engage with delegates in a productive and enjoyable committee experience.`,
      role: "Guest Chairperson",
      socials: [
        { type: SocialType.Instagram, id: "bayyyaaaa" },
        { type: SocialType.Linkedin, id: "ashish-bayya-bsashish11" },
      ],
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
      name: "Shwetha V",
      avatarURL: "/avatars/shwetha.jpg",
      writeup:
        "Shwetha V graduated from Vana Vani (2023). Academically sound and having a deep inclination towards the sciences, She has an ambition of becoming a woman in STEM and dreams of bridging the gap between science, art and culture. She's also passionate about literature, theatrical arts and music. As a poet, She aspires to create an inclusive space with her words.",
      role: "Vice Chairperson",
      socials: [
        { type: SocialType.Instagram, id: "total_._chaos" },
        { type: SocialType.Email, id: "shwetha.viswesh@gmail.com" },
      ],
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
    {
      name: "Vishnu Prahalath S",
      avatarURL: "/avatars/vishnu.jpg",
      writeup:
        "Vishnu Prahalath is an under graduate pursuing BA Economics 2nd year at Madras Christian College, Chennai. The former Vanavanian was the school second topper in 2021-22. In addition to his academic achievements, he also actively participated in several debates and MUNs conducted by different institutions and won several awards. He was awarded the best delegate in GTMUN held in 2021. He was the valued member of the interact club of Vanavani. In his college, he is the student representative and a student of NSS.",
      role: "Chairperson",
      socials: [{ type: SocialType.Email, id: "vishnugayu2004@gmail.com" }],
    },
    {
      name: "Melina Rose",
      avatarURL: "/avatars/melina.jpg",
      writeup:
        "Melina Rose is a 10th grader who has attended MUNs in the past year. Over the years she has become a seasoned orator. She has a passion for writing and poetry and has published her works online on social media platforms. She is an ambassador of finding oneself through writing.",
      role: "Vice Chairperson",
      socials: [
        { type: SocialType.Instagram, id: "_melina_rose_" },
        { type: SocialType.Email, id: "melinarosu@gmail.com" },
      ],
    },
  ],
  "Economic and Financial": [
    {
      name: "Narayan Sekar",
      avatarURL: "/avatars/narayan.jpg",
      writeup:
        "Narayan Sekar is a pure science student in grade 12. He is a keen participant in MUNs right from his 6th grade and has been consistently attending MUNs for 5 years. He has a keen interest for international economic and financial affairs. With each MUN, Narayan aims to update himself as well as his peers in the field, by means of debating.",
      role: "Guest Chairperson",
      socials: [{ type: SocialType.Email, id: "narayansekar111@gmail.com" }],
    },
    {
      name: "Abhimanyu Kumar Sharma",
      avatarURL: "/avatars/abhi.jpg",
      writeup:
        "Abhimanyu is a 17 year old from India who identifies as a bisexual transman and is a Mental Health and LGBTQ+ advocate with a deep rooted interest in economics and geopolitics. He is also an avid debater and an aggressive delegate, he’s been hanging out in the Model UN circuit for the last 4 years and is not bored of it yet! He is also a writer and usually writes about political issues or sometimes even science, he’s also the founder of Change Social Mindset that works towards various social issues.",
      role: "Guest Chairperson",
      socials: [{ type: SocialType.Instagram, id: "doc_1508" }],
    },
    {
      name: "Sandhya Muthu Raman",
      avatarURL: "/avatars/sandhya.jpg",
      writeup:
        "Sandhya is a loyolite currently pursuing her second year in the BBA France program. Her interest lies in cross cultural management and aspires to propel her career in the same field. ",
      role: "Chairperson",
      socials: [{ type: SocialType.Email, id: "sandhyamraman2004@gmail.com" }],
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
    {
      name: "Vidyabharathi S",
      avatarURL: "/avatars/vidya.jpg",
      writeup:
        "Vidya Bharathi S from 10th grade is an optimistic, vibrant and inquisitive young girl. She has been a part of the VANMUN club for the past few years. She has attended MUNs in various schools and had a great learning experience.",
      role: "Vice Chairperson",
      socials: [{ type: SocialType.Email, id: "indranisoms@gmail.com" }],
    },
  ],
  "United Nations Environment Programme": [
    {
      name: "Abejo Michael",
      avatarURL: "/avatars/abejo.jpg",
      writeup:
        "Abejo is an 18 y/o tech enthusiast and an active MUNner through his years of school and has also chaired SISHMUN 2022. He is now a student of VIT Vellore studying Computer Science and Engineering and he is an active part of the tech community.",
      role: "Guest Chairperson",
      socials: [
        { type: SocialType.Instagram, id: "abejo_michael" },
        { type: SocialType.Twitter, id: "_nonamewrath" },
      ],
    },
    {
      name: "Shreyas S",
      avatarURL: "/avatars/shreyas.jpg",
      writeup:
        "Shreyas who is an alumnus of Vanavani, is currently pursuing B.Tech in IIT Madras. He was an avid MUNer who has attended MUNs for 3+ years. His debating interests mainly revolve around technology, it's ethics and it's intersection with pressing environmental issues.",
      role: "Chairperson",
      socials: [
        { type: SocialType.Instagram, id: "_.shreyas07._" },
        { type: SocialType.Email, id: "shreyas.07.sathish@gmail.com" },
      ],
    },
    {
      name: "Moumita A",
      avatarURL: "/avatars/moumita.jpg",
      writeup:
        "Moumita A has participated in a number of debate competitions. She has good communication skills and a huge interest in political affairs. She is a member of the MUN club since 2019.",
      role: "Vice Chairperson",
      socials: [{ type: SocialType.Email, id: "moumita1062008@gmail.com" }],
    },
  ],
  "Technical Team": [
    {
      name: "Ganta Pranaya Rao",
      avatarURL: "/avatars/pranaya.jpg",
      writeup:
        "Ganta Pranaya Rao is an aspiring designer who intends to major in computer science and engineering. She hopes to be a part of the best of these world's and make a significant and meaningful impact on society.",
      role: "Head of Design",
      socials: [{ type: SocialType.Instagram, id: "art_plastiquess" }],
    },
    {
      name: "Sivaraman M",
      avatarURL: "/avatars/sivaraman.jpg",
      writeup:
        "Sivaraman M is a member of the school MUN club since 2019. He has a passion for athletics and basketball. He is sincere, obedient and friendly in nature.",
      role: "Head of Admin",
      socials: [{ type: SocialType.Email, id: "visu.murugappan@gmail.com" }],
    },
    {
      name: "Netra K",
      avatarURL: "/avatars/netra.jpg",
      writeup:
        "Netra K is a 11th grader who has a great passion towards writing articles and reports. She has written numerous reports for various occasions till date and is eagerly awaiting her first MUN.",
      role: "Head of Press",
      socials: [{ type: SocialType.Email, id: "netrakathir@gmail.com" }],
    },
    {
      name: "Cheralathan E",
      avatarURL: "/avatars/cheralathan.jpg",
      writeup:
        "Cheralathan E is an active participant of the school MUN club. Apart from debates, he is keen in basketball, cricket and a part of the alchemy kids theater for more than 2 years.",
      role: "Head of Media",
      socials: [{ type: SocialType.Email, id: "" }],
    },
    {
      name: "Lalith Kishore",
      avatarURL: "/avatars/lalith.jpg",
      writeup:
        "Lalith kishore is a 11th grader, and a technology and a photo capturing expert. He's a professional in astrophotography and landscape photography. Having interest in space science, his aim is to be in the field of aviation.",
      role: "Head of IT",
      socials: [{ type: SocialType.Email, id: "lalithkishore0804@gmail.com" }],
    },
  ],
};
