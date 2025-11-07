export default function Home() {
  return (
    <main className="container py-16 text-center">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        🧥 Welcome to <span className="text-blue-600">AZVEN Brand</span>
      </h1>

      <p className="mt-4 text-gray-600">
        Stylish wear, premium quality — delivered with confidence.
      </p>

      <a
        href="https://wa.me/9665XXXXXXXX" // yahan apna WhatsApp number
        className="inline-flex items-center gap-2 mt-6 rounded-md bg-green-500 px-5 py-3 font-medium text-white hover:bg-green-600"
      >
        📱 Order on WhatsApp
      </a>
    </main>
  );
}
