import Link from "next/link";
import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid";

export default function NotFound() {
  return (
    <article className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="mb-4 text-8xl font-semibold text-error">404</h1>
      <p className="mb-4 text-3xl text-base-content">
        ¡Oops! Parece que te perdiste.
      </p>
      <div className="animate-bounce">
        <QuestionMarkCircleIcon className="mx-auto h-16 w-16 text-error" />
      </div>
      <p className="btn btn-lg btn-error text-base-200 mt-8">
        <Link href="/">Volver</Link>
      </p>
    </article>
  );
}
