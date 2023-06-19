import { registerFormURL } from "@/lib/constants";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 px-8">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Registration closes on July 1st, 2023.
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          let&apos;s start the parliamentary debate
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          <b>VANMUN 2023</b> is happening on the <b>14th and 15th of July</b>.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={registerFormURL}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            register now
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.com/invite/yY85QRp4QS"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Join Discord <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
