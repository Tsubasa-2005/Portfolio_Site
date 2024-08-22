import Image from "next/image";

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-700">
            I'm a passionate web developer specializing in modern web technologies.
            Explore my work and projects below.
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">Project 1</h2>
            <p className="text-gray-600 mb-4">
              A brief description of your first project.
            </p>
            <a
                href="#"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
              View Details
            </a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">Project 2</h2>
            <p className="text-gray-600 mb-4">
              A brief description of your second project.
            </p>
            <a
                href="#"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
              View Details
            </a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">Project 3</h2>
            <p className="text-gray-600 mb-4">
              A brief description of your third project.
            </p>
            <a
                href="#"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
              View Details
            </a>
          </div>
        </section>

        <section className="mt-12">
          <Image
              src="/profile.jpg"  // 自分の写真やロゴに置き換え
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full border border-gray-300 shadow-md"
          />
          <h2 className="text-3xl font-semibold mt-4">About Me</h2>
          <p className="text-center text-gray-700 mt-2 max-w-prose">
            I am a developer with expertise in frontend and backend technologies.
            I enjoy creating beautiful and functional applications that make a difference.
          </p>
        </section>
      </main>
  );
}