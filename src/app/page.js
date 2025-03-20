"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import DatasourcesPage from "@/app/datasources/page";
import LandingPage from "@/app/landing/page";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("landing"); // "landing" or "datasources"

  return (
    <>
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          variant={currentPage === "landing" ? "default" : "outline"}
          onClick={() => setCurrentPage("landing")}
        >
          Landing Page
        </Button>
        <Button
          variant={currentPage === "datasources" ? "default" : "outline"}
          onClick={() => setCurrentPage("datasources")}
        >
          Datasources
        </Button>
      </div>

      {currentPage === "landing" ? (
        <LandingPage />
      ) : (
        <>
          <Sidebar collapsed={sidebarCollapsed} />
          <DatasourcesPage
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={setSidebarCollapsed}
          />
        </>
      )}
    </>
  );
}