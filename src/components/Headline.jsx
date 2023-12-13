
const Headline = () => {
  return (
    <div className="max-w-[1640px] mx-auto py-12 p-4 grid
    md:grid-cols-3 gap-6 ">
        {/* cards */}
        <div className="rounded-xl relative">
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white" >
                <p className="font-bold text-2xl px-2 pt-2">Sun's Out, BOGO's Out</p>
                <p className="px-2 ">Through 8/26</p>
                <button className="border-white bg-gray-100 text-black mx-2 absolute bottom-4 font-bold font-semibold">Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
            src='https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
            alt=""/>
        </div>

        <div className="rounded-xl relative">
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white" >
                <p className="font-bold text-2xl px-2 pt-2">New Restaurants</p>
                <p className="px-2 ">Added Daily</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4 font-bold font-semibold">Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
            src='https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
            alt=""/>
        </div>

        <div className="rounded-xl relative">
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white" >
                <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts</p>
                <p className="px-2 ">Tastey Treats</p>
                <button className="border-white bg-white text-black mx-2 absolute bottom-4 font-bold font-semibold">Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl "
            src='https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
            alt=""/>
        </div>

       
    </div>
  )
}

export default Headline