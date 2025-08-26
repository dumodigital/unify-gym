'use client';

import { useState, useEffect } from 'react';
import { 
  getScheduleData, 
  saveScheduleData, 
  addClassEvent, 
  updateClassEvent, 
  deleteClassEvent,
  type ClassEvent 
} from '@/lib/schedule-data';

export default function AdminPage() {
  const [classes, setClasses] = useState<ClassEvent[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simple password protection (in production, use proper authentication)
  const ADMIN_PASSWORD = 'unifygym2025';

  useEffect(() => {
    if (isAuthenticated) {
      setClasses(getScheduleData());
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  const handleAddClass = (formData: FormData) => {
    const newClass = {
      title: formData.get('title') as string,
      instructor: formData.get('instructor') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      duration: parseInt(formData.get('duration') as string),
      type: formData.get('type') as ClassEvent['type'],
      capacity: parseInt(formData.get('capacity') as string),
      spotsLeft: parseInt(formData.get('spotsLeft') as string),
      description: formData.get('description') as string,
    };

    addClassEvent(newClass);
    setClasses(getScheduleData());
    setShowAddForm(false);
  };

  const handleUpdateClass = (id: string, formData: FormData) => {
    const updates = {
      title: formData.get('title') as string,
      instructor: formData.get('instructor') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      duration: parseInt(formData.get('duration') as string),
      type: formData.get('type') as ClassEvent['type'],
      capacity: parseInt(formData.get('capacity') as string),
      spotsLeft: parseInt(formData.get('spotsLeft') as string),
      description: formData.get('description') as string,
    };

    updateClassEvent(id, updates);
    setClasses(getScheduleData());
    setIsEditing(null);
  };

  const handleDeleteClass = (id: string) => {
    if (confirm('Are you sure you want to delete this class?')) {
      deleteClassEvent(id);
      setClasses(getScheduleData());
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 w-full max-w-md">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-neutral-300 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Class Schedule Admin</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Add New Class
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Add Class Form */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-neutral-800 p-6 rounded-2xl border border-neutral-700 w-full max-w-2xl">
              <h2 className="text-xl font-bold mb-4">Add New Class</h2>
              <ClassForm 
                onSubmit={handleAddClass}
                onCancel={() => setShowAddForm(false)}
              />
            </div>
          </div>
        )}

        {/* Classes List */}
        <div className="grid gap-4">
          {classes.map((classItem) => (
            <div key={classItem.id} className="bg-neutral-800 p-6 rounded-xl border border-neutral-700">
              {isEditing === classItem.id ? (
                <ClassForm
                  initialData={classItem}
                  onSubmit={(formData) => handleUpdateClass(classItem.id, formData)}
                  onCancel={() => setIsEditing(null)}
                />
              ) : (
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-semibold">{classItem.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        classItem.type === 'Cardio' ? 'bg-red-500/20 text-red-300' :
                        classItem.type === 'CrossFit' ? 'bg-orange-500/20 text-orange-300' :
                        classItem.type === 'Gym' ? 'bg-green-500/20 text-green-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}>
                        {classItem.type}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-neutral-300">
                      <div>
                        <strong>Instructor:</strong> {classItem.instructor}
                      </div>
                      <div>
                        <strong>Date:</strong> {classItem.date}
                      </div>
                      <div>
                        <strong>Time:</strong> {classItem.time}
                      </div>
                      <div>
                        <strong>Duration:</strong> {classItem.duration} min
                      </div>
                      <div>
                        <strong>Capacity:</strong> {classItem.capacity}
                      </div>
                      <div>
                        <strong>Spots Left:</strong> {classItem.spotsLeft}
                      </div>
                    </div>
                    <p className="text-neutral-400 mt-2">{classItem.description}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => setIsEditing(classItem.id)}
                      className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm font-medium transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClass(classItem.id)}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm font-medium transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClassForm({ 
  initialData, 
  onSubmit, 
  onCancel 
}: { 
  initialData?: ClassEvent;
  onSubmit: (formData: FormData) => void;
  onCancel: () => void;
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            name="title"
            type="text"
            defaultValue={initialData?.title}
            className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Instructor</label>
          <select
            name="instructor"
            defaultValue={initialData?.instructor}
            className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Instructor</option>
            <option value="Melissa Cesare">Melissa Cesare</option>
            <option value="Leslie Garrett">Leslie Garrett</option>
            <option value="James Herron">James Herron</option>
            <option value="Nikata Katsman">Nikata Katsman</option>
            <option value="Mary Beth">Mary Beth</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            name="date"
            type="date"
            defaultValue={initialData?.date}
            className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Time</label>
          <input
            name="time"
            type="time"
            defaultValue={initialData?.time}
            className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Duration (minutes)</label>
          <input
            name="duration"
            type="number"
            defaultValue={initialData?.duration}
            className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <select
            name="type"
            defaultValue={initialData?.type}
            className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Type</option>
            <option value="Cardio">Cardio</option>
            <option value="CrossFit">CrossFit</option>
            <option value="Gym">Gym</option>
            <option value="Powerlifting">Powerlifting</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Capacity</label>
          <input
            name="capacity"
            type="number"
            defaultValue={initialData?.capacity}
            className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Spots Left</label>
          <input
            name="spotsLeft"
            type="number"
            defaultValue={initialData?.spotsLeft}
            className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          defaultValue={initialData?.description}
          rows={3}
          className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="bg-neutral-600 hover:bg-neutral-700 px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition-colors"
        >
          {initialData ? 'Update' : 'Add'} Class
        </button>
      </div>
    </form>
  );
}
