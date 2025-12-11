import React, { useEffect, useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import axios from "axios";
import loadingJson from "@/assets/Loading/circle-loader.json";
import Lottie from "lottie-react";
const Youtube = () => {
  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handle = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:programming&Filtering=free-ebooks&start_Index=${pages}&maxResults=10`
        );

        if (res.status === 200) {
          setData((prev) => [...prev, ...res.data.items]);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    handle();
  }, [pages]);

  const handleScroll = () => {
    if (
      !loading &&
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
    ) {
      setPages((prevPage) => prevPage + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      <div className="flex gap-4">
                        <button>ahmed</button>
                        <button>ahmed</button>
                        <button>ahmed</button>
                      </div>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem></BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="!m-4 grid grid-cols-3 gap-3">
            {data.map((item) => {
              return (
                <div className="" key={item.id}>
                  <div className="">
                    <div className="">
                      <img
                        className="w-[455px] h-[225px] border-2 rounded-3xl"
                        src={
                          item.volumeInfo.imageLinks?.thumbnail
                            ? item.volumeInfo.imageLinks?.thumbnail
                            : "public/img/IMG-20250919-WA0025.jpg"
                        }
                        alt=""
                      />
                    </div>
                    <div className="flex items-center gap-3 !p-3">
                      <div>
                        <img
                          className="w-12 h-12 rounded-full"
                          src={item.volumeInfo.imageLinks?.smallThumbnail}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <h1>{item.volumeInfo.title}</h1>
                        <h2 className="">{item.volumeInfo.authors}</h2>
                      </div>
                    </div>
                    <p className="line-clamp-2">
                      {item.volumeInfo.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {loading && (
            <div className="flex justify-center my-6">
              <Lottie
                animationData={loadingJson}
                loop
                style={{ width: 120, height: 120 }}
              />
            </div>
          )}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Youtube;
