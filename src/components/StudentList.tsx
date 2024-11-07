import React from 'react';
import { Student } from '../types';
import { Trash2, Mail, Phone } from 'lucide-react';

interface StudentListProps {
  students: Student[];
  onDelete: (id: number) => void;
  loading: boolean;
}

export default function StudentList({ students, onDelete, loading }: StudentListProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {students.map((student) => (
        <div
          key={student.id}
          className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-100">{student.name}</h3>
              <p className="text-sm text-gray-400">{student.studentId}</p>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs ${
              student.status === 'active' 
                ? 'bg-green-900 text-green-200' 
                : 'bg-red-900 text-red-200'
            }`}>
              {student.status}
            </span>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-gray-300 flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              {student.email}
            </p>
            <p className="text-sm text-gray-300 flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              {student.phoneNumber}
            </p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-600">
            <p className="text-sm text-gray-400">Batch: {student.batch}</p>
          </div>

          <button
            onClick={() => student.id && onDelete(student.id)}
            className="mt-4 text-red-400 hover:text-red-300 transition-colors flex items-center text-sm"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}