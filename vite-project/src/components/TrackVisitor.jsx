import { useEffect } from "react";

const TrackVisitor = () => {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        const location = `${data.city}, ${data.region}`;
        let visitorsData =
          JSON.parse(localStorage.getItem("visitorsData")) || {};

        if (visitorsData[location]) {
          visitorsData[location] += 1;
        } else {
          visitorsData[location] = 1;
        }

        localStorage.setItem("visitorsData", JSON.stringify(visitorsData));
      } catch (err) {
        console.error("Location tracking failed:", err);
      }
    };

    trackVisit();
  }, []);

  return null;
};

export default TrackVisitor;
