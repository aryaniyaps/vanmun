import { Member, SocialType } from "@/lib/types";
import { Icons } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function MemberCard({ member }: { member: Member }) {
  return (
    <Card className="min-w-[330px] min-h-full">
      <CardHeader className="flex flex-col justify-center items-center gap-4">
        <Avatar className="h-32 w-32">
          <AvatarImage src={member.avatarURL} />
          <AvatarFallback>
            {member.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center gap-1">
          <CardTitle>{member.name}</CardTitle>
          <CardDescription>{member.role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center">
        {member.writeup && (
          <h3 className="text-gray-600 text-sm text-center max-w-[280px]">
            {member.writeup}
          </h3>
        )}

        <div className="flex gap-3 text-gray-600 mt-6">
          {member.socials.map((social) => {
            switch (social.type) {
              case SocialType.Email:
                return (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`${social.type}:${social.id}`}
                    href={`mailto:${social.id}`}
                  >
                    <Icons.mail size={20}></Icons.mail>
                  </a>
                );
              case SocialType.Phone:
                return (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`${social.type}:${social.id}`}
                    href={`tel:${social.id}`}
                  >
                    <Icons.phone size={20}></Icons.phone>
                  </a>
                );
              case SocialType.Instagram:
                return (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`${social.type}:${social.id}`}
                    href={`https://www.instagram.com/${social.id}`}
                  >
                    <Icons.instagram size={20}></Icons.instagram>
                  </a>
                );
              case SocialType.Facebook:
                return (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`${social.type}:${social.id}`}
                    href={`https://www.facebook.com/${social.id}`}
                  >
                    <Icons.facebook size={20}></Icons.facebook>
                  </a>
                );
              case SocialType.Snapchat:
                return (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`${social.type}:${social.id}`}
                    href={`https://www.snapchat.com/add/${social.id}`}
                  >
                    <Icons.ghost size={20}></Icons.ghost>
                  </a>
                );
              case SocialType.Twitter:
                return (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`${social.type}:${social.id}`}
                    href={`https://www.twitter.com/${social.id}`}
                  >
                    <Icons.twitter size={20}></Icons.twitter>
                  </a>
                );
              case SocialType.Linkedin:
                return (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`${social.type}:${social.id}`}
                    href={`https://www.linkedin.com/in/${social.id}`}
                  >
                    <Icons.linkedin size={20}></Icons.linkedin>
                  </a>
                );
            }
          })}
        </div>
      </CardContent>
    </Card>
  );
}
