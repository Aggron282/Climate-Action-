var token = `IePgFmNGVOGGDAdlcwoxxYgxBXwvhsuj`;


const map = L.map('map').setView([37.7749, -122.4194], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


const latMin = -90;
const latMax = 90;
const lngMin = -180;
const lngMax = 180;
const step = .2;


//
// const apiKey = 'YOUR_OPENCAGE_API_KEY';
//
// async function isOnLand(lat, lng) {
//     const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`;
//
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//
//         if (data.results && data.results.length > 0) {
//             const type = data.results[0].components._type; // This gives the type of place (e.g., "country", "water", etc.)
//
//             if (type.includes("land") || type.includes("country") || type.includes("city")) {
//                 return true;  // It's on land
//             } else {
//                 return false; // It's in water
//             }
//         } else {
//             console.log("No results found for this lat/lng.");
//             return false; // Default to water if no results found
//         }
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         return false;
//     }
// }
const minLat = 24.396308;
const maxLat = 49.384358;
const minLng = -125.0;
const maxLng = -66.93457;
const stepSize = 1.0;
const heatData = [];

// Loop through all lat/lng points and add them with random intensity
for (let lat = minLat; lat <= maxLat; lat += stepSize) {
  for (let lng = minLng; lng <= maxLng; lng += stepSize) {
    const intensity = Math.random(); // Random intensity between 0 and 1
  
    heatData.push([lat, lng, intensity]);
  }
}

// Add heat map layer to Leaflet map
L.heatLayer(heatData, {
  radius: 25,
  blur: 15,
  maxZoom: 17,
  gradient: { 0.1: 'blue', 0.5: 'lime', 1.0: 'red' }
}).addTo(map);

async function GetMapData() {
  var url = `https://www.ncdc.noaa.gov/cdo-web/api/v2/data`;
  console.log(url)
  var { data } = await axios.get(url, {
      headers: {
        token: token, // Include token in headers
      },
      params: {
        datasetid: 'GHCND',
        locationid: 'FIPS:37',
        startdate: '2022-01-01',
        enddate: '2022-12-31',
      },
    });

    console.log(data)

  }

GetMapData();


function calculateRiskLevel(probability) {
  if (probability < 0.1) return "low";
  if (probability < 0.25) return "medium";
  return "high";
}

function getRiskColor(riskLevel) {
  switch (riskLevel) {
    case "low": return "#00ff00";
    case "medium": return "#ffff00";
    case "high": return "#ff0000";
  }
}

function mapRiskData(location) {
  L.marker([location.latitude, location.longitude])
    .addTo(map)
    .bindPopup(`
      <b>${location.name}</b><br>
      Flood Risk: <span style="color:${getRiskColor(location.risks.flood.risk_level)}">${location.risks.flood.risk_level}</span><br>
      Wildfire Risk: <span style="color:${getRiskColor(location.risks.wildfire.risk_level)}">${location.risks.wildfire.risk_level}</span>
    `)
    .openPopup();
}

//
// L.marker([lat, lon]).addTo(map)
//     .bindPopup(`<b>Flood Risk:</b> ${floodRisk}<br><b>Heatwave Risk:</b> ${heatwaveRisk}`)
//     .openPopup()
