import React,{useState} from "react";

const authContext = React.createContext();

function useAuth() {
  const isAuthed = localStorage.getItem('isAuthed');
  console.log('type 0f',typeof isAuthed);
  const [authed, setAuthed] = useState(isAuthed==='true' ? true : false);

  return {
    authed,
    login() {
      return new Promise((res,reject) => {
        setAuthed(true);
        localStorage.setItem('isAuthed', true);
        if(authed)
        res();
        else
        reject(false);
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        localStorage.setItem('isAuthed', false);
        res();
      });
    }
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}
