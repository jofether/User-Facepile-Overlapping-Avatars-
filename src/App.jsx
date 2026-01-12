import React, { useState } from 'react';
import UserModal from './components/UserModal';
import UserForm from './components/UserForm';

function App() {
  const defaultUsers = [
    { id: 1, img: "https://i.pravatar.cc/100?img=1", alt: "User 1", name: "Alice Johnson", role: "Lead Designer" },
    { id: 2, img: "https://i.pravatar.cc/100?img=2", alt: "User 2", name: "Bob Smith", role: "Frontend Dev" },
    { id: 3, img: "https://i.pravatar.cc/100?img=3", alt: "User 3", name: "Carol White", role: "Backend Dev" },
    { id: 4, img: "https://i.pravatar.cc/100?img=4", alt: "User 4", name: "David Brown", role: "QA Engineer" },
    { id: 5, img: "https://i.pravatar.cc/100?img=5", alt: "User 5", name: "Emma Davis", role: "Project Manager" },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-8 font-sans">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Team Workspace</h1>
          <p className="text-slate-300">Manage and collaborate with your project team</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search team members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 transition placeholder-slate-400"
          />
        </div>

        {/* Main Card */}
        <div className="bg-slate-800 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl shadow-2xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Project Members</h2>
            <p className="text-slate-400">
              {visibleUsers.length} members {moreCount > 0 && `(+${moreCount} more)`}
            </p>
          </div>

          {/* FACEPILE CONTAINER */}
          {/* FUTURE BUG: Remove '-space-x-4' -> Images will separate and lose the overlap effect */}
          <div className="flex justify-center -space-x-4 mb-8">
            
            {visibleUsers.map((user) => (
              <div key={user.id} className="relative group">
                <img 
                  onClick={() => setSelectedUser(user)}
                  onMouseEnter={() => setHoveredUserId(user.id)}
                  onMouseLeave={() => setHoveredUserId(null)}
                  className="w-14 h-14 rounded-full border-4 border-slate-800 shadow-lg cursor-pointer transform transition-all hover:scale-110 hover:border-blue-400 ring-2 ring-slate-700 hover:ring-blue-400"
                  src={user.img}
                  alt={user.name}
                />
                
                {/* Tooltip */}
                {hoveredUserId === user.id && (
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-slate-900 border border-slate-600 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg animate-fadeIn">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-slate-400 text-xs">{user.role}</p>
                  </div>
                )}
              </div>
            ))}
            
            {/* "More" Indicator */}
            {moreCount > 0 && (
              <div className="w-14 h-14 rounded-full border-4 border-slate-800 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-sm font-bold text-white shadow-lg ring-2 ring-slate-700 cursor-pointer transform transition-all hover:scale-110 hover:ring-blue-400">
                +{moreCount}
              </div>
            )}
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-t border-b border-slate-700">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-400">{visibleUsers.length}</p>
              <p className="text-slate-400 text-sm">Active</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-400">{users.length}</p>
              <p className="text-slate-400 text-sm">Total</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-emerald-400">100%</p>
              <p className="text-slate-400 text-sm">Engaged</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => setShowForm(!showForm)}
              className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
            >
              + Add Member
            </button>
            <button className="flex-1 py-3 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-600 transition">
              Manage Team
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
