import React from "react";
import { Metadata } from "next";
import metadataJson from "../metadata/metadata.json";
import { Sidebar } from "../components/widgets/sidebar";

export const metadata: Metadata = {
  title: metadataJson.pages.home.title,
  description: metadataJson.pages.home.description,
  authors: metadataJson.authors,
};

const page = () => {
  return (
    <div id="home_container" className="w-full h-full flex">
      {/* <--> */}

      {/*! Sidebar */}
      <div id="sidebar_section" className="w-1/5 bg-red-50">
        <Sidebar  />
      </div>
      
      {/*! Content */}
      <div id="content_section" className="w-4/5 bg-blue-50">
        other
      </div>

      {/* <--> */}
    </div>
  );
};

export default page;
