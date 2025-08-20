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

const guides = [
  {
    id: 1,
    img: img2,
    title: "Boosting Bone Health: Calcium & Vitamin D Explained",
    date: "29 Jul, 6:12 PM",
    intro:
      "Strong bones are the foundation of a healthy life. Learn how calcium and vitamin D work together to protect your bones and how to get enough of both.",
    content: `
**Calcium: The Bone Builder**
- Role: Builds and maintains bones & teeth
- Sources: Milk, yogurt, leafy greens, tofu, fortified plant milk
- RDA: 1,000–1,200 mg/day

**Vitamin D: The Absorption Partner**
- Role: Helps your body absorb calcium
- Sources: Sunlight, fatty fish, egg yolks, fortified foods
- RDA: 600–800 IU/day

**Quick Tips:**
- Combine calcium + vitamin D for best results
- Spend 10–30 mins in sunlight a few times a week
- Exercise regularly (especially weight-bearing exercises)
- Avoid smoking and excessive alcohol
    `,
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
         <div className='flex p-15 pl-42'>
        <Breadcrumbs/>
      </div>
    <div className="w-full flex flex-col items-center  sm:mt-0 md:mt-8">
      {/* Hero Image with Overlay */}
      
      <div className="relative w-full md:w-4/5">
        <img
          src={guide.img}
          alt={guide.title}
          className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-lg"
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
      <div className="w-full md:w-4/5 px-4 sm:px-6 md:px-4 my-7">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{guide.title}</h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600">{guide.intro}</p>

        <div className="mt-6 prose prose-sm sm:prose-lg max-w-none">
          {guide.content.split("\n").map((line, i) => (
            <p key={i} className="whitespace-pre-wrap">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default HealthGuideDetails;
