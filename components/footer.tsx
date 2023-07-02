import { discordInviteURL, instagramURL } from "@/lib/constants";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="min-w-full bg-gray-100">
      <div className="text-gray-500  dark:text-gray-400 text-sm w-full mx-auto max-w-full lg:max-w-7xl p-4 flex justify-center items-center flex-col gap-1 sm:flex-row md:items-center sm:justify-between">
        <span className=" sm:text-center ">
          © 2023{" "}
          <a href="https://vanavani.iitm.ac.in/" className="hover:underline">
            Vana Vani
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex gap-2">
          <a target="_blank" rel="noopener noreferrer" href={instagramURL}>
            Instagram
          </a>
          <Separator orientation="vertical" />
          <a target="_blank" rel="noopener noreferrer" href={discordInviteURL}>
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}
