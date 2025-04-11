import { useEffect, useState } from "react";
import axios from "axios";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

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
    <div className="flex min-h-screen bg-white font-['Playfair_Display']">
      <main className="w-[full] md:ml-[140px] flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="p-4 sm:p-6 md:p-8">
            {/* Centered Title */}
            <h2 className="mb-8 sm:mb-12 text-center font-['Playfair_Display']">
              <span className="text-3xl sm:text-4xl font-bold text-[#333]">My{' '}</span>
              <span className="text-3xl sm:text-4xl font-bold text-pink-500">
                Education
              </span>
            </h2>

            <div className="grid gap-6 sm:gap-8 mb-10">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl shadow-lg transition-all ${
                    index % 2 === 0
                      ? "bg-white text-gray-800"
                      : "text-white"
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
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/2 space-y-2">
                      <div className="flex items-center gap-2 font-semibold text-lg">
                        <GraduationCap
                          size={18}
                          className={
                            index % 2 === 0 ? "text-[#ff6b8b]" : "text-white"
                          }
                        />
                        <span>{item.degree}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                      <div className="text-sm font-medium">{item.institution}</div>
                      <div className="text-sm font-semibold italic">{item.specialization}</div>
                    </div>

                    <div className="md:w-1/2">
                      <p className="text-sm leading-relaxed">{item.description}</p>
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
