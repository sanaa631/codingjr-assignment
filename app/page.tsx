export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

          <h1 className="text-3xl font-bold text-indigo-600">
            EduVerse
          </h1>

          <button className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 py-3 rounded-2xl shadow-lg">
            Apply Now
          </button>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700 flex items-center text-white">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 pt-24">

          <div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Shape Your Future With Modern Education
            </h1>

            <p className="mt-6 text-lg text-gray-200 leading-8">
              Empowering students with innovation,
              technology, and career-focused learning
              experiences for a successful future.
            </p>

            <button className="mt-8 bg-white hover:scale-105 transition text-indigo-600 px-8 py-4 rounded-2xl font-semibold shadow-xl">
              Explore Programs
            </button>

          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt=""
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-100">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

          <div>
            <img
              src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a"
              alt=""
              className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
            />
          </div>

          <div>

            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              About Our University
            </h2>

            <p className="text-gray-600 text-lg leading-9">
              Our university provides innovative learning,
              industry-focused education, modern infrastructure,
              and career-oriented programs to help students
              achieve excellence in academics and professional careers.
            </p>

            <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 transition text-white px-8 py-4 rounded-2xl shadow-lg">
              Learn More
            </button>

          </div>

        </div>

      </section>

      {/* Programs */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
            Our Programs
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-gray-100 hover:bg-indigo-50 hover:scale-105 transition duration-300 p-10 rounded-3xl shadow-lg">
              <h3 className="text-3xl font-bold mb-5 text-indigo-600">
                Engineering
              </h3>

              <p className="text-gray-600 leading-8">
                Practical learning with modern technologies,
                live projects, and industry-focused education.
              </p>
            </div>

            <div className="bg-gray-100 hover:bg-indigo-50 hover:scale-105 transition duration-300 p-10 rounded-3xl shadow-lg">
              <h3 className="text-3xl font-bold mb-5 text-indigo-600">
                Management
              </h3>

              <p className="text-gray-600 leading-8">
                Build leadership, communication,
                and business management skills for future success.
              </p>
            </div>

            <div className="bg-gray-100 hover:bg-indigo-50 hover:scale-105 transition duration-300 p-10 rounded-3xl shadow-lg">
              <h3 className="text-3xl font-bold mb-5 text-indigo-600">
                AI & Technology
              </h3>

              <p className="text-gray-600 leading-8">
                Learn AI, software development,
                and cutting-edge technologies shaping the future.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-100">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-gray-900 mb-14">
            Student Testimonials
          </h2>

          <div className="bg-white p-12 rounded-3xl shadow-xl">

            <p className="text-xl text-gray-600 leading-10">
              "The university provided amazing learning opportunities,
              supportive faculty, and excellent placement guidance
              that helped me grow professionally and personally."
            </p>

            <h4 className="mt-8 text-3xl font-bold text-indigo-600">
              — Sarah Ahmed
            </h4>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white text-center px-6">

        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Ready To Start Your Journey?
        </h2>

        <p className="mt-6 text-lg text-gray-200">
          Join thousands of students building successful careers.
        </p>

        <button className="mt-10 bg-white hover:scale-105 transition text-indigo-600 px-10 py-4 rounded-2xl font-semibold shadow-2xl">
          Apply Today
        </button>

      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 text-center">

        <h2 className="text-3xl font-bold">
          EduVerse University
        </h2>

        <p className="mt-4 text-gray-400">
          © 2026 All Rights Reserved
        </p>

      </footer>

    </main>
  );
}