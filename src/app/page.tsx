export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="font-display text-4xl font-bold text-indigo-700">
        Raivatedu
      </h1>
      <p className="mt-4 max-w-xl text-base text-stone-600">
        Design tokens are wired up. Components and page content are coming in
        the next commits.
      </p>
      <button className="mt-8 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 active:bg-indigo-800 disabled:opacity-50">
        Sample primary button
      </button>
    </main>
  );
}