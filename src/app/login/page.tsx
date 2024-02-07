import React from "react";
import { Login } from "../../components/widgets/login";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-blue-400 to-pink-400 overflow-hidden">
      <div
        id="loginCard_container"
        className="relative w-full h-full flex justify-center items-center"
      >
        <Image
          src={"/svgs/LoginEllipse.svg"}
          alt=""
          className="absolute bottom-[-300px] left-[-200px]"
          width={1024}
          height={1024}
        />
        <Login className="w-[500px] h-[550px]" />
      </div>
    </div>
  );
};

export default page;
