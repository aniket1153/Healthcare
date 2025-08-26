import { useParams } from "react-router-dom";
import img2 from "../assets/HealthImg1.jpg";
import img3 from "../assets/HealthImg2.jpg";
import img4 from "../assets/HealthImg3.jpg";
import img5 from "../assets/HealthImg4.jpg";
import img6 from "../assets/HealthImg5.jpg";
import img7 from "../assets/HealthImg6.jpg";
import img8 from "../assets/HealthImg7.jpg";
import img9 from "../assets/HealthImg8.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import Breadcrumbs from "../componets/Breadcrumbs";
import { MdDescription } from "react-icons/md";

const guides = [
  {
    id: 1,
    img: img2,
    title: "Boosting Bone Health: Calcium & Vitamin D Explained",
    date: "29 Jul, 6:12 PM",
    description:
      "Strong bones are the foundation of a healthy life. Learn how calcium and vitamin D work together to protect your bones and how to get enough of both.",
    heading1:"Calcium: The Bone Builder",
    headingPoint:"Role: Builds and maintains bones & teeth",
    headingPoint2:"Sources: Milk, yogurt, leafy greens, tofu, fortified plant milk",
    headingPoint3:"RDA: 1,000–1,200 mg/day",

    subheading2:"Vitamin D: The Absorption Partner",
    subheadingPoint:"Role: Helps your body absorb calcium",
    subheadingPoint2:"Sources: Sunlight, fatty fish, egg yolks, fortified foods",
    subheadingPoint3:"RDA: 600–800 IU/day",

        lastheading2:"Vitamin D: The Absorption Partner",
    lastheadingPoint:"Role: Helps your body absorb calcium",
    lastheadingPoint2:"Sources: Sunlight, fatty fish, egg yolks, fortified foods",
    lastheadingPoint3:"RDA: 600–800 IU/day",

  },
  { id: 2, img: img3, title: "Beginner’s Guide to Mindful Eating", date: "29 Jul, 6:12 PM", intro: "Learn how mindful eating can improve your lifestyle.", content: "Details..." },
  { id: 3, img: img4, title: "How Much Is Too Much?", date: "29 Jul, 6:12 PM", intro: "Balance is the key.", content: "Details..." },
  { id: 4, img: img5, title: "Signs You Might Be Deficient in Key Nutrients", date: "29 Jul, 6:12 PM", intro: "Spot deficiencies early.", content: "Details..." },
  { id: 5, img: img6, title: "Hand Wash: Your First Line of Defense Against Germs", date: "29 Jul, 6:12 PM", intro: "Stay protected.", content: "Details..." },
  { id: 6, img: img7, title: "Foods That Naturally Lower Cholesterol", date: "29 Jul, 6:12 PM", intro: "Eat smart for your heart.", content: "Details..." },
  { id: 7, img: img8, title: "Healthy Alternatives to Junk Food", date: "29 Jul, 6:12 PM", intro: "Swap junk with health.", content: "Details..." },
  { id: 8, img: img9, title: "15 Minute Workouts You Can Stick To", date: "29 Jul, 6:12 PM", intro: "Quick workouts for busy people.", content: "Details..." },
];

const HealthGuideDetails = () => {
  const { id } = useParams();
  const guide = guides.find((g) => g.id === parseInt(id));

  if (!guide) return <p className="text-center text-red-500">Guide not found</p>;

  return (
    <div>
         <div className='flex p-8 lg:p-15 pl-5 lg:pl-42'>
        <Breadcrumbs/>
      </div>
    <div className="w-full flex flex-col items-center   sm:mt-0 md:mt-8 p-4 md:p-0 lg:p-0 ">
      {/* Hero Image with Overlay */}
      
      <div className="relative w-full md:w-4/5">
         <img
            src={guide.img}
            alt={guide.title}
            className="w-[15rem] md:w-[15rem] lg:w-full h-56 md:h-72 lg:h-[30rem] object-cover rounded-lg  "
          />

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-full rounded-lg bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
          <p className="text-xs sm:text-sm flex gap-2 items-center">
            <span className="text-base sm:text-lg"><FaCalendarAlt /></span>
            <span>{guide.date}</span>
          </p>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{guide.title}</h3>
        </div>
      </div>

      {/* Content */}
 
    </div>
       <div className="flex flex-col gap-1 p-6 lg:pl-40 lg:pt-7 lg:p-5 ">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{guide.heading1}</h2>
        <ul  className="list-disc list-inside text-gray-700 mt-2 space-y-1 pl-1"></ul>
        <li className="pl-2">   {guide.headingPoint}</li>
             <li className="pl-2">   {guide.headingPoint2}</li>
              <li className="pl-2">   {guide.headingPoint3}</li>
  
      </div>
        <div>
        <h2 className="text-lg font-semibold text-gray-800">{guide. subheading2}</h2>
        <ul  className="list-disc list-inside text-gray-700 mt-2 space-y-1"></ul>
        <li className="pl-2">   {guide.subheadingPoint}</li>
             <li className="pl-2">   {guide.subheadingPoint2}</li>
              <li className="pl-2">   {guide.subheadingPoint3}</li>
  
      </div>
       <div>
        <h2 className="text-lg font-semibold text-gray-800">{guide. lastheading2}</h2>
        <ul  className="list-disc list-inside text-gray-700 mt-2 space-y-1"></ul>
        <li className="pl-2">   {guide.lastheadingPoint}</li>
             <li className="pl-2">   {guide.lastheadingPoint2}</li>
              <li className="pl-2">   {guide.lastheadingPoint3}</li>
  
      </div>
    </div>
    </div>
  );
};

export default HealthGuideDetails;
