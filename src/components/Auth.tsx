'use client'

import { useUser } from "@/state/user";

export default function Auth() {

    const { isAuth, setIsAuth } = useUser(state => state)
    
    return (
      <button onClick={() => setIsAuth(!isAuth)}>
        je suis auth {isAuth+""}
      </button>
    );
  }
  