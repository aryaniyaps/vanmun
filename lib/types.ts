export enum SocialType {
  Facebook,
  Snapchat,
  Instagram,
  Twitter,
  Email,
}

type Social = {
  type: SocialType;
  id: string;
};

export type Member = {
  name: string;
  avatarURL: string;
  writeup?: string;
  role: string;
  socials: Social[];
};

export type Committee = {
  name: string;
  abbreviation: string;
  agenda: string;
};
