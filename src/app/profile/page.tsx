import React from "react";

import { CardDemo } from "@/components/LoginCard/LoginCard";
import { NavigationMenuDemo } from "@/components/NavBar/NavBar";

const ProfilePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative bottom-[250px]">
        <NavigationMenuDemo cart={[]} />
      </div>

      <CardDemo />
    </div>
  );
};

export default ProfilePage;
