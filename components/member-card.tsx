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
    <Card>
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
            }
          })}
        </div>
      </CardContent>
    </Card>
  );
}
