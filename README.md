# User Facepile (Overlapping Avatars)

A React + Vite project demonstrating a "facepile" UI component using negative margins to create overlapping avatar images.

## Project Rationale

This layout uses **Negative Margins** (`-space-x-4`) to create a "stacking" effect. It trains the model to understand that elements can intentionally overlap to save space and indicate grouping.

## Features

- **Overlapping Avatars**: Uses Tailwind's negative margin utilities to stack user avatars
- **Responsive Design**: Clean, centered layout that works on all screen sizes
- **Visual Hierarchy**: White borders and shadows make individual avatars stand out
- **More Indicator**: Shows "+99" for additional team members

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── App.jsx          # Main component with facepile layout
├── main.jsx         # Entry point
└── index.css        # Tailwind CSS imports

index.html           # HTML template
vite.config.js       # Vite configuration
tailwind.config.js   # Tailwind CSS configuration
```

## Technologies

- **React 18**: UI library
- **Vite**: Build tool
- **Tailwind CSS**: Utility-first CSS framework

## Key Learning Point

The facepile demonstrates how negative margins (`-space-x-4`) enable intentional overlapping of elements, which is useful for:
- Saving horizontal space
- Creating visual groupings
- Building compact UI patterns like team member previews

**Future Enhancement**: Remove the `-space-x-4` class to see how the overlapping effect depends on this utility.
