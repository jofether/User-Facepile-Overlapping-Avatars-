import React from 'react';

function UserModal({ user, onClose, onRemove }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl max-w-sm w-full animate-slideUp">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-slate-200 transition text-2xl"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Avatar */}
          <div className="mb-6">
            <img
              src={user.img}
              alt={user.name}
              className="w-24 h-24 rounded-full border-4 border-blue-500 mx-auto shadow-lg"
            />
          </div>

          {/* User Info */}
          <h2 className="text-2xl font-bold text-white mb-2">{user.name}</h2>
          <p className="text-blue-400 font-medium mb-6">{user.role}</p>

          {/* Stats */}
          <div className="bg-slate-700 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-slate-400 text-sm">Contributions</p>
                <p className="text-white font-bold text-lg">47</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Tasks Done</p>
                <p className="text-white font-bold text-lg">23</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-sm mb-6">
            Active team member with strong technical skills and excellent collaboration abilities.
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition"
            >
              Close
            </button>
            <button
              onClick={() => onRemove(user.id)}
              className="flex-1 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
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
