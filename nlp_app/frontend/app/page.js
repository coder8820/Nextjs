export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-green-700">
        Smart Mental Health Companion 💬
      </h1>
      <p className="text-gray-600 mt-4">
        Understand your emotions through AI-driven conversations.
      </p>
      <a
        href="/chat"
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Start Chat
      </a>
    </div>
  );
}
