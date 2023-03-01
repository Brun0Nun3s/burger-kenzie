import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, ReactNode, useState } from 'react';
import { AxiosError } from 'types-axios';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

interface iDefaultProviderProps {
  children: ReactNode;
}
interface iUser {
  email: string;
  id: string;
  name: string;
}
interface iLogin {
  email: string;
  password: string;
}
interface iRegister {
  email: string;
  password: string;
  name: string;
}
interface iAxiosRegister {
  user: iUser;
  accessToken: string;
}

interface iUserContext {
  user: iUser | null;
  Register: (formData: iRegister) => void;
  Login: (formData: iLogin) => void;
  Logout: () => void;
}
export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<iUser | null>(null);
  const navigate = useNavigate();

  const Register = async (formData: iRegister) => {
    try {
      await api.post<iAxiosRegister>('/users', formData);

      toast.success('Cadastro realizado com sucesso!');
      navigate('/');
    } catch (error) {
      const currentError = error as AxiosError;
      console.log(currentError);
    }
  };

  const Login = async (formData: iLogin) => {
    try {
      const response = await api.post<iAxiosRegister>('/login', formData);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      localStorage.setItem('@USERID', response.data.user.id);
      toast.success('Login realizado!');
      setUser(response.data.user);
      navigate('/shop');
    } catch (error) {
      const currentError = error as AxiosError;
      console.log(currentError);
    }
  };
  const Logout = () => {
    setUser(null);
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@USERID');
    navigate('/');
  };
  return (
    <UserContext.Provider value={{ Login, Register, user, Logout }}>
      {children}
      <ToastContainer
        position='top-right'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </UserContext.Provider>
  );
};
