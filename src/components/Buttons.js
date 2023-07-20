import satData from './satData';

// const Buttons = () => {
//   return (
//     <div>
//       <button>Placeholder Button</button>
//       <button>All Orbits</button>
//       </div>
//   );
// };
import "./styling.css";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
     {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}

      <button onClick={() => setSat(satData)}>All Orbits</button>

      
    </div>
  );
};

export default Buttons;