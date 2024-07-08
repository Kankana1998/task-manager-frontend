import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './config';

const auth = getAuth(app);

// Function to store authentication state in local storage
const storeAuthState = (user) => {
  localStorage.setItem('authUser', JSON.stringify(user));
};

// Function to get authentication state from local storage
const getStoredAuthState = () => {
  const user = localStorage.getItem('authUser');
  return user ? JSON.parse(user) : null;
};

const register = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  storeAuthState(userCredential.user);
  return userCredential.user;
};

const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  storeAuthState(userCredential.user);
  return userCredential.user;
};

const logout = async () => {
  await signOut(auth);
  localStorage.removeItem('authUser');
};

const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      storeAuthState(user);
    } else {
      localStorage.removeItem('authUser');
    }
    if (typeof callback === 'function') {
      callback(user);
    }
  });
};

export { auth, register, login, logout, onAuthChange, getStoredAuthState };
