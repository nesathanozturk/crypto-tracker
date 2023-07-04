"use client";

import { useContext } from "react";
import { InputContext } from "@/context/InputContext";
import { IContext } from "@/types";
import Input from "./Input";

const Header = () => {
  const { term, setTerm } = useContext(InputContext) as IContext;

  return (
    <header className="flex justify-center items-center flex-col mb-14 mt-2">
      <h1 className="font-semibold text-2xl mb-4">Crypto Tracker</h1>
      <Input term={term} setTerm={setTerm} />
    </header>
  );
};

export default Header;
