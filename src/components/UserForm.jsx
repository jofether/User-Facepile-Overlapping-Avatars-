import React, { useState } from 'react';

function UserForm({ onAddUser, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    img: 'https://i.pravatar.cc/100?img=6',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.role.trim()) {
      onAddUser(formData);
      setFormData({ name: '', role: '', img: 'https://i.pravatar.cc/100?img=6' });
    }
  };

  return (
    <div className="mt-6 bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl animate-slideUp">
      <h3 className="text-xl font-bold text-white mb-4">Add New Member</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter member name"
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 transition placeholder-slate-500"
          />
        </div>

        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="e.g., Developer, Designer"
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-blue-500 transition placeholder-slate-500"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg font-medium hover:from-emerald-700 hover:to-emerald-800 transition"
          >
            Add Member
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
