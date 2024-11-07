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

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(student);
    // Reset form fields after submission
    setStudent({
      studentId: '',
      name: '',
      batch: '',
      phoneNumber: '',
      email: '',
      status: 'active',
      deleted: false
    });
  };

  // Handle input field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
      {/* Student ID */}
      <div className="relative">
        <Hash className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
        <input
          type="text"
          name="studentId"
          placeholder="Student ID"
          required
          className="w-full py-2 pl-10 pr-4 text-gray-100 placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={student.studentId}
          onChange={handleChange}
          autoComplete="off"  // Disable autofill on this field
        />
      </div>

      {/* Name */}
      <div className="relative">
        <User className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full py-2 pl-10 pr-4 text-gray-100 placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={student.name}
          onChange={handleChange}
          autoComplete="off"  // Disable autofill on this field
        />
      </div>

      {/* Batch */}
      <div className="relative">
        <GraduationCap className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
        <input
          type="text"
          name="batch"
          placeholder="Batch"
          required
          className="w-full py-2 pl-10 pr-4 text-gray-100 placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={student.batch}
          onChange={handleChange}
          autoComplete="off"  // Disable autofill on this field
        />
      </div>

      {/* Phone Number */}
      <div className="relative">
        <Phone className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          required
          className="w-full py-2 pl-10 pr-4 text-gray-100 placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={student.phoneNumber}
          onChange={handleChange}
          autoComplete="off"  // Disable autofill on this field
        />
      </div>

      {/* Email */}
      <div className="relative">
        <Mail className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full py-2 pl-10 pr-4 text-gray-100 placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={student.email}
          onChange={handleChange}
          autoComplete="off"  // Disable autofill on this field
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2 text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed"
      >
        {loading ? 'Generating QR Code...' : 'Generate QR Code'}
      </button>
    </form>
  );
}
