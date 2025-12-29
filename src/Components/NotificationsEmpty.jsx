import React from "react";
import { RefreshCcwIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
const NotificationsEmpty = () => {
  return (
    <div>
      <Empty className="from-muted/50 to-background h-[700px] w-[600px] bg-gray-300">
        <EmptyHeader>
          <EmptyTitle>Ahmed Marwan</EmptyTitle>
          <EmptyDescription>
            FrontEnd Developer
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline" size="lg">
            <RefreshCcwIcon />
            Refresh
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  );
};

export default NotificationsEmpty;
