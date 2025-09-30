// import React from "react";
// import RadialGlow from "./RadialGlow"; // adjust path
// import Image from "next/image";

// const cards = [
//   {
//     title: "Ask Anything",
//     description:
//       "Quickly find reliable answers to your questions without digging through endless sources.",
//     hoverImage: "/hover1.png", // replace with your image
//   },
//   {
//     title: "Summarize Knowledge",
//     description:
//       "Turn lengthy articles, reports, or documents into concise summaries you can grasp in seconds.",
//     hoverImage: "/hover2.png",
//   },
//   {
//     title: "Generate Ideas",
//     description:
//       "Brainstorm fresh concepts, strategies, and creative solutions tailored to your goals.",
//     hoverImage: "/hover3.png",
//   },
//   {
//     title: "Learn Faster",
//     description:
//       "Break down complex topics into simple explanations designed to accelerate your understanding.",
//     hoverImage: "/hover4.png",
//   },
//   {
//     title: "Stay Organized",
//     description:
//       "Keep track of insights, notes, and resources in one central place for easy access.",
//     hoverImage: "/hover5.png",
//   },
//   {
//     title: "Get Recommendations",
//     description:
//       "Receive personalized suggestions from study material to tools to boost your productivity.",
//     hoverImage: "/hover6.png",
//   },
// ];

// const About = () => {
//   return (
//     <div className="w-full min-h-[100vh] relative bg-[#0E0C15] overflow-hidden py-16">
//       {/* Gradient glows */}
//       <RadialGlow className="top-[-8rem] left-[-8rem]" size={600} color="#00D2FF" />
//       <RadialGlow className="bottom-0 right-0" size={500} color="#00D2FF" />

//       {/* Content */}
//       <div className="relative flex flex-col items-center text-center text-white px-6">
//         <div className="relative">
//             <h2 className="text-[48px] font-[100] mb-6 leading-[1.2] max-sm:text-[1.5rem]">
//               You don’t have to <span className="font-bold">know</span> it all, <br />
//               We will <span className="font-bold">equip</span> you with all you need.
//             </h2>
//             <button className=" px-8 py-3 bg-[#16EFFF] text-black font-body font-medium text-sm transition-all duration-200 hover:bg-white/90 cursor-pointer mb-16">
//               Enroll Now
//             </button>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
//             {cards.map((card, idx) => (
//               <Card key={idx} card={card} />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };
//   // Card component for performance
//   const Card = ({ card }) => {
//     const [hovered, setHovered] = React.useState(false);
//     return (
//       <div
//         className="relative w-[370px] h-[305px] mx-auto flex items-center justify-center overflow-hidden rounded-xl"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         {/* Background border image with static size */}
//         <Image
//           src="/borderGradient.png"
//           alt="Card border background"
//           width={370}
//           height={305}
//           className="absolute inset-0 object-cover z-0"
//         />
//         {/* Hover background image only when hovered */}
//         {hovered && (
//           <Image
//             src={card.hoverImage}
//             alt="Hover background"
//             width={370}
//             height={305}
//             className="absolute inset-0 object-cover z-10 opacity-30 transition-opacity duration-200"
//           />
//         )}
//         {/* Card Content */}
//         <div className="relative flex flex-col justify-between h-full w-full p-6 text-left">
//           <div>
//             <h2
//               className="text-3xl font-semibold mb-3 bg-gradient-to-b from-[#16EFFF] via-[#00D2FF] to-[#0a0a0a89] bg-clip-text text-transparent leading-[1]"
//             >
//               {card.title}
//             </h2>
//             <p className="text-[20px] font-light text-white/60 mb-6">
//               {card.description}
//             </p>
//           </div>
//           <button className="self-end px-4 py-2 text-xs font-medium bg-[#16EFFF] text-black hover:bg-white/90 transition cursor-pointer">
//             Get Started
//           </button>
//         </div>
//       </div>
//     );
//   };

// export default About;
