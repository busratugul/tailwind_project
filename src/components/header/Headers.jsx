export const Headers = () => {
  return (
    /* Header Section */
    <header className="bg-black py-6 px-3 lg:py-12 text-main-grey uppercase">
      {/* Header Container */}
      <div className="container flex items-center justify-between space-x-8 lg:space-x-16">
        {/* Logo */}
        <a
          href="https://github.com/busratugul/tailwind_project"
          target="_blank"
          className="text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-main-red to-main-grey"
        >
          GEGA
        </a>

        {/* Mobile Menu */}
        <div className="block md:hidden">
          <div className="space-y-1 cursor-pointer">
            <div className="bg-main-grey w-8 h-1 rounded-full"></div>
            <div className="bg-main-grey w-8 h-1 rounded-full"></div>
            <div className="bg-main-grey w-8 h-1 rounded-full"></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex justify-between flex-1">
          {/* Menu */}
          <div className="flex items-center lg:text-lg space-x-4 lg:space-x-8">
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
          <div className="flex items-center spcae-x-4 lg:space-x-8">
            {/* Search Area */}
            <form action="">
              <div className="border-r px-4 mx-4 py-1 border-main-red group">
                <input
                  type="text"
                  className="bg-transparent border-b border-main-red border-opacity-40 focus:outline-none w-24 lg:w-44 opacity-0 group-hover:opacity-100 transition duration-500"
                />
                <button className="-ml-4 group-hover:ml-0 transition duration-500">
                  <i className="fas fa-search group-hover:text-main-red transition duration-500"></i>
                </button>
              </div>
            </form>
            {/* Signup Area */}
            <div className="flex items-center space-x-4 lg:space-x-8 lg:text-lg">
              <a href="#">Login</a>
              <a
                href="#"
                className="bg-main-red px-3 py-1 hover:bg-rose-600 hover:text-main-grey cursor-pointer transition duration-500 whitespace-nowrap"
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
