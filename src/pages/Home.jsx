import HeroSection from "../components/HeroSection";
import book from "../assets/book.jpg"

function Home() {

  return (
    <>
    {/* heroSection */}
    <HeroSection/>
    {/* books */}
    <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 my-3 ">
      {[1,2,3,4,5].map(()=>(
        <div key={Math.random()*100}>
          {/* image */}
          <img src={book} alt=""  className="h-[320px] w-[320px]"/>
          {/* description */}
          <div className="text-center space-y-2 mt-3 ">
            <h1>Book Title</h1>
            <p>description</p>
            {/* geners */}
            <div className="flex flex-wrap">
            {["knowledge","comedy","traval","isekai"].map((gener)=>(
              <span className="mx-1 my-1 bg-blue-600 text-white rounded-full py-1 px-2 " key={Math.random()}>{gener}</span>
            ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Home;
