
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-100 dark:bg-gray-800 px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Main header element with background colors for light and dark modes, padding, height, and flexbox properties for alignment */}

        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          {/* Link element that navigates to the home page (or current page) with flexbox properties for centering items and disabling prefetching */}

          <CalendarIcon className="h-6 w-6 text-blue-500" />
          {/* Icon element with specific height, width, and color */}

          <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-gray-50">Task Scheduler</span>
          {/* Span element for the application name with margin, font size, weight, and color for light and dark modes */}
        </Link>

        <Link href="/login">
          {/* Link element that navigates to the login page */}

          <Button className="hidden md:inline-flex">Get Started</Button>
          {/* Button element that is hidden on small screens and displayed as an inline-flex element on medium and larger screens */}
        </Link>

        <Sheet>
          {/* Sheet component (likely a custom or library component for a drawer or modal) */}

          <SheetTrigger asChild>
            {/* Component that triggers the opening of the Sheet, using its child element as the trigger */}

            <Button variant="outline" size="icon" className="md:hidden">
              {/* Button element with outline style, icon size, and hidden on medium and larger screens */}

              <MenuIcon className="h-6 w-6" />
              {/* Icon element for the menu with specific height and width */}

              <span className="sr-only">Toggle navigation menu</span>
              {/* Span element for screen readers only, providing accessible text */}
            </Button>
          </SheetTrigger>

          <SheetContent side="left">
            {/* Content of the Sheet that appears from the left side */}

            <div className="flex flex-col items-start gap-4 p-4">
              {/* Div element with flexbox properties for a column layout, starting items, gap between items, and padding */}

              <Link href="#" className="flex items-center justify-center" prefetch={false}>
                {/* Link element that navigates to the home page (or current page) with flexbox properties for centering items and disabling prefetching */}

                <CalendarIcon className="h-6 w-6 text-blue-500" />
                {/* Icon element with specific height, width, and color */}

                <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-gray-50">Task Scheduler</span>
                {/* Span element for the application name with margin, font size, weight, and color for light and dark modes */}
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          {/* Section element with full width and padding that varies based on screen size */}
          <div className="container mx-auto px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            {/* Container div centered horizontally with padding that varies by screen size, 
        displayed as a grid with a gap between items, 2 columns on large screens */}
            <div className="flex flex-col justify-center space-y-4">
              {/* Div with flexbox properties for column layout, centered content, and spacing between child elements */}
              <div className="space-y-2">
                {/* Div with spacing between child elements */}
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-gray-50">
                  {/* Heading element with text size and style that varies by screen size, and color that changes in dark mode */}
                  Stay on top of your tasks with our powerful app
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  {/* Paragraph element with maximum width, text color, and size that changes in dark mode */}
                  Easily schedule, manage, and stay on top of your tasks with our intuitive task scheduling and reminder app.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {/* Div with flexbox properties for column layout that switches to row layout on small screens, with gap between child elements */}
                <Link
                  href="/login"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950 disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  {/* Link element that navigates to the login page, styled as a button with various styles and states */}
                  Get Started
                </Link>
              </div>
            </div>
            <div className="grid gap-4 items-center">
              {/* Div displayed as a grid with gap between items, centered items */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800">
                {/* Div with background color, padding, rounded corners, shadow, and color that changes in dark mode */}
                <div className="flex items-center gap-4">
                  {/* Div with flexbox properties for row layout and gap between items */}
                  <CalendarIcon className="h-8 w-8 text-blue-500" />
                  {/* Calendar icon with specific height, width, and color */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Scheduling</h3>
                  {/* Heading element with text size, font weight, and color that changes in dark mode */}
                </div>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {/* Paragraph element with margin-top, text color, and color that changes in dark mode */}
                  Easily schedule tasks and set reminders to stay on top of your to-do list.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800">
                {/* Another div for a feature with similar styling */}
                <div className="flex items-center gap-4">
                  {/* Div with flexbox properties for row layout and gap between items */}
                  <SignalIcon className="h-8 w-8 text-blue-500" />
                  {/* Signal icon with specific height, width, and color */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Reminders</h3>
                  {/* Heading element with text size, font weight, and color that changes in dark mode */}
                </div>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {/* Paragraph element with margin-top, text color, and color that changes in dark mode */}
                  Get timely reminders to ensure you never miss a deadline or important task.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800">
                {/* Another div for a feature with similar styling */}
                <div className="flex items-center gap-4">
                  {/* Div with flexbox properties for row layout and gap between items */}
                  <CombineIcon className="h-8 w-8 text-blue-500" />
                  {/* Combine icon with specific height, width, and color */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Projects</h3>
                  {/* Heading element with text size, font weight, and color that changes in dark mode */}
                </div>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {/* Paragraph element with margin-top, text color, and color that changes in dark mode */}
                  Easily make projects and keep track of your progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          {/* Section element with full width, padding that varies by screen size, background color for light and dark modes */}
          <div className="container mx-auto px-4 md:px-6">
            {/* Container div centered horizontally with padding that varies by screen size */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              {/* Div with flexbox properties for column layout, centered items and content, spacing between elements, and centered text */}
              <div className="space-y-2">
                {/* Div with spacing between child elements */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-50">
                  {/* Heading element with text size and style that varies by screen size, and color that changes in dark mode */}
                  Key Features
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {/* Paragraph element with maximum width, text color, and size that changes in dark mode */}
                  Our task scheduling and reminder app offers a range of powerful features to help you stay organized and on top of your tasks.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {/* Div displayed as a grid with gap between items, centered horizontally, with maximum width and padding, 3 columns on large screens */}
              <div className="grid gap-1">
                {/* Div displayed as a grid with gap between items */}
                <div className="flex items-center gap-2">
                  {/* Div with flexbox properties for row layout and gap between items */}
                  <CalendarIcon className="h-6 w-6 text-blue-500" />
                  {/* Calendar icon with specific height, width, and color */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Scheduling</h3>
                  {/* Heading element with text size, font weight, and color that changes in dark mode */}
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  {/* Paragraph element with text color that changes in dark mode */}
                  Easily schedule tasks and stay on top of your to-do list.
                </p>
              </div>
              <div className="grid gap-1">
                {/* Another div for a feature with similar styling */}
                <div className="flex items-center gap-2">
                  {/* Div with flexbox properties for row layout and gap between items */}
                  <SignalIcon className="h-6 w-6 text-blue-500" />
                  {/* Signal icon with specific height, width, and color */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Progess Tracking</h3>
                  {/* Heading element with text size, font weight, and color that changes in dark mode */}
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  {/* Paragraph element with text color that changes in dark mode */}
                  Track your progress for each task and project.
                </p>
              </div>
              <div className="grid gap-1">
                {/* Another div for a feature with similar styling */}
                <div className="flex items-center gap-2">
                  {/* Div with flexbox properties for row layout and gap between items */}
                  <CombineIcon className="h-6 w-6 text-blue-500" />
                  {/* Combine icon with specific height, width, and color */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">Projects</h3>
                  {/* Heading element with text size, font weight, and color that changes in dark mode */}
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  {/* Paragraph element with text color that changes in dark mode */}
                  Make projects and set the tasks needed to complete the projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          {/* Section element with full width, padding that varies by screen size */}
          <div className="container mx-auto px-4 md:px-6">
            {/* Container div centered horizontally with padding that varies by screen size */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              {/* Div with flexbox properties for column layout, centered items and content, spacing between elements, and centered text */}
              <div className="space-y-2">
                {/* Div with spacing between child elements */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-50">
                  {/* Heading element with text size and style that varies by screen size, and color that changes in dark mode */}
                  What Our Users Say
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {/* Paragraph element with maximum width, text color, and size that changes in dark mode */}
                  Hear from our satisfied customers about how our task scheduling and reminder app has helped them stay organized and productive.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {/* Div displayed as a grid with gap between items, centered horizontally, with maximum width and padding, 2 columns on large screens */}
              <div className="grid gap-4">
                {/* Div displayed as a grid with gap between items */}
                <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-950">
                  {/* Div with background color, padding, rounded corners, shadow, and color that changes in dark mode */}
                  <div className="flex items-start gap-4">
                    {/* Div with flexbox properties for row layout and gap between items */}
                    <div className="rounded-full w-10 h-10 bg-blue-500 text-white flex items-center justify-center">
                      {/* Div with specific size, background color, text color, and flexbox properties for centered content, rounded to a circle */}
                      JD
                      {/* Initials inside the div */}
                    </div>
                    <div className="grid gap-1">
                      {/* Div displayed as a grid with gap between items */}
                      <div className="font-bold text-gray-900 dark:text-gray-50">John Mathew</div>
                      {/* Div with font weight and text color that changes in dark mode */}
                      <div className="text-gray-500 dark:text-gray-400">Student</div>
                      {/* Div with text color that changes in dark mode */}
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    {/* Paragraph element with margin-top, text color, and color that changes in dark mode */}
                    "This app has allowed me reduce the time i waste on unneccessary projects and tasks. By using the calender and project pages, I have been able to manage my taska and assessments."
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-950">
                  {/* Another div for a testimonial with similar styling */}
                  <div className="flex items-start gap-4">
                    {/* Div with flexbox properties for row layout and gap between items */}
                    <div className="rounded-full w-10 h-10 bg-blue-500 text-white flex items-center justify-center">
                      {/* Div with specific size, background color, text color, and flexbox properties for centered content, rounded to a circle */}
                      SA
                      {/* Initials inside the div */}
                    </div>
                    <div className="grid gap-1">
                      {/* Div displayed as a grid with gap between items */}
                      <div className="font-bold text-gray-900 dark:text-gray-50">Anothony Brown</div>
                      {/* Div with font weight and text color that changes in dark mode */}
                      <div className="text-gray-500 dark:text-gray-400">Student</div>
                      {/* Div with text color that changes in dark mode */}
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    {/* Paragraph element with margin-top, text color, and color that changes in dark mode */}
                    "This is an amazing app! It has saved me so much of my time and has improved my productivity. Through the numerous features that are built in into the app i have been able to excel in my learning."
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                {/* Another div for a set of testimonials with similar styling */}
                <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-950">
                  {/* Another div for a testimonial with similar styling */}
                  <div className="flex items-start gap-4">
                    {/* Div with flexbox properties for row layout and gap between items */}
                    <div className="rounded-full w-10 h-10 bg-blue-500 text-white flex items-center justify-center">
                      {/* Div with specific size, background color, text color, and flexbox properties for centered content, rounded to a circle */}
                      MR
                      {/* Initials inside the div */}
                    </div>
                    <div className="grid gap-1">
                      {/* Div displayed as a grid with gap between items */}
                      <div className="font-bold text-gray-900 dark:text-gray-50">Rigel Rivamonte</div>
                      {/* Div with font weight and text color that changes in dark mode */}
                      <div className="text-gray-500 dark:text-gray-400">Student</div>
                      {/* Div with text color that changes in dark mode */}
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    {/* Paragraph element with margin-top, text color, and color that changes in dark mode */}
                    "This app has saved me from wasting time with keeping track on my homework and assessment tasks and has allowed me to spend my time more efficiently with the built in calendar this app provides."
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-950">
                  {/* Another div for a testimonial with similar styling */}
                  <div className="flex items-start gap-4">
                    {/* Div with flexbox properties for row layout and gap between items */}
                    <div className="rounded-full w-10 h-10 bg-blue-500 text-white flex items-center justify-center">
                      {/* Div with specific size, background color, text color, and flexbox properties for centered content, rounded to a circle */}
                      EW
                      {/* Initials inside the div */}
                    </div>
                    <div className="grid gap-1">
                      {/* Div displayed as a grid with gap between items */}
                      <div className="font-bold text-gray-900 dark:text-gray-50">Timothy Su</div>
                      {/* Div with font weight and text color that changes in dark mode */}
                      <div className="text-gray-500 dark:text-gray-400">Student</div>
                      {/* Div with text color that changes in dark mode */}
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">
                    {/* Paragraph element with margin-top, text color, and color that changes in dark mode */}
                    "As a busy student, this app has allowed me to schedule my assessment taks and always stay on top of my work. This app has made planning my study sessions and projects much easier and simpler."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

// The code below is for the icons that are needed for the landing page (used in the code above)

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


function CombineIcon(props) {
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
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  )
}


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SignalIcon(props) {
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
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  )
}