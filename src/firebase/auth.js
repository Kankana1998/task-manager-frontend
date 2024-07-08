import { createUserWithEmailAndPassword, signOut  } from 'firebase/auth';
import { auth } from './config';

const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  return await signOut(auth);
};

export { register };
