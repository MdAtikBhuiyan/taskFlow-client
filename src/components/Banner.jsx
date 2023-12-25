import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="bg-gradient-to-r bg-slate-200 rounded-none lg:rounded-md ">
                <div className=" grid grid-cols-1 lg:grid-cols-2 items-center px-5 gap-5 lg:px-20 py-8 lg:py-16">
                    <div
                        data-aos="zoom-in"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="700"
                        className=" flex justify-center items-center "
                    >
                        <img
                            className=" w-full md:w-1/2 lg:w-3/4"
                            src="https://i.ibb.co/TPY25Dp/Pngtree-business-and-work-planning-schedule-7516386-1.png"
                            alt=""
                        />
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="700"
                        className=" text-gray-100 space-y-3 md:space-y-6 "
                    >
                        <h1 className=" text-3xl md:text-5xl font-semibold text-[#2d2122]">
                            Welcome to Task Forge!
                        </h1>
                        <p className="text-base md:text-xl text-gray-800">
                            Streamline tasks effortlessly with our intuitive task management
                            platform!
                        </p>
                        <button className="px-4 py-3 text-base md:text-xl font-bold bg-white text-[#FF7594] rounded-lg hover:bg-[#eef0ee] hover:text-[#FF7594] transition-colors duration-600 transform">
                            <Link to={"/dashboard"}>Let&apos;s Explore</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;