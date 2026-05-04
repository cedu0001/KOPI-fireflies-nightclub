import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl font-bold">
        Welcome to Fireflies Nightclub
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Experience the best nightlife in town with
        us!
      </p>
      <Button>Click me</Button>
    </main>
  );
}
