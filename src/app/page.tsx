export default function HomePage() {
  return (
    <main className="relative min-h-dvh bg-[url('/assets/images/me.jpg')] bg-cover bg-center text-white">
      <div
        id="container"
        className="absolute bottom-5 right-5 rounded-sm bg-white/[0.07] px-3.5 py-2.5 text-right"
      >
        <h1 className="m-0 font-bold">Bas Kamer</h1>
        <p className="mb-0 mt-1 text-right text-xs text-white/70">
          back in the seventies
        </p>
      </div>
    </main>
  );
}