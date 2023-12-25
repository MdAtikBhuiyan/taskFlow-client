

const User = () => {
    return (
        <section className=" dark:bg-gray-900 py-12">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-white capitalize lg:text-3xl ">
            People from Different Profession&apos;s are using our Website
          </h1>
  
          <p className="max-w-2xl mx-auto my-6 text-center text-gray-700 dark:text-gray-200">
            Unleash universal productivity with our intuitive task management app,
            embraced by students, doctors, and engineers alike for seamless
            organization and efficiency.
          </p>
  
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <div
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
              className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-slate-500 dark:border-gray-700 bg-gradient-to-r bg-slate-400"
            >
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />
  
              <h1 className="mt-4 text-2xl font-semibold text-gray-100 capitalize dark:text-gray-100 group-hover:text-gray-100">
                arthur melo
              </h1>
  
              <p className="mt-2 text-gray-200 capitalize dark:text-gray-200 group-hover:text-gray-200">
                Doctor
              </p>
            </div>
  
            <div
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
              className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-slate-500 dark:border-gray-700 bg-gradient-to-r bg-slate-400"
            >
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />
  
              <h1 className="mt-4 text-2xl font-semibold text-gray-100 capitalize dark:text-gray-100 group-hover:text-gray-100">
                Amelia. Anderson
              </h1>
  
              <p className="mt-2 text-gray-200 capitalize dark:text-gray-200 group-hover:text-gray-200">
                Actress
              </p>
            </div>
  
            <div
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
              className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-slate-500 dark:border-gray-700 bg-gradient-to-r bg-slate-400"
            >
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
  
              <h1 className="mt-4 text-2xl font-semibold text-gray-100 capitalize dark:text-gray-100 group-hover:text-gray-100">
                Olivia Wathan
              </h1>
  
              <p className="mt-2 text-gray-200 capitalize dark:text-gray-200 group-hover:text-gray-200">
                Student
              </p>
            </div>
  
            <div
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="700"
              className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-slate-500 dark:border-gray-700 bg-gradient-to-r bg-slate-400"
            >
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />
  
              <h1 className="mt-4 text-2xl font-semibold text-gray-100 capitalize dark:text-gray-100 group-hover:text-gray-100">
                John Doe
              </h1>
  
              <p className="mt-2 text-gray-200 capitalize dark:text-gray-200 group-hover:text-gray-200">
                Full stack developer
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default User;