
const Hero = () => {
  return (
    <div className=" relative h-lvh">
    <div className=" bg-cover bg-center md:bg-fill">
      <img className="w-full h-svh" src="/src/assets/hero.jpeg" alt="" />
    </div>
    <div className="Navbar flex items-center justify-between h-20 bg-transparent absolute top-0 inset-x-0">
      <div>
        <h1 className="m-10 text-lg text-white ">Anime</h1>
      </div>
      <div>
        <ul className="flex justify-between gap-4 font-medium cursor-pointer text-white">
          <li>Home</li>
          <li>About</li>
          <li>Explore</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <button className="bg-orange-500 text-white font-medium rounded-md p-1 m-10">
          Register
        </button>
      </div>
    </div>
    <div className="grid w-full ">
      <div className=" text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2">
        <h1 className="text-white font-light">Enjoy</h1>
        <p className="text-white font-bold text-[30px]">Explore the World</p>
        <div>
          <button className="bg-orange-500 text-white  rounded-none p-2">
            Visit Now
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero
