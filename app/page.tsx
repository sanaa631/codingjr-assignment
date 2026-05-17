export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-400">
            EduVerse
          </h1>

          <button className="bg-indigo-500 hover:bg-indigo-600 transition px-5 py-2 rounded-xl">
            Apply Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden">

        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Shape Your Future With Modern Education
            </h1>

            <p className="mt-6 text-slate-300 text-lg">
              Empowering students with innovation,
              technology, and career-focused learning.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-indigo-500 hover:bg-indigo-600 transition px-6 py-3 rounded-2xl">
                Explore Programs
              </button>

              <button className="border border-white/20 hover:bg-white/10 transition px-6 py-3 rounded-2xl">
                Learn More
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="students"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Programs */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-14">
            Our Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Engineering",
              "Management",
              "Design",
              "AI & Technology",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:scale-105 transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {item}
                </h3>

                <p className="text-slate-300">
                  Learn modern industry-focused skills
                  with expert mentorship.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">

          {[
            ["12K+", "Students"],
            ["95%", "Placements"],
            ["250+", "Faculty"],
            ["40+", "Courses"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="text-center bg-white/5 rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-4xl font-bold text-indigo-400">
                {number}
              </h3>

              <p className="mt-2 text-slate-300">
                {label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-14">
            Student Testimonials
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[1,2,3].map((item) => (
              <div
                key={item}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <p className="text-slate-300">
                  "Amazing learning experience with
                  modern teaching methods and supportive faculty."
                </p>

                <h4 className="mt-6 font-semibold">
                  Student Name
                </h4>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[40px] p-14 text-center">

          <h2 className="text-5xl font-bold">
            Ready To Begin Your Journey?
          </h2>

          <p className="mt-6 text-lg text-white/80">
            Join thousands of students building their future today.
          </p>

          <button className="mt-8 bg-white text-indigo-600 px-8 py-4 rounded-2xl font-semibold">
            Apply Now
          </button>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-slate-400">
        © 2026 EduVerse. All rights reserved.
      </footer>

    </main>
  );
}