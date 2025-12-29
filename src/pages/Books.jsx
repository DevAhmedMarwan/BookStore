import React, { useEffect } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import GetDataPhoto from "@/Components/GetDataPhoto";
import Loading from "@/Components/Loading";
import useBooksStore from "@/Store/Books";
import ButtonCategories from "@/Components/ButtonCategories";
import useViewToggleStore from "@/Store/GridAndList";
import Feedback from "@/Components/Feedback";
const Books = () => {
  const { data, loading, fetchBooks, nextPage } = useBooksStore();
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);
  const { view } = useViewToggleStore();
  const handleScroll = () => {
    if (
      !loading &&
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
    ) {
      nextPage();
      fetchBooks();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="container mx-auto px-4">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 !pl-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <ButtonCategories />
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div
            className={`!m-4 grid gap-3
              ${view === "grid" ? "grid-cols-4" : "grid-cols-1 "}`}
          >
            {data.map((item, index) => {
              return <GetDataPhoto item={item} index={index} key={item.id} />;
            })}
          </div>
          <div>
            <Feedback />
          </div>
          {/* -------------------------------------- */}
          <Loading loading={loading} />
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Books;
