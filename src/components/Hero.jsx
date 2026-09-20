import { assets } from "../assets/assets";

const Hero = () => {
    return (
        <div
            className="relative flex items-center h-[641px] bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${assets.hero})` }}
        >
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b]/80 via-[#064e3b]/50 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start justify-center px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">

                {/* Small Badge */}
                <span className="mb-5 inline-flex items-center rounded-full border border-gray-200/20 bg-white px-4 py-2 text-[15px] font-semibold text-primary shadow-sm sm:text-base">
                    WELCOME TO MEDICARE
                </span>

                {/* Heading */}
                <h1 className="max-w-xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                    Your Health, Our{" "}
                    <span className="text-primary">Priority</span>
                </h1>

                {/* Description */}
                <p className="mt-5 max-w-lg text-sm sm:text-base leading-7 text-slate-200">
                    Your health and wellbeing are our top priority. Get trusted
                    medical care from experienced professionals.
                </p>

                {/* Buttons */}
                <div className="mt-7 flex flex-wrap items-center gap-4">

                    {/* Primary Button */}
                    <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#1ba8b1] focus:ring-offset-2"
                    >
                        Book Appointment
                    </a>

                    {/* Secondary Link */}
                    <a
                        href="#"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-primary"
                    >
                        Learn more

                        <svg
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Hero;