// src/app/products/page.tsx

export const metadata = {
  title: "Products (Deprecated)",
};

export default function ProductsPage() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-2xl font-bold">This page is no longer in use.</h1>
      <p className="mt-2 text-gray-600">
        We now offer services instead. Please visit the{" "}
        <a href="/services" className="text-blue-600 underline">
          Services page
        </a>.
      </p>
    </section>
  );
}
