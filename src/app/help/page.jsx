import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"; // Importing Collapsible components from a UI library
import Navbar from "@/components/Navbar"; // Importing the Navbar component

export default function Component() {
  return (
    <main>
      {/* Main content area */}
      <Navbar className="w-full" />
      {/* Navbar component with full width */}
      <div className="space-y-8 w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6">
        {/* Container div with vertical spacing, full width, max width, and padding */}
        <div className="space-y-4">
          {/* Section with vertical spacing */}
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Help & Support</h1>
          {/* Main heading with text styles */}
          <p className="text-muted-foreground md:text-xl">
            {/* Paragraph with text style */}
            Find answers to your questions and get the most out of our app.
          </p>
        </div>
        <Collapsible className="space-y-4">
          {/* Collapsible section with vertical spacing */}
          <CollapsibleTrigger className="flex items-center justify-between w-full rounded-md bg-muted px-4 py-3 text-left text-lg font-medium transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring [&[data-state=open]>svg]:rotate-90">
            {/* Collapsible trigger with various styles and classes */}
            Getting Started
            <ChevronRightIcon className="h-5 w-5 transition-transform" />
            {/* Icon indicating the state of the collapsible */}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 px-4 pt-2 pb-4">
            {/* Collapsible content with vertical spacing and padding */}
            <div className="space-y-2">
              {/* Content section with vertical spacing */}
              <h3 className="text-xl font-semibold">Create an Account</h3>
              {/* Subheading with text styles */}
              <div className="space-y-2 text-muted-foreground">
                {/* Content area with vertical spacing and text style */}
                <p>
                  {/* Paragraph */}
                  To get started, you'll need to log into your account. Enter your username and password to get into the
                  dashboard.
                </p>
                <img src="/placeholder.svg" alt="Sign Up Screenshot" className="rounded-md" />
                {/* Image with a source, alt text, and rounded corners */}
              </div>
            </div>
            <div className="space-y-2">
              {/* Content section with vertical spacing */}
              <h3 className="text-xl font-semibold">Log In</h3>
              {/* Subheading with text styles */}
              <div className="space-y-2 text-muted-foreground">
                {/* Content area with vertical spacing and text style */}
                <p>
                  {/* Paragraph */}
                  Once you've logged onto your account you can start using the app and setting up your calendar and
                  projects.
                </p>
                <img src="/placeholder.svg" alt="Log In Screenshot" className="rounded-md" />
                {/* Image with a source, alt text, and rounded corners */}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="space-y-4">
          {/* Collapsible section with vertical spacing */}
          <CollapsibleTrigger className="flex items-center justify-between w-full rounded-md bg-muted px-4 py-3 text-left text-lg font-medium transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring [&[data-state=open]>svg]:rotate-90">
            {/* Collapsible trigger with various styles and classes */}
            Managing Your Projects
            <ChevronRightIcon className="h-5 w-5 transition-transform" />
            {/* Icon indicating the state of the collapsible */}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 px-4 pt-2 pb-4">
            {/* Collapsible content with vertical spacing and padding */}
            <div className="space-y-2">
              {/* Content section with vertical spacing */}
              <h3 className="text-xl font-semibold">ProjectsPage</h3>
              {/* Subheading with text styles */}
              <div className="space-y-2 text-muted-foreground">
                {/* Content area with vertical spacing and text style */}
                <p>
                  {/* Paragraph */}
                  By clicking on the projects tab in the navigation bar the user can go over to the projects page where
                  they can add their tasks and projects that they need to complete.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {/* Content section with vertical spacing */}
              <h3 className="text-xl font-semibold">Add Projects</h3>
              {/* Subheading with text styles */}
              <div className="space-y-2 text-muted-foreground">
                {/* Content area with vertical spacing and text style */}
                <p>
                  {/* Paragraph */}
                  To change add projects user can click on the 'New Project' button on the top right to add a project. Users
                  will then need to input a task name, description, and a due date to create the project.
                </p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="space-y-4">
          {/* Collapsible section with vertical spacing */}
          <CollapsibleTrigger className="flex items-center justify-between w-full rounded-md bg-muted px-4 py-3 text-left text-lg font-medium transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring [&[data-state=open]>svg]:rotate-90">
            {/* Collapsible trigger with various styles and classes */}
            Notes Section
            <ChevronRightIcon className="h-5 w-5 transition-transform" />
            {/* Icon indicating the state of the collapsible */}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 px-4 pt-2 pb-4">
            {/* Collapsible content with vertical spacing and padding */}
            <div className="space-y-2">
              {/* Content section with vertical spacing */}
              <h3 className="text-xl font-semibold">Note Taking</h3>
              {/* Subheading with text styles */}
              <div className="space-y-2 text-muted-foreground">
                {/* Content area with vertical spacing and text style */}
                <p>
                  {/* Paragraph */}
                  The user can make notes for their different subjects. The user can also export their notes and import
                  their notes using the buttons on the bottom right.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {/* Content section with vertical spacing */}
              <h3 className="text-xl font-semibold">Editing and Uploading Notes</h3>
              {/* Subheading with text styles */}
              <div className="space-y-2 text-muted-foreground">
                {/* Content area with vertical spacing and text style */}
                <p>
                  {/* Paragraph */}
                  Users can edit their notes on the right of the notes page by editing the content. Users can also upload their
                  own notes but importing the text file to the notes page using the import button.
                </p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible className="space-y-4">
          {/* Collapsible section with vertical spacing */}
          <CollapsibleTrigger className="flex items-center justify-between w-full rounded-md bg-muted px-4 py-3 text-left text-lg font-medium transition-colors hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring [&[data-state=open]>svg]:rotate-90">
            {/* Collapsible trigger with various styles and classes */}
            Managing your Calendar
            <ChevronRightIcon className="h-5 w-5 transition-transform" />
            {/* Icon indicating the state of the collapsible */}
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 px-4 pt-2 pb-4">
            {/* Collapsible content with vertical spacing and padding */}
            <div className="space-y-2">
              {/* Content section with vertical spacing */}
              <h3 className="text-xl font-semibold">Add Events to Your Calendar</h3>
              {/* Subheading with text styles */}
              <div className="space-y-2 text-muted-foreground">
                {/* Content area with vertical spacing and text style */}
                <p>
                  {/* Paragraph */}
                  You can add events to your calendar by pressing the plus button on the day you want to add events on. You
                  can switch between the day, week and month tabs of the calendar to view the different events the user has over
                  the course of different time periods.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {/* Content section with vertical spacing */}
              <h3 className="text-xl font-semibold">Importing and Exporting Text Files</h3>
              {/* Subheading with text styles */}
              <div className="space-y-2 text-muted-foreground">
                {/* Content area with vertical spacing and text style */}
                <p>
                  {/* Paragraph */}
                  The user can export their current calendar and write the data in their calendar onto a text file.
                  The user can then later import other calendars that have been exported onto a text file and display the events
                  that were on the text file in their own calendar.
                </p>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </main>
  );
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
      {/* SVG path for the right chevron icon */}
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CircleHelpIcon(props) {
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
      {/* SVG circle for the help icon */}
      <circle cx="12" cy="12" r="10" />
      {/* SVG path for the question mark */}
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      {/* SVG path for the dot */}
      <path d="M12 17h.01" />
    </svg>
  );
}
