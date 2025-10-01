"use client";

import { useState } from "react";

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    country: "",
    state: "",
    zipCode: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-8">
      {/* Stepper removed as requested */}

      {/* Contact Person Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Person</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Eg: John Doe"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full px-4 py-3 border border-black/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-black/50 font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <div className="flex gap-2">
              <select className="px-3 py-3 border border-black/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-black/50 font-medium">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input
                type="tel"
                placeholder="111-2222-33333"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="flex-1 px-4 py-3 border border-black/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-black/50 font-medium"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Eg: example@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-4 py-3 border border-black/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-black/50 font-medium"
            />
          </div>
        </div>
      </div>

      {/* Address Detail Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Address Detail</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Address Line 1</label>
            <input
              type="text"
              placeholder="House/Flat No, Building Name, etc."
              value={formData.addressLine1}
              onChange={(e) => handleInputChange("addressLine1", e.target.value)}
              className="w-full px-4 py-3 border border-black/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-black/50 font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Address Line 2</label>
            <input
              type="text"
              placeholder="Road, Landmark, Area, etc."
              value={formData.addressLine2}
              onChange={(e) => handleInputChange("addressLine2", e.target.value)}
              className="w-full px-4 py-3 border border-black/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-black/50 font-medium"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Country</label>
              <select
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                className="w-full px-4 py-3 border border-black/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-black/50 font-medium"
              >
                <option value="">--Choose Country--</option>
                <option value="india">India</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">State/Province</label>
              <select
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                className="w-full px-4 py-3 border border-black/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-black/50 font-medium"
              >
                <option value="">--Choose Province--</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="delhi">Delhi</option>
                <option value="karnataka">Karnataka</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">ZIP Code</label>
            <input
              type="text"
              placeholder="400001"
              value={formData.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
              className="w-full px-4 py-3 border border-black/15 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-black/50 font-medium"
            />
          </div>
        </div>
      </div>

      <button className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity">
        Continue to Shipping
      </button>
    </div>
  );
}
