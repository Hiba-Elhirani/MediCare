import { BadgeCheck } from "lucide-react";
import { Activity } from "lucide-react";
import { assets } from "../assets/assets";
const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2">
            <div>
                <div className="flex gap-2">
                    <Activity className="w-5 h-5 text-primary" strokeWidth={2} />
                    <h3 className="text-primary font-bold text-[14px]">ABOUT US</h3>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight tracking-tight">Caring for Your Health, Every <br/>Step of the Way</h1>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mt-6">
                    <div className="flex flex-row gap-2">
                        <BadgeCheck className="w-6 h-6 text-primary fill-light-teal" />
                        <p>15+ Years of excellence</p>
                    </div>
                    <div>
                        <BadgeCheck className="w-6 h-6 text-primary fill-light-teal" />
                        <p>A Multispecialty hospital</p>
                    </div>
                    <div>
                        <BadgeCheck className="w-6 h-6 text-primary fill-light-teal" />
                        <p>24/7 Hour Medical Service</p>
                    </div>
                    <div>
                        <BadgeCheck className="w-6 h-6 text-primary fill-light-teal" />
                        <p>A team of professionals</p>
                    </div>
                </div>
                <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-hover hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#1ba8b1] focus:ring-offset-2">
                        Book Appointment
                </a>
            </div>
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] ml-5">

              
                <div className="absolute top-0 right-0 w-[200px] h-[225px] sm:w-[220px] sm:h-[190px] lg:w-[300px] lg:h-[260px] bg-primary"></div>

                <div className="absolute top-60 left-0 w-[200px] h-[225px] sm:w-[220px] sm:h-[190px] lg:w-[300px] lg:h-[260px] bg-background"></div>

                {/* Image */}
                <div className="relative z-10 pt-5 pl-5">
                    <img
                        className="w-[400px] h-[400px] sm:w-[350px] sm:h-[350px] lg:w-[440px] lg:h-[440px] object-cover"
                        src={assets.heroDoctor}
                        alt="Doctor"
                    />
                </div>

            </div>
        </div>
    )
}

export default About