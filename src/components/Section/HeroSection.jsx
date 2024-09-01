import BatmanJPG from '../../assets/images/batman.jpg'

export const HeroSection = () => {
  return (
    /* Hero Section */
    <section className="h-64 md:h-96 lg:h-128 group relative ">
      {/* Hero Image */}
      <img
        src={BatmanJPG}
        alt="main image"
        className="h-full w-full object-cover"
      />

      {/* Hero Content */}
      <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black ps-5">
        {/* Hero Content Container */}
        <div className="container">
          <h3 className="text-main-melon tracking-wider group-hover:mb-1 duration-500">
            Action, Drama, Thriller
          </h3>
          <h1 className="text-4xl lg:text-6xl text-main-grey group-hover:mb-1 duration-500">
            The Dark Knight
          </h1>
          <p className="text-main-grey text-sm lg:text-base group-hover:mb-2 duration-500 w-3/4 lg:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            quam eaque incidunt earum, iure enim placeat consequatur eos
            molestiae hic!
          </p>
          {/* Detail Container */}
          <div className="flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-10 lg:group-hover:mb-20 duration-1000">
            {/* Watch */}
            <div className="flex space-x-2 items-center cursor-pointer">
              <a
                href="#"
                className="text-main-grey uppercase lg:text-lg hover:text-main-red duration-500"
              >
                Watch Trailer
              </a>
              <div className="flex h-8 w-8 text-center justify-center items-center bg-main-red text-main-grey rounded-full">
                <i className="fas fa-play"></i>
              </div>
            </div>
            {/* INFO */}
            <div className="flex space-x-2 items-center cursor-pointer">
              <a
                href="#"
                className="text-main-grey uppercase lg:text-lg hover:text-main-red duration-500"
              >
                Full Synopsis
              </a>
              <div className="flex h-8 w-8 text-center justify-center items-center bg-main-red text-main-grey rounded-full">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Points */}
      <div className="flex space-x-3 absolute bottom-5 left-10 opacity-0 group-hover:opacity-100 duration-1000">
        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-main-grey"></div>
        <div className="w-3 h-3 lg:w-4 lg:h-4  rounded-full bg-main-red"></div>
        <div className="w-3 h-3 lg:w-4 lg:h-4  rounded-full bg-main-grey"></div>
        <div className="w-3 h-3 lg:w-4 lg:h-4  rounded-full bg-main-grey"></div>
      </div>
    </section>
  )
}
