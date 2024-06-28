'use client'
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Importing Button component
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"; // Importing Select components
import { Input } from "@/components/ui/input"; // Importing Input component
import { Textarea } from "@/components/ui/textarea"; // Importing Textarea component
import Navbar from "@/components/Navbar"; // Importing Navbar component

export default function NotesPage() { //Default notes that the user see's when they first go to the page
  const [notes, setNotes] = useState([ // State for managing notes
    {
      id: 1,
      category: "Assessments",
      title: "Assessments List",
      content: "Economics Assessment, English Assessment",
    },
    {
      id: 2,
      category: "Projects",
      title: "Software Project",
      content: "Finish Writing Code\nComplete Documentation\nFinish test Report",
    },
    {
      id: 3,
      category: "Homework",
      title: "Math Homework",
      content: "Finish Calculus Homework\n- Finish Probability Test\n- Finish Financial Math Notes",
    },
  ]);
  const [selectedNote, setSelectedNote] = useState(notes[0]); // State for currently selected note
  const [newNoteTitle, setNewNoteTitle] = useState("Blank"); // State for new note title
  const [newNoteContent, setNewNoteContent] = useState("Blank"); // State for new note content
  const [newNoteCategory, setNewNoteCategory] = useState(selectedNote.category); // State for new note category

  // Function to export selected note as a text file
  const exportSelectedNoteAsTextFile = () => {
    const filename = `${selectedNote.title}.txt`; // Filename based on selected note title
    const noteText = `
Category: ${selectedNote.category}
Title: ${selectedNote.title}
Content:
${selectedNote.content}
    `; // Text content of the note

    const blob = new Blob([noteText], { type: "text/plain" }); // Creating a blob with text content
    const link = document.createElement("a"); // Creating an anchor element
    link.href = URL.createObjectURL(blob); // Setting the href of the anchor to the blob URL
    link.download = filename; // Setting the download attribute to the filename
    link.click(); // Programmatically clicking the anchor to trigger download
  };

  // Function to import notes from a text file
  const importNotesFromTextFile = (file) => {
    const reader = new FileReader(); // Creating a FileReader object
    reader.onload = (e) => {
      const fileContent = e.target.result; // Reading the file content
      const importedNotes = parseNotesText(fileContent); // Parsing the imported text into notes
      const updatedNotes = [...notes, ...importedNotes]; // Combining imported notes with existing notes
      setNotes(updatedNotes); // Updating notes state with imported notes
      setSelectedNote(importedNotes[0] || null); // Selecting the first imported note
    };
    reader.readAsText(file); // Reading the uploaded file as text
  };

  // Function to parse text content into notes
  const parseNotesText = (text) => {
    const lines = text.split("\n"); // Splitting text into lines
    const parsedNotes = [];
    let currentNote = null;

    lines.forEach(line => {
      if (line.startsWith("Title: ")) {
        if (currentNote) {
          parsedNotes.push(currentNote); // Pushing current note to parsedNotes array
        }
        currentNote = {
          title: line.substring(7).trim(), // Extracting and trimming title
          content: "",
          category: newNoteCategory, // Assigning default category or parsing from file
        };
      } else if (line.startsWith("---")) {
        if (currentNote) {
          parsedNotes.push(currentNote); // Pushing current note to parsedNotes array
          currentNote = null;
        }
      } else if (currentNote) {
        currentNote.content += line + "\n"; // Appending content line by line
      }
    });

    if (currentNote) {
      parsedNotes.push(currentNote); // Pushing last note to parsedNotes array
    }

    return parsedNotes.map((note, index) => ({
      ...note,
      id: notes.length + index + 1 // Assigning unique IDs to parsed notes
    }));
  };

  // useEffect to handle initial note selection
  useEffect(() => {
    setSelectedNote(notes[0]); // Selecting the first note initially
    setNewNoteTitle(notes[0]?.title || "Blank"); // Setting new note title
    setNewNoteContent(notes[0]?.content || "Blank"); // Setting new note content
    // Initialize newNoteCategory based on selectedNote.category or default to "Assessments"
    setNewNoteCategory(selectedNote.category || "Assessments");
  }, [notes]); // Dependency array ensuring useEffect runs when notes state changes

  // Function to handle note selection from the list
  const handleNoteSelect = (note) => {
    setSelectedNote(note); // Setting selected note
    setNewNoteTitle(note.title); // Setting new note title
    setNewNoteContent(note.content); // Setting new note content
    setNewNoteCategory(note.category); // Setting new note category
  };

  // Function to handle saving edited note
  const handleSaveNote = () => {
    const updatedNotes = notes.map((note) => {
      if (note.id === selectedNote.id) {
        return {
          ...note,
          title: newNoteTitle, // Updating note title
          content: newNoteContent, // Updating note content
          category: newNoteCategory, // Updating note category
        };
      }
      return note;
    });
    setNotes(updatedNotes); // Updating notes state with edited note
    setSelectedNote({ // Updating selected note state with edited note
      ...selectedNote,
      title: newNoteTitle,
      content: newNoteContent,
      category: newNoteCategory,
    });
  };

  // Function to handle deleting a note
  const handleDeleteNote = () => {
    const updatedNotes = notes.filter((note) => note.id !== selectedNote.id); // Filtering out deleted note
    setNotes(updatedNotes); // Updating notes state without deleted note
    setSelectedNote(updatedNotes[0] || null); // Selecting the first note after deletion
  };

  // Function to create a new blank note
  const handleNewNote = () => {
    const newNote = {
      id: notes.length + 1, // Generating new note ID
      category: newNoteCategory, // Setting new note category
      title: "Blank", // Setting new note title
      content: "Blank", // Setting new note content
    };
    const updatedNotes = [...notes, newNote]; // Adding new note to notes array
    setNotes(updatedNotes); // Updating notes state with new note
    setSelectedNote(newNote); // Selecting newly created note
    setNewNoteTitle("Blank"); // Resetting new note title
    setNewNoteContent("Blank"); // Resetting new note content
    // No need to reset newNoteCategory here
  };

  // Function to handle importing notes from file
  const handleImportButtonClick = () => {
    const input = document.createElement("input"); // Creating input element
    input.type = "file"; // Setting input type to file
    input.accept = ".txt"; // Accepting only text files
    input.onchange = (e) => {
      const file = e.target.files[0]; // Getting selected file
      if (file) {
        importNotesFromTextFile(file); // Importing notes from selected file
      }
    };
    input.click(); // Programmatically clicking the input element
  };

  return (
    <div className="flex flex-col h-screen"> {/* Main container */}
      <Navbar /> {/* Navbar component */}
      <div className="flex flex-1"> {/* Flex container for main content */}
        <div className="w-72 border-r bg-muted/40 p-4"> {/* Sidebar container */}
          <div className="flex items-center justify-between mb-4"> {/* Header section */}
            <h2 className="text-lg font-medium">Notes</h2> {/* Title */}
            <div className="flex items-center space-x-2"> {/* Button group */}
              <Button size="sm" onClick={handleNewNote}> {/* New Note button */}
                New Note
              </Button>
            </div>
          </div>
          <div className="space-y-2"> {/* Notes list section */}
            <Select value={newNoteCategory} onValueChange={setNewNoteCategory} placeholder="Select category"> {/* Select dropdown for categories */}
              <SelectTrigger className="w-full"> {/* Select trigger */}
                <SelectValue />
              </SelectTrigger>
              <SelectContent> {/* Select content */}
                <SelectItem value="Assessments">Assessments</SelectItem> {/* Category options */}
                <SelectItem value="Projects">Projects</SelectItem>
                <SelectItem value="Homework">Homework</SelectItem>
              </SelectContent>
            </Select>
            {notes // Mapping over filtered notes based on selected category
              .filter((note) => note.category === newNoteCategory)
              .map((note) => (
                <div
                  key={note.id} // Key for each note item
                  className={`p-2 rounded-md cursor-pointer transition-colors ${note.id === selectedNote.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                    }`}
                  onClick={() => handleNoteSelect(note)} // Click handler for selecting a note
                >
                  <h3 className="text-sm font-medium">{note.title}</h3> {/* Note title */}
                  <p className="text-sm text-muted-foreground line-clamp-2">{note.content}</p> {/* Note content */}
                </div>
              ))}
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1"> {/* Main content area */}
          <div className="mb-4"> {/* Title input */}
            <Input
              type="text"
              placeholder="Note title"
              value={newNoteTitle}
              onChange={(e) => setNewNoteTitle(e.target.value)}
            />
          </div>
          <Textarea // Content textarea
            placeholder="Note content"
            value={newNoteContent}
            onChange={(e) => setNewNoteContent(e.target.value)}
            className="flex-1 mb-4"
          />
          <div className="flex justify-end gap-2"> {/* Button group */}
            <Button variant="secondary" onClick={handleDeleteNote}> {/* Delete button */}
              Delete
            </Button>
            <Button onClick={handleSaveNote}>Save</Button> {/* Save button */}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 flex items-center space-x-2"> {/* Export/Import buttons */}
        <Button onClick={exportSelectedNoteAsTextFile}>Export Note</Button> {/* Export button */}
        <Button
          variant="outline"
          onClick={handleImportButtonClick}
          className="bg-white text-blue-500 border border-blue-500"
        >
          Import Note {/* Import button */}
        </Button>
      </div>
    </div>
  );
}
