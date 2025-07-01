import { Link } from "react-router-dom";

function Collections() {
  return (
    <div className="collections py-12  container mx-auto ">
      <div className="flex flex-col gap-16">
        <div className="banner-1 bg-gradient-to-r from-gray-50 to-gray-100   rounded-2xl overflow-hidden">
          <div className="flex flex-col  dark:bg-[#1B4965]   md:flex-row items-center justify-between gap-8 py-8 md:py-0">
            <div className="flex flex-col items-start text-left px-6 md:px-12 md:pl-16 md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900  dark:text-[#CAE9FF] leading-tight">
                Fall – Winter
                <br />
                Collections 2025
              </h1>
              <p className="mt-4 text-gray-600 dark:text-brown-50  max-w-md">
                Discover our premium seasonal collection crafted for comfort and
                style.
              </p>
              <Link
                to={"/products"}
                className="mt-4 px-6 py-3 bg-red-700 text-white font-bold rounded-md text-sm hover:bg-red-700 transition transform hover:scale-105"
              >
                SHOP NOW
              </Link>{" "}
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/banner-1.jpg"
                alt="Fall Winter Collection 2025"
                className="w-full max-w-lg object-cover md:h-[400px] md:translate-y-8 rounded-l-xl shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="banner-2 bg-gradient-to-l from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
          <div className="flex flex-col-reverse  dark:bg-[#1B4965] md:flex-row items-center justify-between gap-8 py-8 md:py-0">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/banner-2.jpg"
                alt="Spring Summer Collection 2025"
                className="w-full max-w-lg object-cover md:h-[400px] md:translate-y-8 rounded-r-xl shadow-xl"
              />
            </div>
            <div className="flex flex-col items-start text-left px-6 md:px-12 md:pr-16 md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900  dark:text-[#CAE9FF] leading-tight">
                Spring – Summer
                <br />
                Collections 2025
              </h1>
              <p className="mt-4 text-gray-600  dark:text-brown-50 max-w-md">
                Fresh styles and vibrant colors for the sunny season ahead.
              </p>
              <Link
                to={"/products"}
                className="mt-4 px-6 py-3 bg-red-700 text-white font-bold rounded-md text-sm hover:bg-red-700 transition transform hover:scale-105"
              >
                SHOP NOW
              </Link>{" "}
            </div>
          </div>
        </div>

        <div className="banner-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row  dark:bg-[#1B4965] items-center justify-between gap-8 py-8 md:py-0">
            <div className="flex flex-col items-start text-left px-6 md:px-12 md:pl-16 md:w-1/2">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-[#CAE9FF]  leading-tight">
                Premium Footwear
                <br />
                Collection 2025
              </h1>
              <p className="mt-4 text-gray-600 dark:text-brown-50 max-w-md">
                Step into style with our exclusive shoe collection.
              </p>
              <Link
                to={"/products"}
                className="mt-4 px-6 py-3 bg-red-700 text-white font-bold rounded-md text-sm hover:bg-red-700 transition transform hover:scale-105"
              >
                SHOP NOW
              </Link>{" "}
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/banner-3.jpg"
                alt="Shoe Collection 2025"
                className="w-full max-w-lg object-cover md:h-[400px] md:translate-y-8 rounded-l-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
