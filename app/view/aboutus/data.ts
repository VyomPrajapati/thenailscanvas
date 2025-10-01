export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    instagram?: string;
    linkedin?: string;
  };
}

export interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

export interface CompanyStat {
  number: string;
  label: string;
  description: string;
}

export const founder: TeamMember = {
  name: "Suindhi Garg",
  role: "Founder & CEO",
  image: "/image.png",
  bio: "Passionate about revolutionizing nail care with sustainable, reusable solutions. Suindhi founded TheNailsCanvas to make salon-quality nails accessible to everyone while reducing environmental impact.",
  social: {
    instagram: "https://www.instagram.com/the.nails.canvas",
    linkedin: "https://linkedin.com/in/suindhi-garg"
  }
};

export const companyValues: CompanyValue[] = [
  {
    title: "Sustainability",
    description: "We're committed to reducing waste in the beauty industry with reusable, eco-friendly nail solutions.",
    icon: "🌱"
  },
  {
    title: "Quality",
    description: "Every product is crafted with premium materials and attention to detail for salon-quality results.",
    icon: "✨"
  },
  {
    title: "Innovation",
    description: "We continuously innovate to bring you the latest in nail technology and design trends.",
    icon: "💡"
  },
  {
    title: "Accessibility",
    description: "Making beautiful nails accessible to everyone, everywhere, at an affordable price point.",
    icon: "🤝"
  }
];

export const companyStats: CompanyStat[] = [
  {
    number: "10,000+",
    label: "Happy Customers",
    description: "Satisfied customers across India"
  },
  {
    number: "50,000+",
    label: "Nail Sets Sold",
    description: "Reusable nail sets delivered"
  },
  {
    number: "95%",
    label: "Customer Satisfaction",
    description: "Based on customer reviews"
  },
  {
    number: "24/7",
    label: "Customer Support",
    description: "Always here to help you"
  }
];

export const companyStory = {
  problem: {
    title: "The Problem",
    description: "Traditional nail care was wasteful, expensive, and time-consuming. Most women couldn't afford regular salon visits, and single-use nail products created environmental waste."
  },
  solution: {
    title: "Our Solution", 
    description: "We created reusable gel nails that can be applied in minutes, last for weeks, and can be reused up to 10+ times. No salon visits, no waste, just beautiful nails whenever you want them."
  },
  impact: {
    title: "The Impact",
    description: "Thousands of women now have access to salon-quality nails at home, while we've reduced nail waste by 80% compared to traditional methods."
  }
};

export const pageContent = {
  hero: {
    title: "About TheNailsCanvas",
    subtitle: "Revolutionizing nail care with sustainable, reusable solutions",
    description: "We believe every woman deserves beautiful nails without the hassle, expense, or environmental impact of traditional nail care."
  },
  mission: {
    title: "Our Mission",
    description: "To make salon-quality nails accessible to everyone while promoting sustainable beauty practices that benefit both our customers and the planet."
  }
};
