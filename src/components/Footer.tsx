// src/components/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 text-center py-6 mt-12">
      <p>© {new Date().getFullYear()} Techmocraft Engineering</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-white">Privacy</a>
        <a href="#" className="hover:text-white">Terms</a>
        <a href="#" className="hover:text-white">Contact</a>
      </div>
    </footer>
  );
}
