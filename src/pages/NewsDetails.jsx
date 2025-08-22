import { useParams } from "react-router-dom";
import img2 from "../assets/News1.jpg";
import img3 from "../assets/News2.jpg";
import img4 from "../assets/News3.jpg";
import img5 from "../assets/News4.jpg";
import img6 from "../assets/News5.jpg";
import img7 from "../assets/News6.jpg";
import img8 from "../assets/News7.jpg";
import img9 from "../assets/News8.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import Breadcrumbs from "../componets/Breadcrumbs";

const guides = [
  {
    id: 1,
    img: img2,
    title: "10 Everyday Habits for Better Heart Health",
    date: "29 Jul, 6:12 PM",
    intro:
      "Your heart is the engine of your body keeping it strong and healthy should be a daily priority, not just a concern after a health scare.",
    subintro:
      "The good news? You don’t need extreme changes or expensive supplements to protect your heart. Small, consistent habits can make a powerful difference. Here are 10 simple yet effective ways to keep your heart in top shape:",
    Point1: "1 Eat a Heart-Healthy Diet",
    Point1Description: "Focus on whole, unprocessed foods. ",
    Point1HeroTT:"Include :",
    HeroPoint1:"Leafy greens (spinach, kale)",
    HeroPoint2: "Berries (blueberries, strawberries)",
    HeroPoint3: "Healthy fats (avocados, nuts, olive oil) ",
    HeroPoint4: " Avoid:",
    HeroPoint5: " Trans fats",
    HeroPoint6: "Excess salt",
    HeroPoint7: "Sugary drinks and snacks",
    HeroPoint8:
      "Why: These foods lower cholesterol, reduce inflammation, and improve blood flow.",

    Point2: "2 Move Every Day",
    Point2Description:
      "Aim for at least 30 minutes of moderate exercise brisk walking, cycling, swimming, or dancing.",
    Point2DescriptionSub:
      "Why: Physical activity strengthens the heart muscle, improves circulation, and helps control weight.",

    Point3: "3 Manage Stress Effectively",
    Point3Description:
      "Chronic stress can raise your blood pressure and increase the risk of heart disease.",
    HeroPoint31: "Try:",
    HeroPoint32: "Deep breathing",
    HeroPoint33: "Meditation or yoga ",
    HeroPoint34: "Journaling",
    HeroPoint35: " Taking mindful breaks during the day",

    Point4: "4. Get Quality Sleep",
    Point4Description:
      "Adults should aim for 7–9 hours of uninterrupted sleep per night.",
    Point4DescriptionSub:
      "Why: Poor sleep raises cortisol levels, increases blood pressure, and affects your heart rhythm",

    Point5: "5. Quit Smoking (or Don’t Start)",
    Point5Description:
      "If you smoke, seek help to quit. Avoid secondhand smoke too.",
    Point5DescriptionSub:
      "Why: Smoking damages blood vessels, lowers oxygen levels, and significantly increases heart disease risk.",

    Point6: "6 Watch Your Salt Intake",
    Point6Description:
      "Too much sodium increases blood pressure—a major risk factor for heart problems.",
    HeroPoint61: "Tips :",
    HeroPoint62: "Read labels",
    HeroPoint63: "Cook more at home ",
    HeroPoint64: "Limit packaged and fast foods",

    Point7: "7. Stay Hydrated",
    Point7Description:
      "Dehydration can thicken blood, making it harder for your heart to pump.",
    Point7DescriptionSub:
      "Goal: About 2–3 liters of water per day, more if you’re active or in a hot climate.",

    Point8: "8. Limit Alcohol",
    Point8Description:
      "If you drink, do so in moderation (1 drink/day for women, 2 for men).",
    Point8DescriptionSub:
      "Why: Excessive alcohol can raise blood pressure and lead to heart failure or stroke. ",

    Point9: "9. Monitor Your Numbers",
    Point9Description: "Keep an eye on :",
    HeroPoint91: "Blood pressure",
    HeroPoint92: "Cholesterol levels",
    HeroPoint93: "Blood sugar ",
    HeroPoint94: "Weight/BMI",
    HeroPoint95:
      "Why: Early detection of irregularities can prevent serious conditions.",

    Point10: "10. See Your Doctor Regularly",
    Point10Description:
      "Don’t wait until something feels wrong. Get annual checkups and follow up on any risk factors.",
    Point10DescriptionSub:
      "Why: Preventive care is key to early intervention and long-term heart health. ",
  },
  {
    id: 2,
    img: img3,
    title: "Beginner’s Guide to Mindful Eating",
    date: "29 Jul, 6:12 PM",
    intro: "Learn how mindful eating can improve your lifestyle.",
    content: "Details...",
  },
  {
    id: 3,
    img: img4,
    title: "How Much Is Too Much?",
    date: "29 Jul, 6:12 PM",
    intro: "Balance is the key.",
    content: "Details...",
  },
  {
    id: 4,
    img: img5,
    title: "Signs You Might Be Deficient in Key Nutrients",
    date: "29 Jul, 6:12 PM",
    intro: "Spot deficiencies early.",
    content: "Details...",
  },
  {
    id: 5,
    img: img6,
    title: "Hand Wash: Your First Line of Defense Against Germs",
    date: "29 Jul, 6:12 PM",
    intro: "Stay protected.",
    content: "Details...",
  },
  {
    id: 6,
    img: img7,
    title: "Foods That Naturally Lower Cholesterol",
    date: "29 Jul, 6:12 PM",
    intro: "Eat smart for your heart.",
    content: "Details...",
  },
  {
    id: 7,
    img: img8,
    title: "Healthy Alternatives to Junk Food",
    date: "29 Jul, 6:12 PM",
    intro: "Swap junk with health.",
    content: "Details...",
  },
  {
    id: 8,
    img: img9,
    title: "15 Minute Workouts You Can Stick To",
    date: "29 Jul, 6:12 PM",
    intro: "Quick workouts for busy people.",
    content: "Details...",
  },
];

