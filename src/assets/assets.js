import logo from "./logo.png"
import heroDoctor from "./Hero_doctor.jpg"
import heroImage from "./hero-image.jpg"
import hero from "./hero.jpg"
import aboutClinic from "./about_clinic.jpg"
import doctor1 from "./doctor_1.jpg"
import doctor2 from "./doctor_2.jpg"
import doctor3 from "./doctor_3.jpg"
import doctor4 from "./doctor_4.jpg"
import doctor5 from "./doctor_5.jpg"
import doctor6 from "./doctor_6.jpg"
import testimonial1 from "./testimonial-1.png"
import testimonial2 from "./testimonial-2.png"
import testimonial3 from "./testimonial-3.png"

import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"

export const assets = {
    heroImage,
    heroDoctor,
    aboutClinic,
    hero, 
    logo,

    testimonial1,
    testimonial2,
    testimonial3,

    img1,
    img2, 
    img3,
}

export const teamData = [
    {
        name: "Dr. Sara",
        speciality: "Cardiologist",
        image: doctor1
    },
    {
        name: "Dr. Emily",
        speciality: "Neurologist",
        image: doctor2
    },
    {
        name: "Dr. Olivia",
        speciality: "Pediatrician",
        image: doctor3
    },
    {
        name: "Dr. Adam",
        speciality: "Dermatologist",
        image: doctor4
    },
    {
        name: "Dr.  Hasnae",
        speciality: "Ophthalmologist",
        image: doctor5
    },
    {
        name: "Dr. Fadwa",
        speciality: "Orthopedic Surgeon",
        image: doctor6
    },

]

import {
    HeartPulse,
    Sparkles,
    Eye,
    Bone,
    Baby,
    Brain,
} from "lucide-react";

export const servicesData = [
    {
        title: "Cardiology",
        description: "Expert care for your heart and cardiovascular health.",
        icon: HeartPulse,
    },
    {
        title: "Dermatology",
        description: "Specialized care for healthy skin and hair.",
        icon: Sparkles,
    },
    {
        title: "Ophthalmology",
        description: "Comprehensive care for your eyes and vision.",
        icon: Eye,
    },
    {
        title: "Orthopedics",
        description: "Professional care for bones, joints, and muscles.",
        icon: Bone,
    },
    {
        title: "Pediatrics",
        description: "Gentle and specialized healthcare for children.",
        icon: Baby,
    },
    {
        title: "Neurology",
        description: "Advanced care for the brain and nervous system.",
        icon: Brain,
    },
];