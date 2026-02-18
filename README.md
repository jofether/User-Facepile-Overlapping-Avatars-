# 👥 Team Workspace - User Facepile Manager

A modern, interactive React web application for managing and displaying team members with beautiful overlapping avatar facepiles. Built with React, Vite, and Tailwind CSS.

## ✨ Features

### 🎨 Beautiful UI Design
- **Modern Dark Theme** with gradient accents and smooth animations
- **Overlapping Avatars** in a professional facepile layout
- **Responsive Design** that works on desktop and mobile
- **Smooth Animations** including fade-in, slide-up, and glow effects

### 👥 Team Member Management
- **Display Team** - View up to 5 visible members with "+more" indicator
- **Quick Preview** - Hover to see member name, role, and department
- **Detailed Profiles** - Click avatars to view comprehensive information
- **Add Members** - Easy form with multiple attributes
- **Remove Members** - Quick delete functionality

### 📊 Team Statistics
- Real-time metrics (visible, total, online, average contributions)
- Individual member stats (contributions, tasks, reliability, performance)

### 🔍 Search & Filter
- Search by name or role
- Real-time results update
- Smart member counting

### 🎯 Status Indicators
- Online (🟢), Idle (🟡), Offline (⚫)
- Animated pulsing indicators

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
npm install
npm run dev
```

Open http://localhost:5173

### Build

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── App.jsx
├── main.jsx
├── index.css
└── components/
    ├── UserForm.jsx
    └── UserModal.jsx
```

## 🛠️ Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS
- **JavaScript ES6+**

## 📋 Pre-loaded Team Members

8 sample members including:
- Alice Johnson (Lead Designer)
- Bob Smith (Frontend Developer)
- Carol White (Backend Developer)
- David Brown (QA Engineer)
- Emma Davis (Project Manager)
- And 3 more...

Each with unique avatars, roles, departments, contributions, and status.

## 💡 Usage

1. **View** - Overlapping facepile displays team
2. **Hover** - Quick preview with member info
3. **Click** - Detailed profile modal
4. **Add** - Form to create new members
5. **Search** - Filter members in real-time
6. **Remove** - Delete from profile modal

## 🎨 Key Components

- **App.jsx** - State management and layout
- **UserForm.jsx** - Member creation form
- **UserModal.jsx** - Profile details display

## 🎬 Visual Effects

- Fade-in for modals and tooltips
- Slide-up for new content
- Hover scale transforms
- Pulsing status indicators
- Gradient transitions
- Blur background overlays

## 🐛 Technical Notes

- `-space-x-4` class creates the overlapping effect
- Avatars from pravatar.cc API
- Case-insensitive search
- Real-time status updates

## 🔮 Future Enhancements

- Drag and drop reordering
- Department filtering
- PDF export
- Calendar integration
- Team chat
- Skill tags
- Analytics dashboard
- Dark/Light theme toggle

## 📄 License

MIT License

## 👨‍💻 Contributing

Contributions welcome! Fork and submit a PR.

---

**Made with ❤️ for better team collaboration**
