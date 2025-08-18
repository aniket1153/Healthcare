import React from 'react'
import ImgMarquee from './ImgMarquee'

const Hospitals = () => {
  return (
    <div className='pt-10 flex flex-col gap-15'>
<div>
     <div className="text-center">
            <h1 className="text-4xl font-semibold pb-4">Popular Hospitals</h1>
            <p className="text-lg pb-8">“Trusted Healthcare Centers Near You” – warm and reassuring.</p>
        </div>
        <ImgMarquee/>
</div>


<div>
     <div className="text-center">
            <h1 className="text-4xl font-semibold pb-4">Popular Diagnostic Centre</h1>
            <p className="text-lg pb-8">Your Partner in Early Detection” – focused on health awareness.</p>
        </div>
        <ImgMarquee/>
</div>
<div>
     <div className="text-center">
            <h1 className="text-4xl font-semibold pb-4">Popular PolyClinic </h1>
            <p className="text-lg pb-8">“Your Neighborhood Health Hub” – friendly and community-focused.</p>
        </div>
        <ImgMarquee/>
</div>

<div>
     <div className="text-center">
            <h1 className="text-4xl font-semibold pb-4">Popular Aya Centre</h1>
            <p className="text-lg pb-8">“Compassionate Care for Every Home” – warm and reassuring.</p>
        </div>
        <ImgMarquee/>
</div>

    </div>
  )
}

export default Hospitals