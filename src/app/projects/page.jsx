'use client'

// Import React hooks for managing state, memoization, and side effects
import { useState, useMemo, useEffect } from "react";

// Importing Input component from custom path
import { Input } from "@/components/ui/input";

// Importing DropdownMenu components and related items from custom path
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu";

// Importing Button component from custom path
import { Button } from "@/components/ui/button";

// Importing Card components (Header, Title, Content) from custom path
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Importing Dialog components (Content, Header, Title, Footer) from custom path
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

// Importing Separator component from custom path
import { Separator } from "@/components/ui/separator";

// Importing Label component from custom path
import { Label } from "@/components/ui/label";

// Importing Textarea component from custom path
import { Textarea } from "@/components/ui/textarea";

// Importing Navbar component from custom path
import Navbar from "@/components/Navbar";

// Importing specific icons (ArrowUpDownIcon, PlusIcon, TrashIcon) from custom path
import { ArrowUpDownIcon, PlusIcon, TrashIcon } from "@/components/ProjectsIcons";



// Exporting a default function component named Component
export default function Component() {
  // State variables for managing search input, sorting options, modal visibility, selected project, new project, and new task
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("dueDate");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    dueDate: "",
  });
  const [newTask, setNewTask] = useState({
    name: "",
  });

  // Default projects if localStorage is empty
  const defaultProjects = [
    {
      id: 1,
      name: "Make a App",
      description: "Make a task scheduling software",
      dueDate: "2024-08-15",
      status: "on track",
      tasks: [
        { id: 1, name: "StoryBoard", completed: false },
        { id: 2, name: "Create Dashboard", completed: false },
        { id: 3, name: "Frontend Development", completed: false },
        { id: 4, name: "Backend Development", completed: false },
      ],
    },
    // Add more default projects as needed
  ];

  // Initialize projects from localStorage or use default projects if no data found
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    const parsedProjects = savedProjects ? JSON.parse(savedProjects) : defaultProjects;

    // Update status to "overdue" for projects whose due date has passed
    const updatedProjects = parsedProjects.map(project => ({
      ...project,
      status: new Date(project.dueDate) < new Date() ? "overdue" : "on track"
    }));

    return updatedProjects;
  });

  // Update localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // Memoized filtered projects based on search input, sorting options, and projects array
  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => project.name.toLowerCase().includes(search.toLowerCase())) // Filter projects by name based on search input
      .sort((a, b) => { // Sort projects based on sortBy and sortOrder
        if (sortOrder === "asc") {
          return new Date(a[sortBy]) - new Date(b[sortBy]);
        } else {
          return new Date(b[sortBy]) - new Date(a[sortBy]);
        }
      });
  }, [search, sortBy, sortOrder, projects]);

  // Handler for updating search input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Handler for updating sort options
  const handleSort = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  // Handler for opening modal to create a new project
  const handleNewProject = () => {
    setShowModal(true);
  };

  // Handler for closing modal
  const handleCloseModal = () => {
    setShowModal(false);
    setNewTask({ name: "" }); // Reset newTask state
  };

  // Handler for saving new project
  const handleSaveProject = () => {
    const newProjectId = projects.length + 1;
    const newProjectData = {
      id: newProjectId,
      name: newProject.name,
      description: newProject.description,
      dueDate: newProject.dueDate,
      status: "on track",
      tasks: [],
    };
    setProjects([...projects, newProjectData]); // Add new project to projects state
    setNewProject({ // Reset newProject state
      name: "",
      description: "",
      dueDate: "",
    });
    setShowModal(false); // Close modal after saving project
  };

  // Handler for updating newProject state based on input changes
  const handleInputChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    });
  };

  const handleTaskInputChange = (e) => {
    // Update the 'newTask' state with the new task name from input
    setNewTask({
      name: e.target.value,
    });
  };

  const handleAddTask = () => {
    // Check if the task name is not empty before adding
    if (newTask.name.trim() !== "") {
      // Generate a new task ID
      const newTaskId = selectedProject.tasks.length + 1;
      // Prepare data for the new task
      const newTaskData = {
        id: newTaskId,
        name: newTask.name,
        completed: false,
      };
      // Update the selected project with the new task added
      const updatedProject = {
        ...selectedProject,
        tasks: [...selectedProject.tasks, newTaskData],
      };
      // Update the list of projects with the updated project
      const updatedProjects = projects.map((project) =>
        project.id === selectedProject.id ? updatedProject : project
      );
      // Update the state with the updated list of projects, selected project, and clear the 'newTask' state
      setProjects(updatedProjects);
      setSelectedProject(updatedProject);
      setNewTask({ name: "" });
    }
  };

  const handleProjectClick = (project) => {
    // Set the clicked project as the selected project
    setSelectedProject(project);
  };

  const handleTaskComplete = (projectId, taskId) => {
    // Update tasks' completion status in the specified project
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId) {
        // Toggle completion status for the specified task
        const updatedTasks = project.tasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        return { ...project, tasks: updatedTasks };
      }
      return project;
    });
    // Update the state with the updated list of projects
    setProjects(updatedProjects);
  };

  const handleTaskDelete = (projectId, taskId) => {
    // Remove the specified task from the specified project
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId) {
        // Filter out the task to be deleted
        const updatedTasks = project.tasks.filter((task) => task.id !== taskId);
        return { ...project, tasks: updatedTasks };
      }
      return project;
    });
    // Update the state with the updated list of projects
    setProjects(updatedProjects);
    // Update the selected project state to reflect the task deletion
    setSelectedProject({
      ...selectedProject,
      tasks: selectedProject.tasks.filter((t) => t.id !== taskId),
    });
  };

  const handleDeleteProject = (projectId) => {
    // Filter out the project with the specified projectId from the projects array
    const updatedProjects = projects.filter((project) => project.id !== projectId);
    // Update the state with the filtered projects array
    setProjects(updatedProjects);
    // Clear the selected project (set it to null) after deletion
    setSelectedProject(null);
  };

  const exportProjectsAsTextFile = () => {
    // Define the filename for the exported text file
    const filename = "projects.txt";
    // Map projects array to format each project and its tasks as text
    const projectsText = projects.map((project) => {
      // Format tasks as bullet points with task name
      const tasksText = project.tasks.map((task) => `- ${task.name}`).join("\n");
      // Format project details including name, description, due date, status, and tasks
      return `
  Project: ${project.name}
  Description: ${project.description}
  Due Date: ${project.dueDate}
  Status: ${project.status}
  Tasks:
  ${tasksText}
      `;
    }).join("\n");

    // Create a Blob containing the projectsText data as plain text
    const blob = new Blob([projectsText], { type: "text/plain" });
    // Create an <a> element to trigger download of the Blob as a file
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob); // Set the href of the link to the Blob URL
    link.download = filename; // Set the download attribute to specify the filename
    link.click(); // Programmatically click the link to trigger download
  };

  const importProjectsFromTextFile = (file) => {
    // Create a new instance of FileReader to read the file contents
    const reader = new FileReader();
    // Define what happens when FileReader finishes loading the file
    reader.onload = (e) => {
      // Extract the file content from the FileReader result
      const fileContent = e.target.result;
      // Parse the file content into projects using custom parsing function
      const importedProjects = parseProjectsText(fileContent);
      // Update state with the imported projects
      setProjects(importedProjects);
      // Close modal or perform other actions after importing
      setShowModal(false);
    };
    // Start reading the file as plain text
    reader.readAsText(file);
  };

  const parseProjectsText = (text) => {
    // parsing logic based on text file format
    const lines = text.split("\n");
    const parsedProjects = [];
    let currentProject = null;

    lines.forEach(line => {
      if (line.startsWith("Project:")) {
        // Start parsing a new project
        if (currentProject) {
          parsedProjects.push(currentProject);
        }
        currentProject = {
          name: line.substring(9).trim(),
          description: "",
          dueDate: "",
          status: "",
          tasks: []
        };
      } else if (line.startsWith("Description:")) {
        // Parse project description
        currentProject.description = line.substring(13).trim();
      } else if (line.startsWith("Due Date:")) {
        // Parse project due date
        currentProject.dueDate = line.substring(9).trim();
      } else if (line.startsWith("Status:")) {
        // Parse project status
        currentProject.status = line.substring(7).trim();
      } else if (line.startsWith("- ")) {
        // Parse tasks for the current project
        currentProject.tasks.push({ id: currentProject.tasks.length + 1, name: line.substring(2).trim(), completed: false });
      }
    });

    // Push the last parsed project into the array if exists
    if (currentProject) {
      parsedProjects.push(currentProject);
    }

    // Assign unique IDs to parsed projects
    return parsedProjects.map((project, index) => ({
      ...project,
      id: index + 1 // Example: Assigning unique IDs based on index
    }));
  };

  const handleImportButtonClick = () => {
    // Create an <input> element of type file
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".txt"; // Accept only text files for import
    // Define what happens when a file is selected
    input.onchange = (e) => {
      const file = e.target.files[0]; // Get the selected file
      if (file) {
        importProjectsFromTextFile(file); // Call import function with the selected file
      }
    };
    input.click(); // Programmatically trigger the file input dialog
  };


  return (
    // Main container with relative width and padding
    <div className="relative w-full px-5">
      {/* Navbar component */}
      <Navbar />

      {/* Title section */}
      <div className="mt-8 mb-4">
        <h1 className="text-3xl font-bold">My Projects</h1>
      </div>

      {/* Search and action bar */}
      <div className="mb-6 flex items-center justify-between">
        {/* Search input */}
        <div className="w-full max-w-md">
          <Input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={handleSearch}
            className="bg-white dark:bg-gray-950"
          />
        </div>

        {/* Dropdown menu and new project button */}
        <div className="flex items-center gap-4">
          {/* Dropdown menu for sorting */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowUpDownIcon className="h-4 w-4" />
                Sort by
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]" align="end">
              {/* Radio group for sorting options */}
              <DropdownMenuRadioGroup value={sortBy}>
                <DropdownMenuRadioItem value="dueDate" onClick={() => handleSort("dueDate")}>
                  Due Date
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="name" onClick={() => handleSort("name")}>
                  Name
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="status" onClick={() => handleSort("status")}>
                  Status
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Button to add a new project */}
          <Button variant="outline" onClick={handleNewProject}>
            <PlusIcon className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {/* Grid layout for displaying projects */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Map through filtered projects and render each as a Card component */}
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            onClick={() => handleProjectClick(project)}
            className="cursor-pointer hover:border-1 hover:border-blue-500"
          >
            <CardHeader>
              {/* Project title */}
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Display project due date and status */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Due: {new Date(project.dueDate).toLocaleDateString()}
                </div>
                {/* Status indicator */}
                <div
                  className={`rounded-full px-3 py-1 text-xs font-medium ${project.status === "on track"
                    ? "bg-green-500 text-green-50"
                    : project.status === "overdue"
                      ? "bg-red-500 text-red-50"
                      : "bg-blue-500 text-blue-50"
                    }`}
                >
                  {project.status}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Dialog for displaying selected project details */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            {/* Selected project title */}
            <DialogTitle>{selectedProject?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-6">
            <div className="grid gap-2">
              {/* Selected project description and due date */}
              <p>{selectedProject?.description}</p>
              <div className="text-sm text-muted-foreground">
                Due: {new Date(selectedProject?.dueDate).toLocaleDateString()}
              </div>
            </div>
            <Separator />
            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Tasks</h3>
              {/* Map through tasks of the selected project and display each */}
              {selectedProject?.tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between rounded-md bg-muted p-3">
                  <div className={task.completed ? "line-through text-muted-foreground" : ""}>{task.name}</div>
                  <div className="flex items-center gap-2">
                    {/* Button to toggle task completion status */}
                    <Button
                      variant={task.completed ? "green" : "destructive"}
                      onClick={() => {
                        handleTaskComplete(selectedProject.id, task.id);
                        task.completed = !task.completed;
                      }}
                    >
                      {task.completed ? "Completed" : "Incomplete"}
                    </Button>
                    {/* Button to delete a task */}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        handleTaskDelete(selectedProject.id, task.id);
                      }}
                    >
                      <TrashIcon className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              ))}
              {/* Input and button to add a new task */}
              <div className="flex items-center gap-2">
                <Input type="text" placeholder="Add a new task" value={newTask.name} onChange={handleTaskInputChange} />
                <Button onClick={handleAddTask}>Add Task</Button>
              </div>
            </div>
            {/* Button to delete the entire selected project */}
            <div className="flex justify-end mt-4">
              <Button
                variant="destructive"
                onClick={() => {
                  handleDeleteProject(selectedProject.id);
                }}
              >
                Delete Project
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog for adding a new project */}
      <Dialog open={showModal} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            {/* Header for new project dialog */}
            <DialogTitle>New Project</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-6">
            <div className="grid gap-2">
              {/* Input for new project name */}
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={newProject.name} onChange={handleInputChange} />
            </div>
            <div className="grid gap-2">
              {/* Textarea for new project description */}
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={newProject.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid gap-2">
              {/* Input for new project due date */}
              <Label htmlFor="dueDate">Due Date</Label>
              <Input id="dueDate" name="dueDate" type="date" value={newProject.dueDate} onChange={handleInputChange} />
            </div>
          </div>
          <DialogFooter>
            {/* Footer for new project dialog with cancel and save buttons */}
            <Button variant="ghost" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button onClick={handleSaveProject}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Export Projects button */}
      <button
        onClick={exportProjectsAsTextFile}
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Export Projects
      </button>

      {/* Import Projects button */}
      <button
        onClick={handleImportButtonClick}
        className="fixed bottom-16 right-4 bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Import Projects
      </button>
    </div>
  );

}
