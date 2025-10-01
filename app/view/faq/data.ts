export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  description: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    title: "Product Information",
    description: "Everything you need to know about our reusable gel nails",
    items: [
      {
        question: "What are reusable gel nails?",
        answer: "Our reusable gel nails are high-quality, salon-grade nail sets that can be applied and removed multiple times. They're made from durable gel material and can be reused up to 10+ times with proper care."
      },
      {
        question: "How long do the nails last?",
        answer: "Each application can last 1-2 weeks depending on your lifestyle and care routine. The nails themselves can be reused up to 10+ times, giving you months of beautiful nails from a single set."
      },
      {
        question: "Are they safe for my natural nails?",
        answer: "Yes! Our reusable gel nails are designed to be gentle on your natural nails. They don't require harsh chemicals or filing, and can be easily removed without damage."
      },
      {
        question: "What sizes are available?",
        answer: "We offer three sizes: Short, Medium, and Long. Each set comes with multiple sizes to ensure a perfect fit for your fingers."
      },
      {
        question: "What colors and designs do you offer?",
        answer: "We have a wide range of colors including French tips, solid colors, glitter, pastels, and nude shades. New designs are added regularly to keep up with the latest trends."
      }
    ]
  },
  {
    title: "Application & Care",
    description: "How to apply, maintain, and care for your nails",
    items: [
      {
        question: "How do I apply the nails?",
        answer: "Clean your nails, select the right size, apply a small amount of nail glue, press firmly for 30 seconds, and file to shape. The entire process takes just 5-10 minutes."
      },
      {
        question: "How do I remove the nails?",
        answer: "Soak your nails in warm, soapy water for 10-15 minutes, then gently lift from the sides. Never force or pull them off as this can damage your natural nails."
      },
      {
        question: "Can I reuse the same set multiple times?",
        answer: "Absolutely! With proper care, each set can be reused up to 10+ times. Just clean them after removal and store them in the provided case."
      },
      {
        question: "How do I clean the nails for reuse?",
        answer: "After removal, gently clean the nails with soap and water, remove any remaining glue, and let them air dry completely before storing."
      },
      {
        question: "Can I paint over the nails?",
        answer: "Yes! You can apply regular nail polish over our gel nails. Just make sure to use a base coat and top coat for best results."
      }
    ]
  },
  {
    title: "Orders & Shipping",
    description: "Information about placing orders and delivery",
    items: [
      {
        question: "How long does shipping take?",
        answer: "We ship within 24-48 hours of order confirmation. Standard delivery takes 3-5 business days, while express delivery takes 1-2 business days."
      },
      {
        question: "Do you ship internationally?",
        answer: "Currently, we only ship within India. We're working on international shipping and will announce it soon."
      },
      {
        question: "What is your return policy?",
        answer: "We offer a 7-day return policy for unopened products. If you're not satisfied with your purchase, contact our support team for assistance."
      },
      {
        question: "How can I track my order?",
        answer: "Once your order ships, you'll receive a tracking number via email and SMS. You can track your package using our website or the courier's tracking system."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit/debit cards, UPI payments, net banking, and cash on delivery (COD) for orders above ₹500."
      },
      {
        question: "Is there a minimum order amount?",
        answer: "No, there's no minimum order amount. However, free shipping is available on orders above ₹1000."
      }
    ]
  }
];

export const pageContent = {
  hero: {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions about our products and services",
    description: "Can't find what you're looking for? Contact our support team for personalized assistance."
  },
  contact: {
    title: "Still Have Questions?",
    description: "Our customer support team is here to help you with any questions or concerns.",
    buttonText: "Contact Support"
  }
};

export const quickHelpLinks = [
  {
    title: "Size Guide",
    description: "Learn how to choose the perfect nail size",
    link: "/view/size-guide"
  },
  {
    title: "Application Guide",
    description: "Step-by-step application instructions",
    link: "/view/application-guide"
  },
  {
    title: "Care Instructions",
    description: "How to maintain and reuse your nails",
    link: "/view/care-guide"
  }
];
