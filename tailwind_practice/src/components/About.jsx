const About = () => {
  return (
    <div className='grid justify-center items-center bg-black text-white'>
      <div className=''>
        <h1 className='text-center text-[30px] font-bold py-4'>About</h1>
      </div>
      <div className='md:flex justify-around items-center m-10 gap-5 '>
        <div>
            <img className= " p-3 w-full h-full rounded-lg" src="../../src/assets/hero.jpeg" alt="" />
        </div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quibusdam dicta mollitia voluptates optio qui vel iusto eos eum asperiores animi laboriosam, possimus labore exercitationem quis, inventore explicabo. Ipsum, rem.
        </div>
      </div>
    </div>
  )
}

export default About
