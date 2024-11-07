import axios from 'axios';
import { Student } from './types';

const API_URL = "http://54.227.140.20:4040/student";

export const api = {
  getAllStudents: () => axios.get<Student[]>(`${API_URL}/all`),
  generateQRCode: (student: Student) => axios.post(`${API_URL}/generate-qrcode`, student),
  deleteStudent: (id: number) => axios.delete(`${API_URL}/${id}`),
  getStudent: (id: number) => axios.get<Student>(`${API_URL}/${id}`)
};