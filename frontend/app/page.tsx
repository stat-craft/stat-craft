export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section
          className="relative w-full h-screen text-white bg-gray-900"
          style={{
            backgroundImage: "url('/hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative flex flex-col items-center justify-center h-full px-6 text-center">
            <h1 className="text-4xl font-bold md:text-6xl">
              Embrace the Mystery
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Step into the world of the unknown and uncover the secrets of Call of Cthulhu.
            </p>
            <button className="px-6 py-3 mt-8 text-lg font-medium text-gray-900 bg-green-400 rounded-md hover:bg-green-300">
              Get Started
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo or Brand Name */}
            <div className="text-lg font-bold mb-4 md:mb-0">
              Call of Cthulhu
            </div>
            {/* Navigation Links */}
            <nav className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="#"
                className="hover:text-green-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-green-400 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="hover:text-green-400 transition-colors"
              >
                Contact
              </a>
            </nav>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.326v21.348C0 23.41.59 24 1.325 24h21.348C23.41 24 24 23.41 24 22.674V1.325C24 .59 23.41 0 22.675 0zM8.946 20.174H5.46v-9.348h3.486v9.348zm-1.743-10.74c-1.11 0-2.016-.906-2.016-2.016 0-1.112.906-2.016 2.016-2.016s2.016.904 2.016 2.016c0 1.11-.904 2.016-2.016 2.016zm12.21 10.74h-3.486v-4.596c0-1.095-.025-2.506-1.53-2.506-1.532 0-1.767 1.195-1.767 2.43v4.672h-3.486v-9.348h3.348v1.28h.049c.465-.884 1.595-1.815 3.283-1.815 3.506 0 4.15 2.31 4.15 5.31v4.574z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.418 3.612 8.108 8.21 9.83.6.11.79-.26.79-.58v-2.04c-3.34.73-4.04-1.55-4.04-1.55-.54-1.38-1.32-1.75-1.32-1.75-1.08-.73.08-.72.08-.72 1.19.08 1.82 1.23 1.82 1.23 1.06 1.83 2.8 1.3 3.49.99.11-.76.42-1.3.77-1.6-2.66-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.23-3.25-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23.96-.27 1.99-.4 3.01-.4 1.02 0 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.24 2.86.12 3.16.76.85 1.23 1.94 1.23 3.25 0 4.63-2.81 5.66-5.48 5.96.43.38.82 1.12.82 2.25v3.33c0 .32.19.69.79.58 4.59-1.72 8.2-5.41 8.2-9.83 0-5.52-4.48-10-10-10z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.725c-.951.564-2.005.974-3.127 1.196a4.916 4.916 0 0 0-8.38 4.482c-4.086-.205-7.713-2.165-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.869 3.216 2.188 4.099a4.92 4.92 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.93 4.93 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.104c-.398 0-.79-.023-1.17-.067a13.945 13.945 0 0 0 7.557 2.212c9.056 0 14.007-7.503 14.007-14.007 0-.213-.005-.426-.014-.637A10.025 10.025 0 0 0 24 4.557z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Copyright */}
          <div className="text-center text-gray-500 mt-6">
            © {new Date().getFullYear()} Call of Cthulhu. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
