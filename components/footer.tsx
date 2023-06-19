export function Footer() {
  return (
    <footer className="min-w-full bg-gray-100">
      <div className="text-sm w-full mx-auto max-w-screen-xl p-4 flex justify-center items-center flex-col sm:flex-row md:items-center sm:justify-between">
        <span className="text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Vana Vani
          </a>
          . All Rights Reserved.
        </span>
        <p>Powered by Vercel</p>
      </div>
    </footer>
  );
}
