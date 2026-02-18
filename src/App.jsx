import React, { useState } from 'react';
import UserModal from './components/UserModal';
import UserForm from './components/UserForm';

function App() {
  const defaultUsers = [
    { id: 1, img: "https://i.pravatar.cc/100?img=1", alt: "User 1", name: "Alice Johnson", role: "Lead Designer", department: "Design", contributions: 84, status: "online" },
    { id: 2, img: "https://i.pravatar.cc/100?img=2", alt: "User 2", name: "Bob Smith", role: "Frontend Developer", department: "Engineering", contributions: 127, status: "online" },
    { id: 3, img: "https://i.pravatar.cc/100?img=3", alt: "User 3", name: "Carol White", role: "Backend Developer", department: "Engineering", contributions: 156, status: "idle" },
    { id: 4, img: "https://i.pravatar.cc/100?img=4", alt: "User 4", name: "David Brown", role: "QA Engineer", department: "Quality", contributions: 92, status: "online" },
    { id: 5, img: "https://i.pravatar.cc/100?img=5", alt: "User 5", name: "Emma Davis", role: "Project Manager", department: "Management", contributions: 73, status: "online" },
    { id: 6, img: "https://i.pravatar.cc/100?img=6", alt: "User 6", name: "Frank Miller", role: "DevOps Engineer", department: "Infrastructure", contributions: 64, status: "offline" },
    { id: 7, img: "https://i.pravatar.cc/100?img=7", alt: "User 7", name: "Grace Lee", role: "UI/UX Designer", department: "Design", contributions: 78, status: "online" },
    { id: 8, img: "https://i.pravatar.cc/100?img=8", alt: "User 8", name: "Henry Zhang", role: "Full Stack Developer", department: "Engineering", contributions: 111, status: "online" },
  ];

  const [users, setUsers] = useState(defaultUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [hoveredUserId, setHoveredUserId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleUsers = filteredUsers.slice(0, 5);
  const moreCount = Math.max(0, filteredUsers.length - 5);

  const handleAddUser = (newUser) => {
    setUsers([...users, { ...newUser, id: Math.max(...users.map(u => u.id), 0) + 1 }]);
    setShowForm(false);
  };

  const handleRemoveUser = (userId) => {
    setUsers(users.filter(u => u.id !== userId));
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-4 md:p-8 font-sans">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-2"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full">
            <p className="text-blue-300 text-sm font-semibold">👥 Team Collaboration Hub</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Team Workspace</h1>
          <p className="text-slate-400 text-lg md:text-xl">Collaborate, manage, and grow with your exceptional team</p>
        </div>

        {/* Search Bar */}
        <div className="mb-10">
          <div className="relative">
            <svg className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search team members by name or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition placeholder-slate-500"
            />
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 md:p-10 rounded-3xl shadow-2xl hover:border-slate-600/50 transition">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Project Members</h2>
            <p className="text-slate-400">
              {visibleUsers.length} members {moreCount > 0 && `(+${moreCount} more)`}
            </p>
          </div>

          {/* FACEPILE CONTAINER */}
          {/* The -space-x-4 creates the overlapping effect */}
          <div className="flex justify-center items-center -space-x-4 mb-10">
            
            {visibleUsers.map((user) => (
              <div key={user.id} className="relative group">
                <div className="relative">
                  <img 
                    onClick={() => setSelectedUser(user)}
                    onMouseEnter={() => setHoveredUserId(user.id)}
                    onMouseLeave={() => setHoveredUserId(null)}
                    className="w-16 h-16 rounded-full border-4 border-slate-800 shadow-lg cursor-pointer transform transition-all hover:scale-125 hover:border-blue-400 ring-2 ring-slate-700 hover:ring-blue-400 hover:z-20"
                    src={user.img}
                    alt={user.name}
                  />
                  {/* Status indicator */}
                  <div className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-slate-800 ${
                    user.status === 'online' ? 'bg-green-500' :
                    user.status === 'idle' ? 'bg-yellow-500' :
                    'bg-slate-600'
                  }`}></div>
                </div>
                
                {/* Tooltip */}
                {hoveredUserId === user.id && (
                  <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-slate-900 border border-slate-600 text-white px-4 py-3 rounded-lg text-sm whitespace-nowrap shadow-xl animate-fadeIn z-50">
                    <p className="font-semibold text-white">{user.name}</p>
                    <p className="text-blue-400 text-xs">{user.role}</p>
                    <p className="text-slate-400 text-xs mt-1">{user.department}</p>
                  </div>
                )}
              </div>
            ))}
            
            {/* "More" Indicator */}
            {moreCount > 0 && (
              <div className="w-16 h-16 rounded-full border-4 border-slate-800 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg ring-2 ring-slate-700 cursor-pointer transform transition-all hover:scale-125 hover:ring-blue-400 text-sm">
                +{moreCount}
              </div>
            )}
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-4 gap-4 mb-10 py-8 border-t border-b border-slate-700/50">
            <div className="text-center">
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">{visibleUsers.length}</p>
              <p className="text-slate-400 text-sm mt-2">Visible</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-500">{users.length}</p>
              <p className="text-slate-400 text-sm mt-2">Total Members</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">{users.filter(u => u.status === 'online').length}</p>
              <p className="text-slate-400 text-sm mt-2">Online Now</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">{Math.round((users.reduce((acc, u) => acc + u.contributions, 0) / users.length).toFixed(0))}</p>
              <p className="text-slate-400 text-sm mt-2">Avg. Contributions</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <button 
              onClick={() => setShowForm(!showForm)}
              className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 duration-200 flex items-center justify-center gap-2"
            >
              <span>+</span> Add Member
            </button>
            <button className="flex-1 py-3 bg-slate-700 text-white rounded-xl font-medium hover:bg-slate-600 transition duration-200 flex items-center justify-center gap-2">
              <span>⚙️</span> Manage Team
            </button>
            <button className="flex-1 py-3 bg-slate-700 text-white rounded-xl font-medium hover:bg-slate-600 transition duration-200 flex items-center justify-center gap-2">
              <span>📊</span> View Analytics
            </button>
          </div>
        </div>

        {/* Add User Form */}
        {showForm && (
          <UserForm 
            onAddUser={handleAddUser} 
            onCancel={() => setShowForm(false)}
          />
        )}

        {/* User Details Modal */}
        {selectedUser && (
          <UserModal 
            user={selectedUser} 
            onClose={() => setSelectedUser(null)}
            onRemove={handleRemoveUser}
          />
        )}
      </div>
    </div>
  );
}

export default App;
