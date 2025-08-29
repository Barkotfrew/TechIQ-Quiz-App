export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} TechIQ. All Rights Reserved.
      </p>
    </footer>
  );
}