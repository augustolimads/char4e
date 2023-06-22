import { User } from "../components/User";

export default function Home() {
  return (
    <main className="flex flex-col justify-center align-center text-center h-screen bg-slate-900 text-white">
      <h1 className="text-2xl font-bold">Boilerplate 2023</h1>
      <h2>Typescript, ReactJS, NextJS e TailwindCSS</h2>
      {/* @ts-expect-error Async Server Component */}
      <User />
    </main>
  )
}
