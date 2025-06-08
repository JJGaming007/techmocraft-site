// src/app/page.tsx
import { Hero } from "@/components/Hero";

export const metadata = {
  title: "Home · Techmocraft Engineering",
  description: "Precision engineering tools and solutions."
};


export default function HomePage() {
  return (
    <>
        <Hero />
        <section className="p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
          <ul className="grid gap-4 sm:grid-cols-2 text-lg list-disc list-inside">
            <li>Die Making</li>
            <li>Die Repairing</li>
            <li>Milling</li>
            <li>Plastic Molding</li>
            <li>...and more (coming soon)</li>
         </ul>
        </section>
    </>
  );
}

