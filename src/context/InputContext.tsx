"use client";

import { createContext, useState } from "react";
import { IContext, IChildren } from "@/types";

export const InputContext = createContext<IContext | null>(null);

function InputProvider({ children }: IChildren) {
  const [term, setTerm] = useState<string>("");

  return (
    <InputContext.Provider value={{ term, setTerm }}>
      {children}
    </InputContext.Provider>
  );
}

export { InputProvider };
