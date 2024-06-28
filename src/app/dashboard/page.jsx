"use client" // Indicates that the following code should be executed on the client side

import { useState } from "react" // Importing the useState hook from React for state management
import Link from "next/link" // Importing the Link component from Next.js for client-side navigation
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card" // Importing Card-related components from a UI library
import { Calendar } from "@/components/ui/calendar" // Importing the Calendar component from a UI library
import Navbar from "@/components/Navbar" // Importing the Navbar component

export default function Component() {
  // Defining a functional component called Component
  const [activeNavLink, setActiveNavLink] = useState("dashboard")
  // Declaring a state variable 'activeNavLink' with an initial value of "dashboard" and a function 'setActiveNavLink' to update it

  return (
    // Returning the JSX that defines the component's UI
    <div className="flex flex-col w-full min-h-screen">
      {/* Main container with flexbox styling for layout */}
      <Navbar />
      {/* Including the Navbar component */}
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-muted/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        {/* Main content area with flexbox styling, background color, padding, and responsive gap */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Grid container for the cards with responsive column layout */}
          <Card className="bg-blue-100 text-blue-800">
            {/* Card component with background and text color styling */}
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              {/* Card header with flexbox layout */}
              <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
              {/* Card title with text styling */}
              <ClipboardIcon className="w-4 h-4 text-blue-500" />
              {/* Clipboard icon with size and color styling */}
            </CardHeader>
            <CardContent>
              {/* Card content section */}
              <div className="text-2xl font-bold">142</div>
              {/* Task count with text styling */}
              <p className="text-xs text-blue-600">+15 from last week</p>
              {/* Additional info with text styling */}
            </CardContent>
          </Card>
          <Card className="bg-blue-100 text-blue-800">
            {/* Card component with blue background and dark blue text color */}
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              {/* Card header with flexbox properties for row layout, centered items, space between elements, and padding-bottom */}
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              {/* Card title with small text size and medium font weight */}
              <CalendarIcon className="w-4 h-4 text-blue-500" />
              {/* Calendar icon with specific width, height, and blue color */}
            </CardHeader>
            <CardContent>
              {/* Card content section */}
              <div className="text-2xl font-bold">8</div>
              {/* Div with large bold text showing the number 8 */}
              <p className="text-xs text-blue-600">+2 from last week</p>
              {/* Paragraph with extra small text size and blue color, showing the increase from last week */}
            </CardContent>
          </Card>

          <Card className="bg-blue-100 text-blue-800">
            {/* Another Card component with blue background and dark blue text color */}
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              {/* Card header with flexbox properties for row layout, centered items, space between elements, and padding-bottom */}
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              {/* Card title with small text size and medium font weight */}
              <BriefcaseIcon className="w-4 h-4 text-blue-500" />
              {/* Briefcase icon with specific width, height, and blue color */}
            </CardHeader>
            <CardContent>
              {/* Card content section */}
              <div className="text-2xl font-bold">12</div>
              {/* Div with large bold text showing the number 12 */}
              <p className="text-xs text-blue-600">+1 from last week</p>
              {/* Paragraph with extra small text size and blue color, showing the increase from last week */}
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            {/* Card component container */}
            <CardHeader>
              {/* Header section of the card */}
              <CardTitle>Projects</CardTitle>
              {/* Title element with the text "Projects" */}
            </CardHeader>
            <CardContent>
              {/* Content section of the card */}
              <div className="grid gap-4">
                {/* Grid container with a gap of 4 units between items */}
                <Link
                  href="#"
                  className="flex items-center justify-between rounded-md bg-background p-4 transition-colors duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  {/* Link component with various classes for styling, hover, focus, and disabled states */}
                  <div className="flex items-center gap-4">
                    {/* Flex container with centered items and a gap of 4 units */}
                    <BriefcaseIcon className="w-6 h-6" />
                    {/* Briefcase icon with width and height of 6 units */}
                    <div>
                      {/* Container for the project details */}
                      <div className="font-medium">Software Project</div>
                      {/* Medium weight font for the project name */}
                      <div className="text-sm text-muted-foreground">Due in 2 weeks</div>
                      {/* Small text for the due date with a muted color */}
                    </div>
                  </div>
                  <ChevronRightIcon className="w-4 h-4" />
                  {/* Chevron right icon with width and height of 4 units */}
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between rounded-md bg-background p-4 transition-colors duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  {/* Another Link component with the same styling as above */}
                  <div className="flex items-center gap-4">
                    {/* Flex container with centered items and a gap of 4 units */}
                    <BriefcaseIcon className="w-6 h-6" />
                    {/* Briefcase icon with width and height of 6 units */}
                    <div>
                      {/* Container for the project details */}
                      <div className="font-medium">Economics Essay</div>
                      {/* Medium weight font for the project name */}
                      <div className="text-sm text-muted-foreground">Due in 1 month</div>
                      {/* Small text for the due date with a muted color */}
                    </div>
                  </div>
                  <ChevronRightIcon className="w-4 h-4" />
                  {/* Chevron right icon with width and height of 4 units */}
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between rounded-md bg-background p-4 transition-colors duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  {/* Another Link component with the same styling as above */}
                  <div className="flex items-center gap-4">
                    {/* Flex container with centered items and a gap of 4 units */}
                    <BriefcaseIcon className="w-6 h-6" />
                    {/* Briefcase icon with width and height of 6 units */}
                    <div>
                      {/* Container for the project details */}
                      <div className="font-medium">Coding Project</div>
                      {/* Medium weight font for the project name */}
                      <div className="text-sm text-muted-foreground">Due in 3 weeks</div>
                      {/* Small text for the due date with a muted color */}
                    </div>
                  </div>
                  <ChevronRightIcon className="w-4 h-4" />
                  {/* Chevron right icon with width and height of 4 units */}
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Link
                  href="#"
                  className="flex items-center justify-between rounded-md bg-background p-4 transition-colors duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="flex items-center gap-4">
                    <StickyNoteIcon className="w-6 h-6" />
                    <div>
                      <div className="font-medium">Economics Notes</div>
                      <div className="text-sm text-muted-foreground">Updated 2 hours ago</div>
                    </div>
                  </div>
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between rounded-md bg-background p-4 transition-colors duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="flex items-center gap-4">
                    <StickyNoteIcon className="w-6 h-6" />
                    <div>
                      <div className="font-medium">Business Studies Notes</div>
                      <div className="text-sm text-muted-foreground">Updated 1 day ago</div>
                    </div>
                  </div>
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-between rounded-md bg-background p-4 transition-colors duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  <div className="flex items-center gap-4">
                    <StickyNoteIcon className="w-6 h-6" />
                    <div>
                      <div className="font-medium">Math Notes</div>
                      <div className="text-sm text-muted-foreground">Updated 3 days ago</div>
                    </div>
                  </div>
                  <ChevronRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                numberOfMonths={1}
                mode="single"
                className="p-0 [&_td]:w-10 [&_td]:h-10 [&_th]:w-10 [&_[name=day]]:w-10 [&_[name=day]]:h-10 [&>div]:space-x-0 [&>div]:gap-6"
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}



// The code below is for making the icons and using them in the dashboard

function BriefcaseIcon(props) {
  // Defining the BriefcaseIcon functional component with props
  return (
    <svg
      {...props} // Spreading the props onto the SVG element
      xmlns="http://www.w3.org/2000/svg" // Setting the XML namespace
      width="24" // Setting the width of the SVG
      height="24" // Setting the height of the SVG
      viewBox="0 0 24 24" // Setting the viewbox of the SVG
      fill="none" // Removing any fill color
      stroke="currentColor" // Setting the stroke color to the current text color
      strokeWidth="2" // Setting the stroke width
      strokeLinecap="round" // Setting the stroke linecap style
      strokeLinejoin="round" // Setting the stroke linejoin style
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}

function StickyNoteIcon(props) {
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
      <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
      <path d="M15 3v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}
