
import React, { useState } from "react";
import DataonImg from "./DataonImg";
import wallpaper1 from './assets/images/wallpaper1.jpg';
import wallpaper2 from './assets/images/wallpaper2.jpg';
import wallpaper3 from './assets/images/wallpaper3.jpg';
import wallpaper4 from './assets/images/wallpaper4.jpg';

const App = () => {
  const [formData, setFormData] = useState({
    sim: "",
    date: "",
    time: "",
    notification: "",
    amount: "",
    payfrom: "",
    timeago: "",
  });
  const [selectedWallpaper, setSelectedWallpaper] = useState(wallpaper1); // default wallpaper

  const wallpapers = [wallpaper1, wallpaper2, wallpaper3, wallpaper4];

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      {/* Single container */}
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6 flex flex-col lg:flex-row gap-6">
        
        {/* Left side: Form */}
        <div className="flex-1 space-y-4">
          <h1 className="text-xl sm:text-2xl font-bold text-center mb-4">
            Create Fake Stripe, Twitter, PayPal Notifications
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Create a realistic, fictional screenshot showing a payment received
            from Stripe, X, or PayPal, and share it on Twitter to attract more
            followers.
          </p>

          {/* Form fields */}
          <div className="space-y-4">
            <div>
              <p className="font-medium">Enter SIM card company name</p>
              <input
                name="sim"
                onChange={handleChange}
                type="text"
                placeholder="ex: jio"
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none "
              />
            </div>

            <div>
              <p className="font-medium">Date</p>
              <input
                onChange={handleChange}
                name="date"
                type="date"
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none "
              />
            </div>

            <div>
              <p className="font-medium">Time</p>
              <input
                onChange={handleChange}
                name="time"
                placeholder="11.23"
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none "
              />
            </div>

            <div>
              <p className="font-medium">Notification</p>
              <select
                name="notification"
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none "
              >
                <option value="">Select notification</option>
                <option value="X">X</option>
                <option value="Stripe">Stripe</option>
                <option value="Paypal">PayPal</option>
              </select>
            </div>

            <div>
              <p className="font-medium">Amount</p>
              <input
                onChange={handleChange}
                name="amount"
                type="text"
                placeholder="amount"
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none "
              />
            </div>

            <div>
              <p className="font-medium">Time ago</p>
              <input
                onChange={handleChange}
                name="timeago"
                type="text"
                placeholder="time ago"
                className="  w-full border rounded-lg p-2 mt-1 focus:outline-none "
              />
            </div>

            <div>
              <p className="font-medium">Pay from</p>
              <input
               
                onChange={handleChange}
                name="payfrom"
                type="text"
                placeholder="user@stripe.com"
                className="outline-none w-full border rounded-lg p-2 mt-1 focus:outline-none "
              />
            </div>
          </div>

          <p className="mt-6 text-center text-gray-500">iPhone | Android</p>

          {/* Wallpaper selection */}
          <div className="flex space-x-4 overflow-x-auto  scrollbar-hide mt-4">
            {wallpapers.map((wall, index) => (
              <img
                key={index}
                src={wall}
                alt=""
                className="w-32 h-48 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500"
                onClick={() => setSelectedWallpaper(wall)}
              />
            ))}
          </div>
        </div>

        {/* Right side: Preview */}
        <div className="flex-1 flex justify-center items-start">
          <DataonImg formData={formData} wallpaper={selectedWallpaper} />
        </div>
      </div>
    </div>
  );
};

export default App;
