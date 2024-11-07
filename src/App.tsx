import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Student } from './types';
import { api } from './api';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import { Ticket, Users, ArrowLeft } from 'lucide-react';

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await api.getAllStudents();
      setStudents(response.data);
    } catch (error) {
      toast.error('Failed to fetch students');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (student: Student) => {
    setFormLoading(true);
    try {
      await api.generateQRCode(student);
      toast.success('QR Code generated and sent successfully!');
      await fetchStudents();
      setShowForm(false);
    } catch (error) {
      toast.error('Failed to generate QR Code');
    } finally {
      setFormLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await api.deleteStudent(id);
      toast.success('Student deleted successfully');
      fetchStudents();
    } catch (error) {
      toast.error('Failed to delete student');
    }
  };

  return (
    <div className="min-h-screen text-gray-100 bg-gray-900">
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#374151',
            color: '#fff',
          },
        }}
      />
      
      <nav className="bg-gray-800 shadow-lg">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Ticket className="w-8 h-8 text-purple-400" />
              <span className="ml-2 text-xl font-semibold text-gray-100">
                Halloween Party Tickets
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-300">Powered by </span>
              <a 
                href="https://github.com/Dilshan-Mindika" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 text-purple-400 transition-colors hover:text-purple-300"
              >
                DILA
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {showForm ? (
          <div className="max-w-md mx-auto">
            <div className="p-6 bg-gray-800 rounded-lg shadow-xl">
              <h2 className="mb-4 text-lg font-semibold text-gray-100">Mortem  Night | Halloween Party Registration</h2>
              <StudentForm onSubmit={handleSubmit} loading={formLoading} />
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center text-purple-400 transition-colors hover:text-purple-300"
              >
                <ArrowLeft className="w-5 h-5 mr-1" />
                Back to Generate Ticket
              </button>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-purple-400" />
                  <h2 className="ml-2 text-lg font-semibold text-gray-100">Student List</h2>
                </div>
                <span className="text-gray-400">
                  {students.length} students registered
                </span>
              </div>
              <StudentList
                students={students}
                onDelete={handleDelete}
                loading={loading}
              />
            </div>
          </div>
        )}
      </main>

      <footer className="py-4 mt-8 bg-gray-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © 2024 Halloween Party | All Rights Reserved by CSE
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;