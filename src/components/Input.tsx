"use client";

import { IContext } from "@/types";

const Input: React.FC<IContext> = ({ term, setTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search a coin..."
      className="w-full max-w-xs input input-bordered focus:outline-none focus:border-2 input-primary transition-all"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
    />
  );
};

export default Input;
