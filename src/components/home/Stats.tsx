export function Stats() {
  return (
    <section className="bg-indigo-600 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          <div>
            <p className="font-display text-4xl font-bold text-white md:text-5xl">15k+</p>
            <p className="mt-2 text-sm font-medium text-indigo-100">Students Trained</p>
          </div>
          <div>
            <p className="font-display text-4xl font-bold text-white md:text-5xl">92%</p>
            <p className="mt-2 text-sm font-medium text-indigo-100">Placement Rate</p>
          </div>
          <div>
            <p className="font-display text-4xl font-bold text-white md:text-5xl">150+</p>
            <p className="mt-2 text-sm font-medium text-indigo-100">Hiring Partners</p>
          </div>
          <div>
            <p className="font-display text-4xl font-bold text-white md:text-5xl">4.8/5</p>
            <p className="mt-2 text-sm font-medium text-indigo-100">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}