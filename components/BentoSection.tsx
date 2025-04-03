import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const BentoSection = ({ language }) => {
  const translations = {
    nearestPlacesTitle: {
      en: "NEAREST PLACES TO OUR VENTURE",
      te: "మా వెంచర్‌కు సమీప ప్రదేశాలు",
    },
    nearestPlaces: {
      en: [
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
      ],
      te: [
        "నివాస మండలి",
        "ఓర్వకల్ విమానాశ్రయం",
        "గ్రీన్‌కో-సౌర విద్యుత్ కేంద్రం",
        "జై రాజ్ స్టీల్ ప్లాంట్",
        "డిఆర్‌డిఎల్ & ఎపిఐఐసి",
        "పారిశ్రామిక కేంద్రం",
        "ఉర్దూ విశ్వవిద్యాలయం",
        "జాతీయ రహదారి ఎన్‌హెచ్-40",
        "ఎపి టూరిజం రాక్ గార్డెన్స్",
        "ఎపిటిడిసి హోటల్ & రెస్టారెంట్",
        "పాఠశాలలు & కళాశాలలు",
        "జాతీయ న్యాయ విశ్వవిద్యాలయం",
        "24 గంటల రవాణా సౌకర్యాలు",
      ],
    },
    upcomingProjectsTitle: {
      en: "UPCOMING PROJECTS",
      te: "రాబోయే ప్రాజెక్టులు",
    },
    upcomingProjects: {
      en: [
        { title: "Kurnool To Nandyal New Railway Line", extra: "" },
        { title: "India's Biggest Pharmacy Company", extra: "" },
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
      ],
      te: [
        { title: "కర్నూలు నుండి నంద్యాల కొత్త రైల్వే లైన్", extra: "" },
        { title: "భారతదేశంలోని అతిపెద్ద ఫార్మసీ కంపెనీ", extra: "" },
        {
          title: "ఎలక్ట్రిక్ బైక్ తయారీ యూనిట్",
          extra: "(భారతదేశంలో అతిపెద్ద ప్రాజెక్టు విలువ 18,000 కోట్లు)",
        },
        {
          title: "డ్రోన్ తయారీ యూనిట్",
          extra: "(భారతదేశంలో మొదటి & అతిపెద్ద పి.వి. 3,000 కోట్లు)",
        },
        {
          title: "జలవిద్యుత్ ప్రాజెక్టు",
          extra: "(ప్రపంచంలోని అతిపెద్ద సమీకృత ...)",
        },
        {
          title: "సెమీకండక్టర్ సౌలభ్యం",
          extra: "(భారతదేశంలో మొదటి ప్రాజెక్టు విలువ 14,000 కోట్లు)",
        },
      ],
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:h-[500px]">
        <Card className="md:col-span-3 border border-gray-200 bg-white shadow h-full">
          <CardHeader className="bg-red-100 text-red-800 p-3">
            <CardTitle className="text-center text-sm sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              {translations.nearestPlacesTitle[language]}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 overflow-y-auto h-[calc(100%-60px)]">
            <ul className="space-y-2">
              {translations.nearestPlaces[language].map((place, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check
                    size={16}
                    className="text-green-600 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-800 text-sm sm:text-base">
                    {place}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="md:col-span-3 border border-gray-200 bg-white shadow h-full">
          <CardHeader className="bg-blue-100 text-blue-800 p-3">
            <CardTitle className="text-center text-sm sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              {translations.upcomingProjectsTitle[language]}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 overflow-y-auto h-[calc(100%-60px)]">
            <ul className="space-y-3">
              {translations.upcomingProjects[language].map((project, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="text-purple-700 mt-1 flex-shrink-0">➺</div>
                  <div>
                    <span className="text-gray-800 text-sm sm:text-base">
                      {project.title}
                    </span>
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
        <div className="md:col-span-3 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center shadow h-full">
          <div className="text-gray-400 text-sm">Image Placeholder</div>
        </div>
        <div className="md:col-span-3 grid grid-cols-2 gap-4 h-full">
          <div className="bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center shadow">
            <div className="text-gray-400 text-sm">Image 1</div>
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center shadow">
            <div className="text-gray-400 text-sm">Image 2</div>
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center shadow">
            <div className="text-gray-400 text-sm">Image 3</div>
          </div>
          <div className="bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center shadow">
            <div className="text-gray-400 text-sm">Image 4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoSection;
