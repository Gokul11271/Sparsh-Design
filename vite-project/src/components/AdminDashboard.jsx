import React, { useEffect, useState } from "react";
import { MapPin, Users } from "lucide-react";

const AdminDashboard = () => {
  const [locations, setLocations] = useState([]);
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    const visitorsData = JSON.parse(localStorage.getItem("visitorsData")) || {};
    const locArray = Object.entries(visitorsData).map(([location, count]) => {
      const [city, region] = location.split(", ");
      return { city, region, count };
    });

    const total = Object.values(visitorsData).reduce(
      (sum, val) => sum + val,
      0
    );

    setLocations(locArray);
    setVisitors(total);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] p-8">
      <h2 className="text-3xl font-semibold mb-8" style={{ color: "#D68C45" }}>
        Admin Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white rounded-xl p-8 shadow-lg flex items-center gap-4">
          <Users size={40} color="#D68C45" />
          <div>
            <p className="text-lg text-gray-600">Total Visitors</p>
            <h3 className="text-3xl font-bold">{visitors}</h3>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h4
            className="text-lg font-semibold mb-4 flex items-center gap-2"
            style={{ color: "#D68C45" }}
          >
            <MapPin size={20} /> Location Insights
          </h4>
          <ul className="space-y-3">
            {locations.map((loc, idx) => (
              <li key={idx} className="flex justify-between text-gray-700">
                <span>
                  {loc.city}, {loc.region}
                </span>
                <span>{loc.count} visits</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
