import React, { useState } from "react";
import DarkModeToggle from "@/Components/DarkModeToggle";
import GridToggle from "./GridToggle";
import { Bell, Heart, Search, ShoppingCart } from "lucide-react";
import Localization from "./Localization";
import { useTranslation } from "react-i18next";
import NotificationsEmpty from "./NotificationsEmpty";
import SignWithGoogle from "./SignWithGoogle";
import useFavorites from "@/Store/useFavorites";
import Marquee from "./Marquee";
import useDarkModeToggle from "@/Store/DarkModeToggle";
const ButtonCategories = () => {
  const isDark = useDarkModeToggle((state) => state.isDark());
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const count = useFavorites((state) => state.favorites.length);
  return (
    <div className="container mx-auto px-4 flex flex-col">
      <div className="">
        <div className="flex items-center gap-4">
          {/* #Logo */}
          <div className="logo">
            <img
              className="w-10 h-10 rounded-full"
              src="public\img\IMG-20250919-WA0025.jpg"
              alt=""
            />
          </div>
          {/* #Logo */}
          {/* #Links */}
          <div className="flex items-center">
            <div className="flex gap-3">
              <button
                className={`cursor-pointer rounded-md !py-1 !px-2 text-sm font-[500] 
              ${
                isDark
                  ? "text-white hover:text-black hover:bg-white"
                  : "text-black hover:text-white hover:bg-black"
              }`}
              >
                {t("books.all")}
              </button>
              <button
                className={`cursor-pointer rounded-md !py-1 !px-2 text-sm font-[500] 
              ${
                isDark
                  ? "text-white hover:text-black hover:bg-white"
                  : "text-black hover:text-white hover:bg-black"
              }`}
              >
                {t("books.free")}
              </button>

              <button
                className={`cursor-pointer rounded-md !py-1 !px-2 text-sm font-[500]  
              ${
                isDark
                  ? "text-white hover:text-black hover:bg-white"
                  : "text-black hover:text-white hover:bg-black"
              }`}
              >
                {t("books.paid")}
              </button>
            </div>
          </div>
          {/* #Links */}
          {/* #Search */}
          <div className="relative flex items-center">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

            <input
              type="text"
              placeholder="Search"
              className="w-90 border rounded-md !pl-8 !pr-2 !py-1.5"
            />
          </div>
          {/* #Search */}
          <div className="flex gap-5 items-center">
            {/* #Login With Google */}
            <div>
              <SignWithGoogle />
            </div>
            {/* #Login With Google */}
            {/* #Heart */}
            <div className="relative">
              <Heart />
              {count > 0 && (
                <span
                  className="absolute -top-2 -right-2 w-5 h-5 text-xs
       bg-red-500 text-white rounded-full
       flex items-center justify-center"
                >
                  {count}
                </span>
              )}
            </div>
            {/* #Heart */}
            {/* #ShoppingCart */}
            <div>
              <ShoppingCart className="cursor-pointer" />
            </div>
            {/* #ShoppingCart */}
            {/* #Notifications */}
            <div
              onClick={() => setOpen((prev) => !prev)}
              className="cursor-pointer w-8 h-8 rounded-full bg-gray-400 flex justify-center items-center text-white"
            >
              <Bell />
              {open && (
                <div className="absolute top-17 right-88 z-50">
                  <NotificationsEmpty />
                </div>
              )}
            </div>
            {/* #Notifications */}
            {/* #Localization */}
            <div>
              <Localization />
            </div>
            {/* #Localization */}
            {/* #GridToggle */}
            <div className="">
              <GridToggle />
            </div>
            {/* #GridToggle */}
            {/* #DarkAndLight */}
            <div className="">
              <DarkModeToggle />
            </div>
            {/* #DarkAndLight */}
          </div>
        </div>
      </div>
      {/* #Marquee */}
      <div>
        <Marquee />
      </div>
      {/* #Marquee */}
    </div>
  );
};

export default ButtonCategories;
