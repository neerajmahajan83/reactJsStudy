import HeaderMenu from "../headermenu";

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header className="w-full max-w-3xl px-16 py-4">
        <HeaderMenu/>
      </header>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
            About Us
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Welcome to our Next.js application! This is a modern web app built with Next.js 16,
            React 19, TypeScript, and Tailwind CSS. We're passionate about creating fast,
            scalable, and user-friendly web experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">Fast</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Built with performance in mind using Next.js and React Server Components.
              </p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">Modern</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Using the latest web technologies and best practices.
              </p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">Scalable</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Designed to grow with your business needs.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}