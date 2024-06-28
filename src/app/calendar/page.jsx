'use client' // Indicates that the following code should be executed on the client side

// Import React hooks for managing state and creating mutable references
import { useState, useRef } from "react";

// Import a Button component from the "@/components/ui/button" directory
import { Button } from "@/components/ui/button";

// Import Tabs, TabsList, and TabsTrigger components from "@/components/ui/tabs"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import Dialog and DialogContent components from "@/components/ui/dialog"
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import Input component from "@/components/ui/input"
import { Input } from "@/components/ui/input";

// Import DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
// DropdownMenuLabel, DropdownMenuSeparator, and DropdownMenuItem
// components from "@/components/ui/dropdown-menu"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";

// Import Navbar component from "@/components/Navbar"
import Navbar from "@/components/Navbar";

// Import specific icons (ChevronLeftIcon, ChevronRightIcon, FilePenIcon,
// PlusIcon, TrashIcon, XIcon) from "@/components/CalendarIcons.jsx"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FilePenIcon,
  PlusIcon,
  TrashIcon,
  XIcon,
} from "@/components/CalendarIcons";




export default function Component() {
  // Create a reference to a file input element
  const fileInputRef = useRef(null);

  // State for managing the current date, initialized with the current date and time
  const [currentDate, setCurrentDate] = useState(new Date());

  // State for managing tasks, initialized with an array of task objects
  const [tasks, setTasks] = useState([
    { id: 1, title: "Finish quarterly report", date: new Date(2024, 5, 15), time: "17:00", category: "work", group: "Homework" },
    { id: 2, title: "Finish Homework", date: new Date(2024, 5, 18), time: "10:00", category: "personal", group: "Projects" },
    { id: 3, title: "School Interview", date: new Date(2024, 5, 22), time: "14:30", category: "personal", group: "Meetings" },
    { id: 4, title: "Economics Assessment", date: new Date(2024, 5, 25), time: "09:00", category: "work", group: "Assessments" },
  ]);

  // State for managing the task currently being edited, initially set to null
  const [editingTask, setEditingTask] = useState(null);

  // State for managing the selected date, initially set to null
  const [selectedDate, setSelectedDate] = useState(null);

  // State for managing the selected task group, initially set to null
  const [selectedTaskGroup, setSelectedTaskGroup] = useState(null);

  // State for managing the view mode (e.g., "month", "week", "day"), initially set to "month"
  const [viewMode, setViewMode] = useState("month");




  // Function to set the current date to the previous month's first day
  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Function to set the current date to the next month's first day
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Function to add a new task to the tasks state and set it as the editing task
  const handleAddTask = (task) => {
    setTasks([...tasks, task]); // Add the new task to the tasks array
    setEditingTask(task); // Set the newly added task as the editing task
  };

  // Function to set the editing task
  const handleEditTask = (task) => {
    setEditingTask(task); // Set the task to be edited
  };

  // Function to update an existing task in the tasks state and reset editing task to null
  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))); // Update the task in the tasks array
    setEditingTask(null); // Reset editing task to null after update
  };

  // Function to delete a task from the tasks state and reset editing task to null
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId)); // Filter out the task with the specified taskId
    setEditingTask(null); // Reset editing task to null after deletion
  };

  // Function to get the number of days in a specified month and year
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate(); // Return the number of days in the month
  };

  // Function to get the weekday (0 for Sunday, 1 for Monday, etc.) of a specified date
  const getWeekday = (year, month, day) => {
    return new Date(year, month, day).getDay(); // Return the weekday index of the date
  };

  // Function to handle click events on dates
  const handleDateClick = (date) => {
    setSelectedDate(date); // Set the selected date
  };

  // Function to handle click events on task groups
  const handleTaskGroupClick = (group) => {
    setSelectedTaskGroup(group); // Set the selected task group
  };

  // Function to handle changes in view mode (e.g., "month", "week", "day")
  const handleViewModeChange = (mode) => {
    setViewMode(mode); // Set the view mode
  };


  // Object mapping task groups to corresponding background and text colors
  const groupColors = {
    Homework: "bg-blue-500 text-white",
    Projects: "bg-green-500 text-white",
    Meetings: "bg-yellow-500 text-white",
    Assessments: "bg-red-500 text-white",
    other: "bg-gray-500 text-white",
  };

  // Function to get an array of dates representing the current week based on a given date
  const getWeekDates = (date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay()); // Set startOfWeek to the first day (Sunday) of the current week
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(startOfWeek);
      d.setDate(startOfWeek.getDate() + i); // Increment each day of the week
      return d;
    });
  };

  // Function to handle exporting tasks to a text file
  const handleExportProjects = () => {
    const fileContent = tasks
      .map(task => `${task.title} - ${task.date.toDateString()} - ${task.time} - ${task.group}`)
      .join('\n'); // Concatenate task details into lines separated by newline characters
    const blob = new Blob([fileContent], { type: 'text/plain' }); // Create a Blob with the file content
    const link = document.createElement('a'); // Create a new link element
    link.href = URL.createObjectURL(blob); // Set the link's href to the URL of the Blob
    link.download = 'calendarlist.txt'; // Set the filename for download
    document.body.appendChild(link); // Append the link to the DOM
    link.click(); // Simulate a click on the link to trigger download
    document.body.removeChild(link); // Remove the link from the DOM after download
  };

  // Function to handle triggering file input click event for importing tasks
  const handleImportTasks = () => {
    fileInputRef.current.click(); // Programmatically click on the hidden file input element
  };

  // Function to handle file change event when importing tasks
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (!file) return;

    const reader = new FileReader(); // Create a new FileReader instance
    reader.onload = (e) => {
      const content = e.target.result; // Get the content of the file
      const lines = content.split('\n'); // Split content into lines based on newline characters
      const importedTasks = lines.map((line, index) => {
        const [title, dateString, time, group] = line.split(' - '); // Split each line into task details
        const date = new Date(dateString); // Convert dateString to a Date object
        return { id: index + 1, title, date, time, category: "work", group: group || "other" }; // Return a task object
      });
      setTasks(importedTasks); // Update tasks state with imported tasks
    };
    reader.readAsText(file); // Read the selected file as text
  };



  return (
    <div className="flex flex-col h-full">
      {/* Render the Navbar component */}
      <Navbar />

      {/* Header section with background color, text color, padding, flex layout, and alignment */}
      <header className="bg-[#000000] text-white p-4 flex justify-between items-center">

        {/* Display current month and year */}
        <div className="text-xl font-bold">
          {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
        </div>

        {/* Navigation buttons for previous and next month */}
        <div className="flex gap-2">
          {/* Button to navigate to the previous month */}
          <Button variant="ghost" onClick={handlePreviousMonth}>
            <ChevronLeftIcon className="w-5 h-5" />
          </Button>

          {/* Button to navigate to the next month */}
          <Button variant="ghost" onClick={handleNextMonth}>
            <ChevronRightIcon className="w-5 h-5" />
          </Button>

          {/* Tabs component for switching between view modes (month, week, day) */}
          <Tabs value={viewMode} onValueChange={handleViewModeChange} className="ml-4">
            <TabsList>
              {/* Trigger for switching to Month view */}
              <TabsTrigger value="month">Month</TabsTrigger>

              {/* Trigger for switching to Week view */}
              <TabsTrigger value="week">Week</TabsTrigger>

              {/* Trigger for switching to Day view */}
              <TabsTrigger value="day">Day</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </header>

      {/* Main content area with overflow handling, padding, and flex-1 for filling remaining space */}
      <div className="flex-1 overflow-auto p-4">

        {/* Conditionally render content based on the selected view mode */}
        {viewMode === "month" && (
          <table className="w-full">
            <thead>
              <tr>
                {/* Table headers for days of the week */}
                <th className="text-left p-2">Sun</th>
                <th className="text-left p-2">Mon</th>
                <th className="text-left p-2">Tue</th>
                <th className="text-left p-2">Wed</th>
                <th className="text-left p-2">Thu</th>
                <th className="text-left p-2">Fri</th>
                <th className="text-left p-2">Sat</th>
              </tr>
            </thead>
            <tbody>
              {/* Render rows for each week in the current month */}
              {Array.from({
                length: Math.ceil(
                  (getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth()) +
                    getWeekday(currentDate.getFullYear(), currentDate.getMonth(), 1)) /
                  7
                ),
              }).map((_, week) => (
                <tr key={week}>
                  {/* Render cells for each day in the current week */}
                  {Array.from({ length: 7 }).map((_, day) => {
                    // Calculate date for the current cell
                    const date = new Date(
                      currentDate.getFullYear(),
                      currentDate.getMonth(),
                      week * 7 + day + 1 - getWeekday(currentDate.getFullYear(), currentDate.getMonth(), 1)
                    );

                    // Filter tasks for the current day
                    const tasksForDay = tasks.filter((task) => task.date.toDateString() === date.toDateString());

                    // Render table cell with conditional styling and click handler for date selection
                    return (
                      <td
                        key={day}
                        className={`border p-2 cursor-pointer ${date.toDateString() === selectedDate?.toDateString() ? "bg-gray-100 dark:bg-gray-800" : ""
                          } hover:bg-gray-200 dark:hover:bg-gray-700`}
                        onClick={() => handleDateClick(date)}
                      >
                        {/* Content within each cell */}
                        <div className="flex justify-between items-center">
                          {/* Display day number with conditional styling based on month */}
                          <div
                            className={`text-sm font-bold ${date.getMonth() !== currentDate.getMonth() ? "text-gray-400" : ""
                              }`}
                          >
                            {date.getDate()}
                          </div>

                          {/* Display tasks for the day */}
                          <div className="flex gap-1">
                            {tasksForDay.map((task) => (
                              <div
                                key={task.id}
                                className={`px-2 py-1 rounded-md text-white text-xs cursor-pointer ${groupColors[task.group]}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEditTask(task);
                                }}
                              >
                                {task.title} - {task.time}
                              </div>
                            ))}

                            {/* Button to add a new task for the day */}
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddTask({
                                  id: tasks.length + 1,
                                  title: "",
                                  date,
                                  time: "00:00",
                                  category: "work",
                                  group: "other",
                                });
                              }}
                            >
                              <PlusIcon className="w-5 h-5" />
                            </Button>
                          </div>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Conditionally render content for the week view */}
        {viewMode === "week" && (
          <div className="grid grid-cols-7 gap-4">
            {/* Render cells for each day in the current week */}
            {getWeekDates(currentDate).map((date, index) => {
              // Filter tasks for the current day
              const tasksForDay = tasks.filter((task) => task.date.toDateString() === date.toDateString());

              // Render a cell for each day with tasks and add task button
              return (
                <div key={index} className="border p-4">
                  {/* Display date and add task button */}
                  <div className="flex justify-between items-center">
                    <div className="font-bold">{date.toDateString()}</div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddTask({
                          id: tasks.length + 1,
                          title: "",
                          date,
                          time: "00:00",
                          category: "work",
                          group: "other",
                        });
                      }}
                    >
                      <PlusIcon className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Display tasks for the day */}
                  <div className="space-y-2">
                    {tasksForDay.map((task) => (
                      <div
                        key={task.id}
                        className={`p-2 rounded-md text-white ${groupColors[task.group]}`}
                        onClick={() => handleEditTask(task)}
                      >
                        {task.title} - {task.time}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Conditionally render content for the day view */}
        {viewMode === "day" && (
          <div className="border p-4">
            {/* Display date and add task button */}
            <div className="flex justify-between items-center">
              <div className="font-bold">{currentDate.toDateString()}</div>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddTask({
                    id: tasks.length + 1,
                    title: "",
                    date: currentDate,
                    time: "00:00",
                    category: "work",
                    group: "other",
                  });
                }}
              >
                <PlusIcon className="w-5 h-5" />
              </Button>
            </div>

            {/* Display tasks for the day */}
            <div className="space-y-2">
              {tasks
                .filter((task) => task.date.toDateString() === currentDate.toDateString())
                .map((task) => (
                  <div
                    key={task.id}
                    className={`p-2 rounded-md text-white ${groupColors[task.group]}`}
                    onClick={() => handleEditTask(task)}
                  >
                    {task.title} - {task.time}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Dialog for displaying tasks on selected date */}
      {selectedDate && (
        <Dialog open onOpenChange={(open) => !open && setSelectedDate(null)}>
          <DialogContent className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              {/* Title showing tasks for selected date */}
              <h3 className="text-xl font-bold">Tasks for {selectedDate.toLocaleDateString()}</h3>

              {/* Button to close the dialog */}
              <Button variant="ghost" onClick={() => setSelectedDate(null)}>
                <XIcon className="w-5 h-5" />
              </Button>
            </div>

            {/* Display tasks for the selected date */}
            <div className="space-y-4">
              {tasks
                .filter((task) => task.date.toDateString() === selectedDate.toDateString())
                .map((task) => (
                  <div key={task.id} className={`p-4 rounded-md shadow-md ${groupColors[task.group]}`}>
                    <div className="flex justify-between items-center">
                      <div className="font-bold">{task.title}</div>
                      <div className="text-sm">{task.time}</div>
                    </div>
                    <div className="text-sm mt-2">{task.group}</div>

                    {/* Actions for each task */}
                    <div className="flex justify-end mt-4">
                      {/* Button to edit a task */}
                      <Button variant="ghost" size="icon" onClick={() => handleEditTask(task)}>
                        <FilePenIcon className="w-5 h-5" />
                      </Button>

                      {/* Button to delete a task */}
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteTask(task.id)}>
                        <TrashIcon className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Dialog for editing a task */}
      {editingTask && (
        <Dialog open onOpenChange={(open) => !open && setEditingTask(null)}>
          <DialogContent className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              {/* Title for editing task */}
              <h3 className="text-xl font-bold">Edit Task</h3>
            </div>

            {/* Inputs for editing task details */}
            <Input
              label="Title"
              value={editingTask.title}
              onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
            />
            <Input
              label="Time"
              type="time"
              value={editingTask.time}
              onChange={(e) => setEditingTask({ ...editingTask, time: e.target.value })}
            />

            {/* Dropdown for selecting task group */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link">
                  Group: {editingTask.group || "Other"} <PlusIcon className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuLabel>Select Group</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/* Menu items for task groups */}
                <DropdownMenuItem onClick={() => setEditingTask({ ...editingTask, group: "Homework" })}>
                  Homework
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setEditingTask({ ...editingTask, group: "Projects" })}>
                  Projects
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setEditingTask({ ...editingTask, group: "Meetings" })}>
                  Meetings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setEditingTask({ ...editingTask, group: "Assessments" })}>
                  Assessments
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setEditingTask({ ...editingTask, group: "other" })}>
                  Other
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Actions for editing a task */}
            <div className="flex justify-end ">
              {/* Button to delete a task */}
              <Button variant="secondary" onClick={() => handleDeleteTask(editingTask.id)}>
                Delete
              </Button>

              {/* Button to save changes to a task */}
              <Button onClick={() => handleUpdateTask(editingTask)}>Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Section for exporting and importing calendar */}
      <div className="absolute bottom-4 right-4">
        {/* Button for exporting calendar data */}
        <Button className="bg-blue-500 text-white" onClick={handleExportProjects}>
          Export Calendar
        </Button>

        {/* Button for importing calendar data */}
        <Button className="ml-2 bg-green-500 text-white" onClick={handleImportTasks}>
          Import Calendar
        </Button>

        {/* Input element for selecting a file to import */}
        <input
          type="file"
          accept=".txt"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}