import React from 'react'
import Marquee from 'react-fast-marquee';
import img1 from "../assets/DoctorsImg1.jpg"
import img2 from "../assets/DoctorsImg2.jpg"
import img3 from "../assets/DoctorsImg3.jpg"
import img4 from "../assets/DoctorsImg4.jpg"
import img5 from "../assets/DoctorsImg5.jpg"
import img6 from "../assets/DoctorsImg6.jpg"
const DoctorsMarquee = () => {
    const data = [
        { id: 1, name: "Dr. Aarav Mehta", specialty: "Cardiology",
            img: img1
         },
        { id: 2, name: "Dr. Nisha Kapoor", specialty: "Cardiology",
            img: img2
         },
        { id: 3, name: "Dr. Rohan Desai", specialty: "Cardiology",
            img: img3
         },
        { id: 4, name: "Dr. Priya Malhotra", specialty: "Cardiology",
            img: img4
         },
        { id: 5, name: "Dr. Vikram Khanna", specialty: "Cardiology",
            img: img5
         },
        { id: 6, name: "Dr. Karan Bhatia", specialty: "Cardiology",
            img: img6
         },
    ];
  return (
    <div>

<div className='pt-8'>
    <h1 className="text-4xl font-semibold pb-4 text-center">Popular Doctors</h1>
    <p className="text-lg pb-8 text-center">“Trusted Experts for Your Well-being” – reassuring and professional.</p>


    <Marquee speed={120} gradient={false}>
        {data.map((doctor) => (
            <div key={doctor.id} className="p-5 px-13">
                <div className='w-32 h-32 rounded-2xl'>
                    <img src={doctor.img} alt="" className='w-full h-full object-cover rounded-full p-2.5' />
                </div>
                <h2 className="text-xl font-semibold text-center">{doctor.name}</h2>
                <p className="text-gray-600 text-center">{doctor.specialty}</p>
            </div>
        ))}
    </Marquee>
</div>

<div className='pt-8'>
    <h1 className="text-4xl font-semibold pb-4 text-center">Popular Physiotherapist</h1>
    <p className="text-lg pb-8 text-center">Restoring Movement, Relieving Pain” – focused on results.</p>


    <Marquee speed={120} gradient={false}>
        {data.map((doctor) => (
            <div key={doctor.id} className="p-5 px-13">
                <div className='w-32 h-32 rounded-2xl'>
                    <img src={doctor.img} alt="" className='w-full h-full object-cover rounded-full p-2.5' />
                </div>
                <h2 className="text-xl font-semibold text-center">{doctor.name}</h2>
                <p className="text-gray-600 text-center">{doctor.specialty}</p>
            </div>
        ))}
    </Marquee>
</div>

    </div>
  )
}

export default DoctorsMarquee