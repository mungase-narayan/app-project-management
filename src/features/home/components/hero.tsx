import GridEffect from "../../../components/effects/grid-effect";
import siteConfigs from "../../../configs/site-configs";

import { BadgeDollarSign, PanelsTopLeft, SquareCheckBig } from "lucide-react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";

const Hero = () => {
  const { isAuth } = useAuth();
  const link = isAuth ? "/dashboard/home" : "/auth/sign-up";
  return (
    <div className="relative pt-4 pb-8 sm:pb-16 sm:pt-10 px-4 sm:px-8 mx-auto">
      <GridEffect className="hidden sm:block" />
      <div className="relative flex items-center justify-center flex-col sm:block sm:container z-[10]">
        <p className="text-md">
          Welcome to <span className="text-active">{siteConfigs.name}</span>{" "}
        </p>

        <div className="py-4 text-center sm:text-2xl text-2xl md:text-4xl xl:text-5xl font-bold mt-4 text-transparent bg-gradient-to-r from-blue-400 to-blue-500 inline-block bg-clip-text">
          Simplifying Project Management
        </div>

        {/* <h1 className="text-center sm:text-start text-2xl sm:text-2xl md:text-4xl xl:text-5xl font-bold mt-8 bg-gradient-to-r from-active/70 via-active/90 to-active inline-block text-transparent bg-clip-text">
          Simplifying Project Management
        </h1> */}

        <p className="text-sm mt-2 text-muted-foreground text-center sm:text-start">
          BL Sheet is your ultimate tool for managing projects effortlessly.
        </p>

        <div className="hidden sm:flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 mt-4">
          <div className="flex items-center space-x-2 text-foreground text-sm">
            <PanelsTopLeft size={18} />
            <span>Project Management</span>
          </div>

          <div className="border-l border-foreground h-[10px] hidden sm:block" />

          <div className="flex items-center space-x-2 text-foreground text-sm">
            <SquareCheckBig size={18} />
            <span>Task Management</span>
          </div>

          <div className="border-l border-foreground h-[10px] hidden sm:block" />

          <div className="flex items-center space-x-2 text-foreground text-sm">
            <BadgeDollarSign size={18} />
            <span>Budget Management</span>
          </div>
        </div>

        <div className="space-x-3 flex items-center mt-4 z-50">
          <Link
            to={link}
            className="inline-flex text-white items-center rounded-full  px-5 py-2 text-sm font-light bg-active hover:bg-active/80 transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
