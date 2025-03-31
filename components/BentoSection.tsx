import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const BentoSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Nearest Places */}
        <Card className="md:col-span-3 border-2 border-gray-800 bg-white/95 shadow-md">
          <CardHeader className="bg-red-600 text-white p-3">
            <CardTitle className="text-center text-lg">
              NEAREST PLACES TO OUR VENTURE
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <ul className="space-y-2">
              {[
                "Residential Zone",
                "Orvakal AIRPORT",
                "Greenko-SOLAR PLANT",
                "Jai Raj STEEL PLANT",
                "DRDL & APIIC",
                "Industrial Hub",
                "URDU University",
                "National Highway NH-40",
                "AP Tourism Rock Gardens",
                "APTDC Hotel & Restaurant",
                "Schools & Colleges",
                "National LAW University",
                "24Hrs. Transport Facilities",
              ].map((place, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check
                    size={16}
                    className="text-green-600 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-800">{place}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Upcoming Projects */}
        <Card className="md:col-span-3 border-2 border-gray-800 bg-white/95 shadow-md">
          <CardHeader className="bg-blue-500 text-white p-3">
            <CardTitle className="text-center text-lg">
              UPCOMING PROJECTS
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <ul className="space-y-3">
              {[
                {
                  title: "Kurnool To Nandyal New Railway Line",
                  extra: "",
                },
                {
                  title: "India's Biggest Pharmacy Company",
                  extra: "",
                },
                {
                  title: "Electric Bike Manufacturing Unit",
                  extra: "(India's Biggest Project Value 18,000cr)",
                },
                {
                  title: "Drone Manufacturing Unit",
                  extra: "(India's First & Largest P.V. 3,000cr)",
                },
                {
                  title: "Hydro Power Project",
                  extra: "(World's Largest Integrated ...)",
                },
                {
                  title: "Semiconductor Facility",
                  extra: "(India's First Project Value 14,000cr)",
                },
              ].map((project, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="text-purple-700 mt-1 flex-shrink-0">➺</div>
                  <div>
                    <span className="text-gray-800">{project.title}</span>
                    {project.extra && (
                      <div className="text-xs text-gray-600 mt-0.5">
                        {project.extra}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Central Image */}
        <div className="md:col-span-3 bg-gray-200 border-2 border-gray-800 rounded-lg flex items-center justify-center shadow-md">
          <div className="text-gray-400 text-sm">Image Placeholder</div>
        </div>

        {/* 2x2 Grid */}
        <div className="md:col-span-3 grid grid-cols-2 gap-4">
          <div className="bg-gray-200 border-2 border-gray-800 rounded-lg h-40 flex items-center justify-center shadow-md">
            <div className="text-gray-400 text-sm">Image 1</div>
          </div>
          <div className="bg-gray-200 border-2 border-gray-800 rounded-lg h-40 flex items-center justify-center shadow-md">
            <div className="text-gray-400 text-sm">Image 2</div>
          </div>
          <div className="bg-gray-200 border-2 border-gray-800 rounded-lg h-40 flex items-center justify-center shadow-md">
            <div className="text-gray-400 text-sm">Image 3</div>
          </div>
          <div className="bg-gray-200 border-2 border-gray-800 rounded-lg h-40 flex items-center justify-center shadow-md">
            <div className="text-gray-400 text-sm">Image 4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoSection;
