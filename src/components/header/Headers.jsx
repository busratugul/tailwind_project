export const Headers = () => {
  return (
    /* Header Section */
    <header className="bg-black py-12 text-main-grey font-gemunu uppercase">
      {/* Header Container */}
      <div className="container flex items-center justify-between space-x-16">
        {/* Logo */}
        <a
          href="https://github.com/busratugul/tailwind_project"
          target="_blank"
          className="text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-main-red to-main-grey"
        >
          GEGA
        </a>
        {/* Navigation */}
        <nav className="flex justify-between flex-1">
          {/* Menu */}
          <div className="flex items-center text-lg space-x-8">
            <a
              href="#"
              className="hover:text-main-melon transition duration-500"
            >
              movies
            </a>
            <a
              href="#"
              className="hover:text-main-melon transition duration-500"
            >
              celebrities
            </a>
            <a
              href="#"
              className="hover:text-main-melon transition duration-500"
            >
              blog
            </a>
            <a
              href="#"
              className="hover:text-main-melon transition duration-500"
            >
              news
            </a>
            <a
              href="#"
              className="hover:text-main-melon transition duration-500"
            >
              about
            </a>
          </div>
          {/* Login Area */}
          <div className="flex items-center space-x-8">
            {/* Search Area */}
            <form action="">
              <div className="border-r px-4 mx-4 py-1 border-main-red group">
                <input
                  type="text"
                  className="bg-transparent border-b border-main-red border-opacity-40 focus:outline-none w-44 opacity-0 group-hover:opacity-100 transition duration-500"
                />
                <button className="-ml-4 group-hover:ml-0 transition duration-500">
                  <i className="fas fa-search group-hover:text-main-red transition duration-500"></i>
                </button>
              </div>
            </form>
            {/* Signup Area */}
            <div className="flex items-center space-x-8 text-lg">
              <a href="#">Login</a>
              <a
                href="#"
                className="bg-main-red px-3 py-1 hover:bg-rose-600 hover:text-main-grey cursor-pointer transition duration-500"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
