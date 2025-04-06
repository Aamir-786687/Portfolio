import { useEffect, useState } from "react";
import axios from "axios";
import {
  ArrowRight,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
} from "lucide-react";

export default function Education() {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://portfolio-main-7d511-default-rtdb.firebaseio.com/educationData.json"
      )
      .then((res) => setEducationData(res.data))
      .catch((err) => console.error("Failed to fetch education data", err));
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      <main className="ml-[80px] flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-Black">MY EDUCATION</h2>

            <div className="grid gap-8 mb-12">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl shadow-lg transition-all ${
                    index % 2 === 0 ? "bg-white text-gray-800" : "text-white"
                  }`}
                  style={
                    index % 2 !== 0
                      ? {
                          background:
                            "linear-gradient(151deg, rgba(161,140,209,1) 8%, rgba(251,111,145,1) 49%, rgba(255,155,110,1) 85%)",
                        }
                      : {}
                  }
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-1/2 space-y-2">
                      <div className="flex items-center gap-2 font-semibold text-lg">
                        <GraduationCap
                          size={20}
                          className={
                            index % 2 === 0 ? "text-[#ff6b8b]" : "text-white "
                          }
                        />
                        <span className="text-m font-semibold">
                          {item.degree}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                      <div className="text-sm font-medium">
                        {item.institution}
                      </div>
                    </div>
                    <div className="md:w-3/4 space-y-4">
                      <p className="text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
            <a
            href="https://drive.google.com/file/d/1k2HeSdWSGQeYIUNXcw16bedTLw4D9Nml/view?usp=drive_link"
            target="_blank"
            className="group relative inline-flex items-center gap-2 bg-black text-white font-semibold px-6 py-3 rounded-full shadow-md overflow-hidden transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
          >
            Download Full CV
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight />
            </span>
            <span className="absolute inset-0 bg-white opacity-10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></span>
          </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
