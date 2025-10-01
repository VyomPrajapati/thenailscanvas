import Image from "next/image";

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: "/corelogos/email.svg",
      title: "Email Support",
      description: "Get detailed help via email",
      contact: "admin@thenailscanvas.com",
      response: "Response within 24 hours",
    },
    {
      icon: "/corelogos/phone.svg",
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+91 98765 43210",
      response: "Mon-Fri, 9 AM - 6 PM IST",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: "/corelogos/instagram-svgrepo-com.svg",
      handle: "@the.nails.canvas",
      description: "Follow for tips & inspiration",
    },
    {
      name: "YouTube",
      icon: "/corelogos/youtube-svgrepo-com.svg",
      handle: "TheNailsCanvas",
      description: "Detailed how-to videos",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-black/10 shadow-lg">
        <h3 className="text-xl font-bold text-black mb-6">Contact Methods</h3>
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 transition-colors duration-300">
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Image src={method.icon} alt={method.title} width={24} height={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-black mb-1">{method.title}</h4>
                <p className="text-sm text-black/70 mb-2">{method.description}</p>
                <p className="font-medium text-black">{method.contact}</p>
                <p className="text-xs text-black/60 mt-1">{method.response}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-black/10 shadow-lg">
        <h3 className="text-xl font-bold text-black mb-6">Follow Us</h3>
        <div className="space-y-4">
          {socialLinks.map((social, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/50 transition-colors duration-300">
              <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Image src={social.icon} alt={social.name} width={20} height={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-black">{social.name}</h4>
                <p className="text-sm text-black/70">{social.handle}</p>
                <p className="text-xs text-black/60">{social.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
