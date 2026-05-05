import Image from "next/image";
import { Button } from "@/components/ui/button";
import TesterList from "@/components/TesterList";

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl font-bold">
        Welcome to Fireflies Nightclub
      </h1>
      <TesterList />
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Experience the best nightlife in town with
        us!
      </p>
      <Button variant="default">Click me</Button>
      <Button
        variant="secondary"
        className="block mt-4"
      >
        Click me too
      </Button>
      <Button
        variant="highlight"
        className="block mt-4"
      >
        Highlight Button
      </Button>
    </main>
  );
}