const NewsDetails = () => {
  const { id } = useParams();
  const guide = guides.find((g) => g.id === parseInt(id));

  if (!guide)
    return <p className="text-center text-red-500">Guide not found</p>;

  return (
    <div>
      <div className="flex p-15 pl-42">
        <Breadcrumbs />
      </div>
      <div className="w-full flex flex-col items-center  sm:mt-0 md:mt-8">
        {/* Hero Image with Overlay */}

        <div className="relative w-full md:w-4/5 cursor-pointer">
          <img
            src={guide.img}
            alt={guide.title}
            className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-lg"
          />

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-full rounded-lg bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col gap-3  justify-end p-4 text-white">
            <p className="text-xs sm:text-sm flex gap-2 items-center pl-2">
              <span className="text-base sm:text-lg">
                <FaCalendarAlt />
              </span>
              <span>{guide.date}</span>
            </p>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              {guide.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-4/5 px-4 sm:px-6 md:px-4 my-7">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {guide.title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            {guide.intro}
          </p>

          <div className="mt-6 prose prose-sm sm:prose-lg max-w-none">
        <div className="flex flex-col gap-10">
                <div className="">
              <h1 className="text-gray-500">{guide.subintro}</h1>
         
            </div>
            <div className="pt-4 ">
                <h1 >{guide.Point1}</h1>
                <p className="text-gray-700 pl-1 ">{guide.Point1Description}</p>
                <p className="text-gray-700 pl-1">{guide.Point1HeroTT}</p>
                <ul className="list-disc list-inside pl-3 text-gray-700 ">
                 <li>{guide.HeroPoint1}</li>
                 <li>{guide.HeroPoint2}</li>
                 <li>{guide.HeroPoint3}</li>
                   <li>{guide.HeroPoint4}</li>
                     <li>{guide.HeroPoint5}</li>
                       <li>{guide.HeroPoint6}</li>
                         <li>{guide.HeroPoint7}</li>
                </ul>
                <p className="pt-1 text-gray-700">{guide.HeroPoint8}</p>

            </div>
            <div>
                <h1>{guide.Point2}</h1>
                <p className="text-gray-700">{guide.Point2Description}</p>
                <p className="text-gray-700">{guide.Point2DescriptionSub}</p>
            </div>


            <div>
                <h1>{guide.Point3}</h1>
                <p className="text-gray-700">{guide.Point3Description}</p>
                <p className="text-gray-700">{guide.HeroPoint31}</p>
                 <ul className="list-disc list-inside pl-3 text-gray-700 ">
                 <li>{guide.HeroPoint32}</li>
                 <li>{guide.HeroPoint33}</li>
                 <li>{guide.HeroPoint34}</li>
                   <li>{guide.HeroPoint35}</li>
                     
                </ul>
            </div>

            <div>
                <h1>{guide.Point4}</h1>
                <p className="text-gray-700">{guide.Point4Description}</p>
                <p  className="text-gray-700">{guide.Point4DescriptionSub}</p>
            </div>
                        <div>
                <h1>{guide.Point5}</h1>
                <p className="text-gray-700">{guide.Point5Description}</p>
                <p  className="text-gray-700">{guide.Point5DescriptionSub}</p>
            </div>

             <div>
                <h1>{guide.Point6}</h1>
                <p className="text-gray-700">{guide.Point6Description}</p>
                <p className="text-gray-700">{guide.HeroPoint61}</p>
                 <ul className="list-disc list-inside pl-3 text-gray-700 ">
                 <li>{guide.HeroPoint62}</li>
                 <li>{guide.HeroPoint63}</li>
                 <li>{guide.HeroPoint64}</li>
                
                     
                </ul>
            </div>
                      <div>
                <h1>{guide.Point7}</h1>
                <p className="text-gray-700">{guide.Point7Description}</p>
                <p  className="text-gray-700">{guide.Point7DescriptionSub}</p>
            </div>
                    <div>
                <h1>{guide.Point8}</h1>
                <p className="text-gray-700">{guide.Point8Description}</p>
                <p  className="text-gray-700">{guide.Point8DescriptionSub}</p>
            </div>

             <div>
                <h1>{guide.Point9}</h1>
                <p className="text-gray-700">{guide.Point9Description}</p>
                <p className="text-gray-700">{guide.HeroPoint91}</p>
                 <ul className="list-disc list-inside pl-3 text-gray-700 ">
                 <li>{guide.HeroPoint92}</li>
                 <li>{guide.HeroPoint93}</li>
                 <li>{guide.HeroPoint94}</li></ul>
                 <p className="text-gray-700">{guide.HeroPoint95}</p>
            </div>

                   <div>
                <h1>{guide.Point10}</h1>
                <p className="text-gray-700">{guide.Point10Description}</p>
                <p  className="text-gray-700">{guide.Point10DescriptionSub}</p>
            </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
