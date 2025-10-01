export interface ContactInfo {
  type: 'email' | 'phone' | 'address' | 'social';
  label: string;
  value: string;
  icon: string;
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export const contactInfo: ContactInfo[] = [
  {
    type: 'email',
    label: 'Email Support',
    value: 'support@thenailscanvas.com',
    icon: '📧',
    link: 'mailto:support@thenailscanvas.com'
  },
  {
    type: 'phone',
    label: 'Phone Support',
    value: '+91 98765 43210',
    icon: '📞',
    link: 'tel:+919876543210'
  },
  {
    type: 'address',
    label: 'Office Address',
    value: '123 Beauty Street, Mumbai, Maharashtra 400001',
    icon: '📍',
    link: 'https://maps.google.com'
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/the.nails.canvas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    icon: '/corelogos/instagram-svgrepo-com.svg',
    label: 'Follow us on Instagram'
  },
  {
    platform: 'YouTube',
    url: 'https://www.youtube.com/@thenailscanvas',
    icon: '/corelogos/youtube-svgrepo-com.svg',
    label: 'Subscribe to our YouTube channel'
  }
];

export const contactSubjects = [
  'Product Inquiry',
  'Order Support',
  'Size & Application Help',
  'Returns & Exchanges',
  'Partnership Opportunities',
  'General Feedback',
  'Other'
];

export const pageContent = {
  hero: {
    title: "Get in Touch",
    subtitle: "We're here to help with all your nail care needs",
    description: "Have questions about our products, need help with sizing, or want to share feedback? We'd love to hear from you!"
  },
  form: {
    title: "Send us a Message",
    subtitle: "Fill out the form below and we'll get back to you within 24 hours",
    successMessage: "Thank you for your message! We'll get back to you soon.",
    errorMessage: "Sorry, there was an error sending your message. Please try again."
  },
  info: {
    title: "Contact Information",
    subtitle: "Reach out to us through any of these channels"
  }
};

export const supportHours = {
  title: "Customer Support Hours",
  description: "Our support team is available to help you:",
  hours: [
    "Monday - Friday: 9:00 AM - 7:00 PM IST",
    "Saturday: 10:00 AM - 5:00 PM IST", 
    "Sunday: 10:00 AM - 3:00 PM IST"
  ],
  note: "For urgent queries, you can always reach us via WhatsApp or email."
};

export const faqLinks = [
  {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about our products and services",
    link: "/view/faq"
  },
  {
    title: "Size Guide",
    description: "Learn how to choose the perfect nail size for your fingers",
    link: "/view/size-guide"
  },
  {
    title: "Application Guide", 
    description: "Step-by-step instructions for applying your reusable gel nails",
    link: "/view/application-guide"
  }
];
