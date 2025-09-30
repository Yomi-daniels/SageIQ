// const CardStack = () => {
//  const cards = [
//   { id: 1, img: "/sagerobot.png", color: "from-cyan-400 to-sky-500" },
//   { id: 2, img: "/sagerobot.png", color: "from-siq-cyan to-purple-500" },
//   { id: 3, img: "/sagerobot.png", color: "from-purple-600 to-indigo-500" },
// ]


//   return (
//     <div className="relative flex justify-center items-center mt-10">
//       {cards.map((card, index) => (
//         <div
//           key={card.id}
//           className={`absolute transition-all duration-500`}
//           style={{
//             top: `${index * 20}px`,
//             transform: `scale(${1 - index * 0.05})`,
//             zIndex: cards.length - index,
//           }}
//         >
//           <div
//             className={`relative p-[2px] rounded-2xl bg-gradient-to-r ${card.color} shadow-lg shadow-${card.color}/40`}
//           >
//             <div className="bg-n-8 rounded-2xl overflow-hidden w-[850px] h-[400px]">
//               <img
//                 src={card.img}
//                 alt="AI card"
//                 className="w-full h-full object-cover rounded-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardStack;
