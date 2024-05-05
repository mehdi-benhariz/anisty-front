import React from "react";
import Image from "next/image";
function UserNameSmall() {
  return (
    <div className="flex gap-10 w-full p-4 items-center bg-[#9977FF] pb-20">
      <Image src="/avatar.png" alt="avatar" width={80} height={80} priority />
      <h2 className="text-white text-xl">Louay Romdhane</h2>
    </div>
  );
}

export default UserNameSmall;
