export default function CommitteesPage() {
  return (
    <div className="px-6 lg:px-8 flex flex-col justify-center items-center w-full">
      <div className="py-24 sm:py-32 lg:py-48 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          committees
        </h1>
        <div className="mt-6 max-w-sm text-center relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          We will be announcing agendas soon.
        </div>
      </div>
      {/* Committees section */}
      <div className="px-12">
        <ul className="text-center flex flex-col gap-6">
          <li>Disarmament and International Security</li>
          <li> Economic and Financial</li>
          <li>Social, Humanitarian and Cultural</li>
          <li>Human Rights Commission</li>
          <li>Environmental Commission</li>
        </ul>
      </div>
    </div>
  );
}
