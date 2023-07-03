"use client";

import { useContext } from "react";
import { InputContext } from "@/context/InputContext";
import { IContext } from "@/types";

const Header = () => {
  const { term, setTerm } = useContext(InputContext) as IContext;

  return (
    <header className="flex justify-center items-center flex-col mb-14 mt-2">
      <h1 className="font-semibold text-2xl mb-4">Crypto Tracker</h1>
      <input
        type="text"
        placeholder="Search a coin..."
        className="input input-bordered input-primary w-full max-w-xs"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </header>
  );
};

export default Header;
