import React from "react";
import Image from "next/image";
function EventChess() {
  return (
    <div className="rounded-xl -mt-11 w-full h-20vh">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/group.png"
        alt="Group Logo"
        width={700}
        height={200}
        priority
      />
      <div className="bg-[#9977ff] opacity-65 flex flex-col justify-center items-center gap-4 p-5 rounded-3xl -mt-10 backdrop:filter ">
        <h3 className="font-bold text-2xl text-white">tournois d'échecs</h3>
        <p className="text-xl text-[#5939b9]">Association des jeunes sousse</p>
      </div>
    </div>
  );
}

export default EventChess;
