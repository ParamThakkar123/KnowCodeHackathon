import React, { useState, useEffect } from "react";

function BingMap() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (geoPosition) {
        setPosition({
          latitude: geoPosition.coords.latitude,
          longitude: geoPosition.coords.longitude,
        });

        const endpoint = `https://api.tomtom.com/search/2/nearbySearch/.json?key=aqB9fChMArlYb22OoLHz5akGhZbbRlAq&lat=${geoPosition.coords.latitude}&lon=${geoPosition.coords.longitude}&categorySet=7321`;

        fetch(endpoint)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
          })
          .then(data => {
            console.log('Data from the server:', data);

            // Extract names and addresses of hospitals
            const extractedHospitals = data.results.map(hospital => ({
              name: hospital.poi.name,
              address: hospital.address.freeformAddress,
            }));

            // Update state with the extracted data
            setHospitals(extractedHospitals);
          })
          .catch(error => {
            console.error('Fetch error:', error);
          });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((hospital, index) => (
              <tr key={index}>
                <td>{hospital.name}</td>
                <td>{hospital.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BingMap;
