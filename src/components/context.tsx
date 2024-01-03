import React from 'react';
interface Context {
  signIn: () => void;
  signOut: () => void;
  signUp: () => void;
}
export const AuthContext = React.createContext({
  signIn: (userName: string, password: string, execution: string, _eventId: string) => {},
  signOut: () => { },
  signUp: () => { },
});
