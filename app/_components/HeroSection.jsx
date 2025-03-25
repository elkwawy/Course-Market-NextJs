const HeroSection = () => {
  return (
    <section className="bg-white lg:h-[calc(100vh-66px)] lg:place-content-center dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-7 py-10 sm:py-20 md:grid md:grid-cols-2 md:items-center gap-4 lg:px-8 lg:py-32">
        <div className="max-w-prose text-left space-y-6 max-md:space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Elevate Your Skills with  
            <strong className="text-teal-600"> Expert-Led </strong> Courses
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-400">
            Gain real-world expertise in programming, design, marketing, and more.  
            Learn from top instructors and accelerate your career with high-quality courses.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6 ">
            <a
              className="inline-block rounded border max-sm:px-3 xs:px-3 border-teal-600 bg-teal-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-teal-700"
              href="#"
            >
              Start Learning
            </a>

            <a
              className="block rounded border border-gray-200 max-sm:px-3  px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
              href="#"
            >
              Explore Courses
            </a>
          </div>
        </div>

        <img
          src="/Course.svg"
          alt="Online Learning"
          className="mx-auto  max-w-md text-gray-900 block dark:text-white"
        />
      </div>
    </section>
  );
};

export default HeroSection;
