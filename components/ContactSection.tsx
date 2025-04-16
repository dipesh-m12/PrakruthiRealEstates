import React from "react";
import { Phone, MessageSquare, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Threads from "./react-bits/Threads";

const ContactSection = ({ language }: any) => {
  const translations: any = {
    getInTouchTitle: { en: "Get in Touch", te: "సంప్రదించండి" },
    phoneLabel: { en: "Phone", te: "ఫోన్" },
    whatsappLabel: { en: "WhatsApp", te: "వాట్సాప్" },
    officeLabel: { en: "Office", te: "కార్యాలయం" },
    quickContactTitle: { en: "Quick Contact", te: "త్వరిత సంప్రదింపు" },
    quickContactText: {
      en: "Reach out to us directly through WhatsApp or phone call for immediate assistance.",
      te: "తక్షణ సహాయం కోసం వాట్సాప్ లేదా ఫోన్ కాల్ ద్వారా మమ్మల్ని నేరుగా సంప్రదించండి.",
    },
    whatsappButton: {
      en: "Contact on WhatsApp",
      te: "వాట్సాప్‌లో సంప్రదించండి",
    },
    callButton: { en: "Call Now", te: "ఇప్పుడు కాల్ చేయండి" },
    availability: {
      en: "Our team is available Monday to Saturday, 9:00 AM to 8:00 PM",
      te: "మా బృందం సోమవారం నుండి శనివారం వరకు ఉదయం 9:00 నుండి రాత్రి 8:00 వరకు అందుబాటులో ఉంటుంది",
    },
    footerTitle: {
      en: "Prakruthi Real Estates",
      te: "ప్రకృతి రియల్ ఎస్టేట్స్",
    },
    footerTagline: {
      en: "Real Value For Changing World",
      te: "మారుతున్న ప్రపంచానికి నిజమైన విలువ",
    },
    footerText: {
      en: "Your trusted partner in finding the perfect property for your needs.",
      te: "మీ అవసరాలకు సరైన ఆస్తిని కనుగొనడంలో మీ విశ్వసనీయ భాగస్వామి.",
    },
    contactUsTitle: { en: "Contact Us", te: "మమ్మల్ని సంప్రదించండి" },
  };

  return (
    <div className="font-sans">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-6 md:gap-24">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              {translations.getInTouchTitle[language]}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-500" />
              <div>
                <div>{translations.phoneLabel[language]}</div>
                <a
                  href="tel:+919876543210"
                  className="text-gray-600 hover:underline"
                >
                  +91 9876543210
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-gray-500" />
              <div>
                <div>{translations.whatsappLabel[language]}</div>
                <a
                  href="https://wa.me/919876543210"
                  className="text-gray-600 hover:underline"
                >
                  +91 9876543210
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
              <div>
                <div>{translations.officeLabel[language]}</div>
                <address className="text-gray-600 not-italic">
                  Shop No : G-3, Ground Floor, Sai Vasanth Complex,
                  <br />
                  Birla Compound, B.Camp, KURNOOL - 518 002, A.P.
                </address>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              {translations.quickContactTitle[language]}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              {translations.quickContactText[language]}
            </p>
            <Button
              variant="default"
              className="w-full flex items-center justify-center gap-2 bg-black text-white hover:bg-gray-800"
              asChild
            >
              <a href="https://wa.me/919876543210">
                <MessageSquare className="h-5 w-5" />{" "}
                {translations.whatsappButton[language]}
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 hover:bg-gray-100"
              asChild
            >
              <a href="tel:+919876543210">
                <Phone className="h-5 w-5" />{" "}
                {translations.callButton[language]}
              </a>
            </Button>
            <Separator className="my-4" />
            <div className="text-center text-gray-600 text-sm flex items-center justify-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{translations.availability[language]}</span>
            </div>
          </CardContent>
        </Card>
      </div>
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="text-center md:text-left max-w-md">
              <h3 className="text-2xl font-bold mb-1">
                {translations.footerTitle[language]}
              </h3>
              <p className="text-gray-400 text-sm italic mb-4">
                {translations.footerTagline[language]}
              </p>
              <p className="text-gray-300">
                {translations.footerText[language]}
              </p>
            </div>
            <div className="text-left md:text-center">
              <h3 className="text-xl font-bold mb-4">
                {translations.contactUsTitle[language]}
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-start md:justify-start gap-2 text-gray-300 hover:text-white"
                >
                  <Phone className="h-4 w-4" /> +91 9876543210
                </a>
                <a
                  href="https://wa.me/919876543210"
                  className="flex items-center justify-start md:justify-start gap-2 text-gray-300 hover:text-white"
                >
                  <MessageSquare className="h-4 w-4" />{" "}
                  {translations.whatsappLabel[language]}
                </a>
              </div>
              <div className="mt-4 text-sm text-gray-300">
                <address className="not-italic">
                  Shop No : G-3, Ground Floor, Sai Vasanth Complex,
                  <br />
                  Birla Compound, B.Camp, KURNOOL - 518 002, A.P.
                </address>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>{" "} */}
      </footer>
    </div>
  );
};

export default ContactSection;
