import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from 'firebase/firestore';
import { db } from './config';

export const addTask = async (task) => {
  try {
    await addDoc(collection(db, 'tasks'), task);
  } catch (error) {
    console.error('Error adding task:', error);
  }
};

export const getTasks = async (status = null) => {
  try {
    const q = status ? query(collection(db, 'tasks'), where('status', '==', status)) : collection(db, 'tasks');
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting tasks:', error);
    return [];
  }
};

export const updateTaskStatus = async (taskId, status) => {
  try {
    const taskRef = doc(db, 'tasks', taskId);
    await updateDoc(taskRef, { status });
  } catch (error) {
    console.error('Error updating task status:', error);
  }
};

export const deleteTask = async (taskId) => {
  try {
    const taskRef = doc(db, 'tasks', taskId);
    await deleteDoc(taskRef);
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};
