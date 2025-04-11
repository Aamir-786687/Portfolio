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
      <main className="w-full md:ml-[240px] flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-Black">MY EDUCATION</h2>

            <div className="grid gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 sm:p-6 rounded-2xl shadow-lg transition-all ${
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
                  <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6">
                    <div className="md:w-1/2 space-y-2">
                      <div className="flex items-center gap-2 font-semibold text-base sm:text-lg">
                        <GraduationCap
                          size={18}
                          className={
                            index % 2 === 0 ? "text-[#ff6b8b]" : "text-white"
                          }
                        />
                        <span className="text-sm sm:text-base font-semibold">
                          {item.degree}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm">
                        <Calendar size={12} />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm">
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </div>
                      <div className="text-xs sm:text-sm font-medium">
                        {item.institution}
                      </div>
                    </div>
                    <div className="md:w-3/4 space-y-2 sm:space-y-4">
                      <p className="text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
