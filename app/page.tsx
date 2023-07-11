import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { instagramURL, registerFormURL } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 px-8">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 font-black leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Registrations are open now!
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Crafting tomorrow&apos;s diplomats today
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <b>VANMUN 2023</b> is happening on the <b>14th and 15th of July</b>.
          </p>
          <div className="mt-10 flex items-center justify-center gap-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={registerFormURL}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register now
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={instagramURL}
              className="text-sm font-semibold flex gap-2 items-center leading-6 text-gray-900"
            >
              Follow us on <Icons.instagram size={20} className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mb-36 px-8 flex flex-col gap-8 justify-center items-center">
        <p className="text-center lg:text-lg">
          It gives us great pleasure to invite you all to the first edition of
          VANMUN. Conducting VANMUN is a dream coming true. The MUN sessions
          help the students develop their leadership skills, research writing
          skills, public speaking skills, and problem-solving skills. It also
          helps to build the confidence necessary to succeed with an
          entrepreneurial spirit. We hope that the very first edition of VANMUN
          will surely be a great learning experience filled with fun.
        </p>
        <div className="flex items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/avatars/gitanjali-mam.jpg" />
            <AvatarFallback>
              {"Gitanjali Elangovan".slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="font-semibold">Mrs. Gitanjali Elangovan</p>
            <p className="tex-xs text-gray-500">MUN Coordinator, Vana Vani</p>
          </div>
        </div>
      </div>
    </>
  );
}
