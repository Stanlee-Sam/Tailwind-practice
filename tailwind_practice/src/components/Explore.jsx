
const Explore = () => {
  return (
    <div>
      <h1 className="text-center text-[30px] py-4 font-bold">Explore</h1>
      <div className="md:flex justify-evenly items-center gap-10 ">
      <div className="p-5" >
            <img className = "rounded-lg" src="../../src/assets/hero.jpeg" alt="" />
        </div>
        <div className="p-5 grid justify-center items-center gap-y-3">
            <h2 className="text-center text-blue-700 font-bold text-[20px] py-2">Discover a universe ain't seen b4</h2>
            <p className="py-2 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam numquam, tempora exercitationem atque ipsam voluptatibus! Aliquam eveniet provident alias fuga quisquam exercitationem incidunt, maiores quas veritatis qui, quod expedita.</p>
            <div className="bg-red-600 w-1/4 h-10 place-self-center flex justify-center align-center rounded-lg">
                <button className="">Get Started</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
