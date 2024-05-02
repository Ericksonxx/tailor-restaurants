export interface User {
    _id: string;
    name: string;
    email: string | undefined;
  }


export interface UserType {
    user: User | null;
    signupUser: (name: string, email: string, password: string) => Promise<void>;
    loginUser: (email: string, password: string) => Promise<User>;
    logOutUser: (id: string | undefined) => Promise<void>;
  }