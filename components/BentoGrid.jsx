import React from 'react'

const BentoGrid = () => {
  return (
    <div>
        {/* Bento Grid */}
      <div className="relative grid grid-cols-6 grid-rows-3 gap-8 w-full max-w-7xl mx-auto">
        
     {/* Top Left Card */}
<div className="relative col-span-2 row-span-1 bg-[#00D2FF] from-[#1c1c28] to-[#0e0e18] rounded-2xl p-8 flex flex-col justify-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 w-[230px] h-full z-0">
    <Image
      src="/hover4.png"
      alt="Prompter AI"
      fill
      className="object-cover opacity-80"
      priority
    />
  </div>
  {/* Text Content above image */}
  <h3 className="text-4xl font-extrabold text-white mb-4 z-10 relative">Robotics</h3>
  <p className="text-black text-md z-10 relative font-medium bg-[#ffffffa0] p-4 rounded-sm">Explore the world of robotics, automation, and intelligent machines. Discover how robots are transforming industries and making life easier through advanced technology.</p>
</div>

        {/* Main Center Card (Hero) */}
<div className="col-span-2 row-span-2 relative bg-[#00D2FF] from-[#16EFFF]/20 to-[#1c1c28] rounded-2xl min-h-[600px] min-w-[350px] overflow-hidden">
 {/* Floating text card with loader */}
<div className="absolute top-[500px] left-1/2 -translate-x-1/2 bg-[#0E0C15]/80 border border-[#16EFFF]/30 backdrop-blur-md px-8 py-4 rounded-xl text-base font-medium text-white z-20 flex flex-col items-center gap-3 min-w-[300px]">
  <span className="font-medium">AI is generating…</span>

  {/* Progress Bar */}
  <div className="w-full bg-[#1c1c28] rounded-full h-2 overflow-hidden">
    <div className="h-2 bg-[#00D2FF] animate-progress rounded-full"></div>
  </div>
</div>


  {/* Robot Image positioned below */}
  <div className="absolute bottom-[-140px] left-[14rem] -translate-x-1/2 w-[1000px] h-[800px]">
    <Image
      src="/servicesRobot.png"
      alt="Prompter AI"
      fill
      className="object-contain"
      priority
    />
  </div>
</div>




        {/* Top Right Logo Card */}
        <div className="col-span-2 row-span-1 bg-gradient-to-br from-[#1c1c28] to-[#0e0e18] rounded-2xl flex items-center justify-center">
          <Image
            src="/hover1.png"
            alt="Brand Logo"
            width={140}
            height={140}
          />
        </div>

        {/* Left Middle Card */}
        <div className="col-span-2 row-span-1 bg-gradient-to-br from-[#0e0e18] to-[#14121F] rounded-2xl flex items-center justify-center">
          <Image
            src="/person.png"
            alt="AI User"
            width={200}
            height={140}
            className="rounded-lg"
          />
        </div>

        {/* Bottom Left Browser Mockup */}
        <div className="col-span-2 row-span-1 bg-gradient-to-br from-[#1c1c28] to-[#0e0e18] rounded-2xl flex items-center justify-center text-white text-sm">
          <p className="text-[#16EFFF] font-mono">https://prompter.ai</p>
        </div>

        {/* Bottom Right Card */}
        {/* <div className="col-span-2 row-span-1 h-[100px]  bg-gradient-to-br from-[#0e0e18] to-[#14121F] rounded-2xl flex items-center justify-center">
          <Image
            src="/abstract.png"
            alt="Abstract AI"
            width={240}
            height={240}
            className="rounded-xl"
          />
        </div> */}

      </div>
    </div>
  )
}

export default BentoGrid
