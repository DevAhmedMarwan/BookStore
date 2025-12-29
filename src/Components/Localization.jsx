import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const Localization = () => {
  const [position, setPosition] = useState("bottom");

  const { i18n } = useTranslation();
  return (
    <div className="flex gap-3 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className={"!px-3 cursor-pointer"}>
            English
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 !p-2.5">
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <div className="!pb-1">
              <button className="cursor-pointer w-full !p-0.5 text-start" onClick={() => i18n.changeLanguage("ar")}>Arabic</button>
            </div>
            <DropdownMenuSeparator />
            <div className="!pt-1">
              <button className="cursor-pointer w-full !p-0.5 text-start" onClick={() => i18n.changeLanguage("en")}>English</button>
            </div>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Localization;
