import useViewToggleStore from "@/Store/GridAndList";
import React from "react";
import { Link } from "react-router";
import { Heart } from "lucide-react";
import useFavorites from "@/Store/useFavorites";
const GetDataPhoto = ({ item, index }) => {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-yellow-500",
    "bg-indigo-500",
  ];
  const getColor = (index) => colors[index % colors.length];
  const { view } = useViewToggleStore();

  const { favorites, toggleFavorite } = useFavorites();

  if (!item || !item.id) return null;

  const isFav = favorites.some((fav) => fav.id === item.id);

  return (
    <div>
      <div className="" key={item.id}>
        <div className="">
          <div className="relative">
            <img
              className={`w-[400px] h-[200px] border-2 rounded-3xl ${
                view === "list" ? "w-full object-contain bg-gray-500" : ""
              }`}
              src={
                item.volumeInfo.imageLinks?.thumbnail
                  ? item.volumeInfo.imageLinks?.thumbnail
                  : "img/IMG-20250919-WA0025.jpg"
              }
              alt=""
            />
            <div
              onClick={() => toggleFavorite(item)}
              className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-gray-700 text-white rounded-full hover:scale-110 transition cursor-pointer"
    ${isFav ? "bg-red-500 text-white" : "bg-gray-200 text-gray-600"}
  `}
            >
              <Heart className={`w-5 h-5 ${isFav ? "fill-white" : ""}`} />
            </div>
          </div>
          <div className="flex items-center gap-3 !p-3">
            <Link
              to={`/SingleBooks/${item.id}`}
              className="flex gap-5 items-center"
            >
              <div className="flex items-center justify-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-md ${getColor(
                    index
                  )}`}
                >
                  {item.volumeInfo.title?.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="flex flex-col">
                <p className="line-clamp-1 text-sm">
                  {item.volumeInfo.authors}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetDataPhoto;
