import { SidebarGroup, SidebarMenu } from "@/components/ui/sidebar";
import { House, MapPinHouse } from "lucide-react";
import { Link } from "react-router-dom";
import useAuthStore from "@/Store/useAuthStore";
export function NavMain() {
  const links = [
    { title: "Books", href: "/", icons: <House /> },
    { title: "Maps", href: "maps", icons: <MapPinHouse /> },
    { title: "About", href: "maps", icons: <MapPinHouse /> },
    { title: "Service", href: "maps", icons: <MapPinHouse /> },
    { title: "Shop", href: "maps", icons: <MapPinHouse /> },
    { title: "Profile", href: "maps", icons: <MapPinHouse /> },
    { title: "Login", href: "maps", icons: <MapPinHouse /> },
    { title: "Register", href: "maps", icons: <MapPinHouse /> },
    { title: "Contact Us", href: "maps", icons: <MapPinHouse /> },
    { title: "Contact Us", href: "maps", icons: <MapPinHouse /> },
    { title: "Contact Us", href: "maps", icons: <MapPinHouse /> },
  ];
  const user = useAuthStore((state) => state.user);
  console.log("Navbar user:", user);

  return (
    <SidebarGroup>
      <SidebarMenu>
        <div className="!p-4">
          {links.map((link) => (
            <Link to={link.href} key={link.title}>
              <div className="flex items-center gap-4 text-md !pl-4 border-1 w-full h-10 rounded-lg hover:bg-amber-400 !mb-3">
                <span>{link.icons}</span>
                <span>{link.title}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="fixed bottom-0 border-t-2 w-[255px] h-15 bg-black">
          <div className="flex items-center !p-2 gap-3">
            {user ? (
              <>
                <img
                  className="w-8 h-8 rounded-full"
                  src={user.photoURL || "/public/img/default.png"}
                  alt={user.displayName || "User"}
                />
                <div className="flex flex-col">
                  <p className="text-sm font-medium">
                    {user.displayName || "No Name"}
                  </p>
                  <div className="wrap-anywhere">
                    <p className="text-[9px] text-gray-400">{user.email}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p>Guest</p>
                <p className="text-xs text-white">Not logged in</p>
              </>
            )}
          </div>
        </div>
      </SidebarMenu>
    </SidebarGroup>
  );
}
