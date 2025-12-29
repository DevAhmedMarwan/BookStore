import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "@/config/firebase";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuthStore from "@/Store/useAuthStore";

const SignWithGoogle = () => {
  const [position, setPosition] = useState("bottom");
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const googleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
  
      useAuthStore.getState().setUser(result.user);
  
      console.log("تم تسجيل دخول جوجل بنجاح", result.user);
    } catch (error) {
      console.log(error);
    }
  };

  const facebookSignin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      console.log("تم تسجيل دخول فيسبوك بنجاح");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="!px-3 cursor-pointer">
            {user ? "Logout" : "Login"}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56 !p-3">
          <DropdownMenuRadioGroup
            value={position}
            onValueChange={setPosition}
            className="flex flex-col gap-2"
          >
            {!user ? (
              <>
                <div
                  onClick={googleSignin}
                  className="cursor-pointer w-full !p-0.5"
                >
                  Sign With Google
                </div>
                <DropdownMenuSeparator />
                <div
                  onClick={facebookSignin}
                  className="cursor-pointer w-full !p-0.5"
                >
                  Sign With Facebook
                </div>
                <DropdownMenuSeparator />
                <div className="w-full !p-0.5 cursor-pointer">
                  Login With Email
                </div>
                <DropdownMenuSeparator />
                <div className="w-full !p-0.5 cursor-pointer">
                  Register With Email
                </div>
              </>
            ) : (
              <>
                <div
                  onClick={logout}
                  className="w-full !p-0.5 cursor-pointer text-red-500"
                >
                  Log Out
                </div>
              </>
            )}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SignWithGoogle;
