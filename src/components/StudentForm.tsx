import React, { useState } from 'react';
import { Student } from '../types';
import { Mail, Phone, User, Hash, GraduationCap } from 'lucide-react';

interface StudentFormProps {
  onSubmit: (student: Student) => void;
  loading: boolean;
}

export default function StudentForm({ onSubmit, loading }: StudentFormProps) {
  const [student, setStudent] = useState<Student>({
    studentId: '',
    name: '',
    batch: '',
    phoneNumber: '',
    email: '',
    status: 'active',
    deleted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(student);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          name="studentId"
          placeholder="Student ID"
          required
          className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-100 placeholder-gray-400"
          value={student.studentId}
          onChange={handleChange}
        />
      </div>

      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-100 placeholder-gray-400"
          value={student.name}
          onChange={handleChange}
        />
      </div>

      <div className="relative">
        <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          name="batch"
          placeholder="Batch"
          required
          className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-100 placeholder-gray-400"
          value={student.batch}
          onChange={handleChange}
        />
      </div>

      <div className="relative">
        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          required
          className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-100 placeholder-gray-400"
          value={student.phoneNumber}
          onChange={handleChange}
        />
      </div>

      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-100 placeholder-gray-400"
          value={student.email}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors disabled:bg-purple-800 disabled:cursor-not-allowed"
      >
        {loading ? 'Generating QR Code...' : 'Generate QR Code'}
      </button>
    </form>
  );
}