import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './config';

const auth = getAuth(app);

const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logout = () => {
  return signOut(auth);
};

const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export { register, login, logout, onAuthChange };
