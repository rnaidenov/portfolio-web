export const Index = () => {

  return (<>
    <div className="bg-raisin-black w-full h-screen flex flex-col items-center justify-center text-center">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Radoslav Naydenov
        </h1>
        <p className="text-xl">Full-stack Developer</p>
      </div>

      <nav className="mt-8">
        <ul className="flex flex-col justify-center">
          <li>
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </>
  )
};