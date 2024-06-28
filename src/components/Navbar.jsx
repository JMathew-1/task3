'use client'
// Importing useState hook from React
import { useState } from "react"
// Importing React for JSX rendering
import React from 'react'
// Importing Link component from Next.js
import Link from "next/link"
// Importing Button component from custom UI components
import { Button } from "@/components/ui/button"

// Functional component Navbar
const Navbar = () => {
  // State variable for active navigation link
  const [activeNavLink, setActiveNavLink] = useState(null);

  return (
    <>
      {/* Header section with flex layout, centered items */}
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        {/* Dashboard Link with icon and text */}
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4" prefetch={false}>
          {/* Custom icon component */}
          <LayoutGridIcon className="w-6 h-6" />
          <span className="sr-only">Dashboard</span>
        </Link>
        {/* Navigation links container */}
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          {/* Dashboard Link */}
          <Link
            href="/dashboard"
            // Conditional styling for active link
            className={`font-bold transition-all duration-100 ease-in-out ${activeNavLink === "dashboard"
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground hover:text-primary"
              }`}
            onClick={() => setActiveNavLink("dashboard")} // Click handler to set active link
            prefetch={false}
          >
            Dashboard
          </Link>

          {/* Projects Link */}
          <Link
            href="/projects"
            // Conditional styling for active link
            className={`font-bold transition-all duration-100 ease-in-out ${activeNavLink === "projects"
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground hover:text-primary"
              }`}
            onClick={() => setActiveNavLink("projects")} // Click handler to set active link
            prefetch={false}
          >
            Projects
          </Link>

          {/* Notes Link */}
          <Link
            href="/notes"
            // Conditional styling for active link
            className={`font-bold transition-all duration-100 ease-in-out ${activeNavLink === "notes"
              ? "border-b-2 border-primary font-bold text-primary"
              : "text-muted-foreground hover:font-bold hover:text-primary"
              }`}
            onClick={() => setActiveNavLink("notes")} // Click handler to set active link
            prefetch={false}
          >
            Notes
          </Link>

          {/* Calendar Link */}
          <Link
            href="/calendar"
            // Conditional styling for active link
            className={`font-bold transition-all duration-100 ease-in-out ${activeNavLink === "calendar"
              ? "border-b-2 border-primary font-bold text-primary"
              : "text-muted-foreground hover:font-bold hover:text-primary"
              }`}
            onClick={() => setActiveNavLink("calendar")} // Click handler to set active link
            prefetch={false}
          >
            Calendar
          </Link>

          {/* Help Link */}
          <Link
            href="/help"
            // Conditional styling for active link
            className={`font-bold transition-all duration-100 ease-in-out ${activeNavLink === "help"
              ? "border-b-2 border-primary font-bold text-primary"
              : "text-muted-foreground hover:font-bold hover:text-primary"
              }`}
            onClick={() => setActiveNavLink("help")} // Click handler to set active link
            prefetch={false}
          >
            Help
          </Link>
        </nav>

        {/* Logout Link */}
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Link
            href="/login"
            className="ml-auto">
            Logout
          </Link>
        </div>
      </header>
    </>
  )
}

// Custom icon component for LayoutGrid
function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Grid layout rectangles */}
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}

// Exporting Navbar component so that is can be easily used in other pages of the application. 
export default Navbar
