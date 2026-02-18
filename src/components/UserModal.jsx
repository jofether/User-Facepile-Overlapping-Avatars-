import React from 'react';

function UserModal({ user, onClose, onRemove }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'online': return 'bg-green-500';
      case 'idle': return 'bg-yellow-500';
      default: return 'bg-slate-600';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'online': return 'Online';
      case 'idle': return 'Idle';
      default: return 'Offline';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl max-w-md w-full animate-slideUp overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-8 rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 hover:text-white transition text-3xl w-10 h-10 flex items-center justify-center rounded-full"
          >
            ×
          </button>
        </div>

        {/* Content */}
        {/* [BUG - SPACING] Extreme negative margin causes avatar and header to severely overlap */}
        {/* [FIX] Remove -mt-32, use positive padding or mt-4 */}
        <div className="p-8 text-center -mt-32">
          {/* Avatar */}
          <div className="mb-6 relative inline-block">
            <img
              src={user.img}
              alt={user.name}
              className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-xl"
            />
            {/* Status indicator - larger */}
            <div className={`absolute bottom-2 right-2 w-6 h-6 rounded-full border-3 border-slate-800 ${getStatusColor(user.status)} animate-pulse`}></div>
          </div>

          {/* User Info */}
          <h2 className="text-3xl font-bold text-white mb-1">{user.name}</h2>
          <p className="text-blue-400 font-medium mb-1 text-lg">{user.role}</p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <p className="text-slate-400 text-sm">{user.department}</p>
            <span className={`inline-block w-2 h-2 rounded-full ${getStatusColor(user.status)}`}></span>
            <p className="text-slate-400 text-sm">{getStatusText(user.status)}</p>
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-700 mb-6"></div>

          {/* Stats */}
          {/* [BUG - LAYOUT] Grid with 8 columns breaks layout, one card per line */}
          {/* [FIX] Change grid-cols-8 to grid-cols-2 */}
          <div className="grid grid-cols-8 gap-4 mb-6">
            <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/50">
              <p className="text-slate-400 text-sm font-medium">Contributions</p>
              <p className="text-white font-bold text-2xl mt-2">{user.contributions}</p>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600/50">
              <p className="text-slate-400 text-sm font-medium">Tasks Done</p>
              <p className="text-white font-bold text-2xl mt-2">{Math.round(user.contributions * 0.7)}</p>
            </div>
          </div>

          {/* Skills/Bio */}
          <div className="bg-slate-700/30 rounded-xl p-4 mb-6 border border-slate-600/30">
            <p className="text-slate-300 text-sm leading-relaxed">
              Dedicated team member with expertise in {user.department.toLowerCase()}. Excellent communication skills and a passion for delivering high-quality results. Always ready to support the team and mentor junior members.
            </p>
          </div>

          {/* Quick Stats */}
          {/* [BUG - COLOR & CONTRAST] All label text is dark slate on dark background - completely invisible */}
          {/* [FIX] Change text-slate-800 to text-slate-200 or text-white */}
          <div className="flex justify-around mb-6 bg-slate-700/20 rounded-xl p-4">
            <div>
              <p className="text-slate-800 text-xs font-bold">Reliability</p>
              <p className="text-green-400 font-bold">98%</p>
            </div>
            <div>
              <p className="text-slate-800 text-xs font-bold">Response Time</p>
              <p className="text-blue-400 font-bold">~4h</p>
            </div>
            <div>
              <p className="text-slate-800 text-xs font-bold">Performance</p>
              <p className="text-purple-400 font-bold">⭐⭐⭐</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition font-medium duration-200"
            >
              Close
            </button>
            <button
              onClick={() => onRemove(user.id)}
              className="flex-1 py-3 bg-red-600/90 text-white rounded-lg hover:bg-red-700 transition font-medium duration-200"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserModal;
