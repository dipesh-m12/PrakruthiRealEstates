import React from "react";
import { Phone, MessageSquare, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ContactSection = () => {
  return (
    <div className="font-sans">
      {/* Contact Cards Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-6">
        {/* Get in Touch Card */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-500" />
              <div>
                <div>Phone</div>
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
                <div>WhatsApp</div>
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
                <div>Office</div>
                <address className="text-gray-600 not-italic">
                  Shop No : G-3, Ground Floor, Sai Vasanth Complex,
                  <br />
                  Birla Compound, B.Camp, KURNOOL - 518 002, A.P.
                </address>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Contact Card */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Quick Contact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              Reach out to us directly through WhatsApp or phone call for
              immediate assistance.
            </p>

            <Button
              variant="default"
              className="w-full flex items-center justify-center gap-2 bg-black text-white hover:bg-gray-800"
              asChild
            >
              <a href="https://wa.me/919876543210">
                <MessageSquare className="h-5 w-5" /> Contact on WhatsApp
              </a>
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 hover:bg-gray-100"
              asChild
            >
              <a href="tel:+919876543210">
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </Button>

            <Separator className="my-4" />

            <div className="text-center text-gray-600 text-sm flex items-center justify-center gap-2">
              <Clock className="h-4 w-4" />
              <span>
                Our team is available Monday to Saturday, 9:00 AM to 8:00 PM
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="text-center md:text-left max-w-md">
              <h3 className="text-2xl font-bold mb-1">
                Prakruthi Real Estates
              </h3>
              <p className="text-gray-400 text-sm italic mb-4">
                Real Value For Changing World
              </p>
              <p className="text-gray-300">
                Your trusted partner in finding the perfect property for your
                needs.
              </p>
            </div>

            <div className="text-left md:text-center">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
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
                  <MessageSquare className="h-4 w-4" /> WhatsApp
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
      </footer>
    </div>
  );
};

export default ContactSection;
