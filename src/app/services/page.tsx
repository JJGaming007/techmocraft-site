import { Wrench, RotateCcw, Ruler, Layers } from "lucide-react";

const services = [
  { icon: Wrench, title: "Die Making", desc: "Custom die design and fabrication with tight tolerances." },
  { icon: RotateCcw, title: "Die Repairing", desc: "Precision repairs to extend die life and improve performance." },
  { icon: Ruler, title: "Milling", desc: "CNC and manual milling for high-precision parts." },
  { icon: Layers, title: "Plastic Molding", desc: "Plastic injection molding for prototyping and production." }
];

export const metadata = {
  title: "Services · Techmocraft Engineering",
  description: "Explore our precision engineering services including die making, repairing, milling, and molding."
};

export default function ServicesPage() {
  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">Our Services</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition"
          >
            <service.icon className="h-8 w-8 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
