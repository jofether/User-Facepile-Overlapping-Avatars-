import React, { useState } from 'react';

function UserForm({ onAddUser, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    department: 'Engineering',
    contributions: 50,
    status: 'online',
    img: 'https://i.pravatar.cc/100?img=6',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'contributions' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.role.trim()) {
      onAddUser(formData);
      setFormData({ name: '', role: '', department: 'Engineering', contributions: 50, status: 'online', img: 'https://i.pravatar.cc/100?img=6' });
    }
  };

  return (
    <div className="mt-8 bg-slate-800/50 border border-slate-700/50 p-8 rounded-2xl shadow-xl animate-slideUp -z-50 relative">
      {/* [BUG - LAYERS] Form has -z-50, appears completely behind all content, unclickable */}
      {/* [FIX] Change -z-50 to z-50 to bring form to front */}
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><span>✨</span> Add New Team Member</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-slate-300 text-sm font-semibold mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter team member name"
            className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition placeholder-slate-500"
          />
        </div>

        <div>
          <label className="block text-slate-300 text-sm font-semibold mb-2">Job Title</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="e.g., Frontend Developer, Designer"
            className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition placeholder-slate-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-300 text-sm font-semibold mb-2">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition h-96"
            >
              {/* [BUG - TYPO] Invalid class 'h-96' on select creates massive dropdown */}
              {/* [FIX] Remove h-96, height shouldn't apply to select elements */}
              <option>Engineering</option>
              <option>Design</option>
              <option>Quality</option>
              <option>Management</option>
              <option>Infrastructure</option>
            </select>
          </div>
          <div>
            <label className="block text-slate-300 text-sm font-semibold mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
            >
              <option>online</option>
              <option>idle</option>
              <option>offline</option>
            </select>
          </div>
        </div>

        <div className="flex gap-3">
          {/* [BUG - SPACING] Extreme negative margin pushes button way outside form boundaries */}
          {/* [FIX] Remove -mb-16, use mb-0 instead */}
          <button
            type="submit"
            className="flex-1 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-800 transition shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 duration-200 -mb-16"
          >
            Add Member
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition font-semibold duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
