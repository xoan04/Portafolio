import Link from "next/link";
import { SiAstro, SiFlutter, SiNextdotjs, SiNodedotjs, SiPowerbi, SiPython, SiReact, SiSqlite, SiTailwindcss } from "react-icons/si";

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function TypeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  );
}

export default function Component() {
  return (
    <div className="flex flex-col items-center min-h-[100dvh]">
      <main className="flex-1 flex flex-col items-center w-full">
        <section id="hero" className="w-full py-12 sm:py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">Juan Jose Gomez Sanchez</h1>
                  <p className=" mx-auto text-muted-foreground md:text-xl">
                    Flutter and Next Js Frontend developer with a passion for building beautiful and functional web applications.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                  <Link
                    href="https://github.com/xoan04"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                  <Link
                    href="https://wa.me/+573245135343"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="group relative w-full max-w-[300px] h-[400px] transform-style-3d">
                  <div className="absolute inset-0 bg-primary rounded-lg shadow-lg transition-transform duration-500 group-hover:-rotate-y-15">
                    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-primary-foreground">
                      <h2 className="text-2xl font-bold">Juan Jose Gomez Sanchez</h2>
                      <p className="text-lg">Frontend Developer</p>
                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        <span className="rounded-full bg-primary-foreground/20 px-3 py-1 text-sm font-medium">
                          React
                        </span>
                        <span className="rounded-full bg-primary-foreground/20 px-3 py-1 text-sm font-medium">
                          Node.js
                        </span>
                        <span className="rounded-full bg-primary-foreground/20 px-3 py-1 text-sm font-medium">
                          TypeScript
                        </span>
                        <span className="rounded-full bg-primary-foreground/20 px-3 py-1 text-sm font-medium">
                          Tailwind CSS
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-secondary rounded-lg shadow-lg transition-transform duration-500 group-hover:rotate-y-15">
                    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-secondary-foreground">
                      <h2 className="text-2xl font-bold">Experience</h2>
                      <p className="text-lg">6+ months in web and mobile development</p>
                      <ul className="mt-4 space-y-2 text-left">
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4" />
                          Proficient in modern web technologies
                        </li>
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4" />
                          Experienced in building scalable and maintainable applications
                        </li>
                        <li>
                          <CheckIcon className="mr-2 inline-block h-4 w-4" />
                          Passionate about creating user-friendly interfaces
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the projects I've worked on.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-center justify-center gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-4xl lg:grid-cols-2">
              <div className="group relative overflow-hidden rounded-lg bg-background shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 space-y-2">
                  <h3 className="text-xl font-bold">Flip Card</h3>
                  <p className="text-muted-foreground">
                    A web application built with React, Node.js, and Tailwind CSS.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary-foreground/20 px-3 py-1 text-sm font-medium">React</span>
                    <span className="rounded-full bg-primary-foreground/20 px-3 py-1 text-sm font-medium">Node.js</span>
                    <span className="rounded-full bg-primary-foreground/20 px-3 py-1 text-sm font-medium">
                      Tailwind CSS
                    </span>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Link
                      href="https://flipcard-jade-rho.vercel.app/"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg bg-background shadow-lg transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 space-y-2">
                  <h3 className="text-xl font-bold">Demo Ecommerce (Still under construction)</h3>
                  <p className="text-muted-foreground">
                    A mobile-first e-commerce demo website built with Flutter and Firebase.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary-foreground/20 px-3 py-1 text-sm font-medium">Flutter</span>
                    <span className="rounded-full bg-primary-foreground/20 px-3 py-1 text-sm font-medium">
                      Firebase
                    </span>
                    <span className="rounded-full bg-primary-foreground/20 px-3 py-1 text-sm font-medium">
                      E-commerce
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
                <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the technologies I'm proficient in.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <SiReact className="h-12 w-12" />
                  <p className="text-lg font-medium">React</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <SiAstro className="h-12 w-12" />
                  <p className="text-lg font-medium">Astro</p>
                </div>  
                <div className="flex flex-col items-center justify-center space-y-2">
                  <SiTailwindcss className="h-12 w-12" />
                  <p className="text-lg font-medium">Tailwind CSS</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <SiNextdotjs className="h-12 w-12" />
                  <p className="text-lg font-medium">Next.js</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <SiFlutter className="h-12 w-12" />
                  <p className="text-lg font-medium">Flutter</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <SiSqlite className="h-12 w-12" />
                  <p className="text-lg font-medium">SQL</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <SiPython className="h-12 w-12" />
                  <p className="text-lg font-medium">Python</p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <SiPowerbi className="h-12 w-12" />
                  <p className="text-lg font-medium">Power Bi</p>
                </div>
              </div>
              <div className="flex flex-col justify-normal  space-y-4">
                <h3 className="text-2xl font-bold">Why Choose Me?</h3>
               <p>
               As a systems engineer with a solid foundation in data development and analysis. I am dedicated to creating efficient and effective solutions, 
               focusing on user-friendly and scalable applications. My work emphasizes continuous improvement and the consistent delivery of high-quality projects.
                </p>
                <ul className="space-y-2">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Proficient in a wide range of web technologies
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Experienced in building responsive and accessible interfaces
                  </li>
                  <li />
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
