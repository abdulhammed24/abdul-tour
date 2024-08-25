// "use client";

// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { useEffect } from 'react';
// import L from 'leaflet';

// const locations = [
//   {
//     position: [4.375, 73.5],
//     popup: 'North Malé Atoll, Maldives',
//   },
// ];

// const Map = () => {
//   useEffect(() => {
//     // Fix Leaflet icon issue
//     delete L.Icon.Default.prototype._getIconUrl;
//     L.Icon.Default.mergeOptions({
//       iconUrl: '/images/marker-icon.png',
//       iconRetinaUrl: '/images/marker-icon.png',
//       shadowUrl: '/images/marker-shadow.png',
//     });
//   }, []);

//   return (
//     <MapContainer
//       center={[4.375, 73.5]}
//       zoom={6}
//       style={{ height: '100%', width: '100%' }}
//       scrollWheelZoom={false}
//       className="flex-1 min-h-80 bg-[#fcf8f7]"
//     >
        
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {locations.map((loc, idx) => (
//         <Marker key={idx} position={loc.position}>
//           <Popup>{loc.popup}</Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default Map;


const Map = () => {
  return (
    <div  className="flex-1 justify-center items-center flex min-h-80 bg-[#fcf8f7]">
      Map
    </div>
  );
}

export default Map;