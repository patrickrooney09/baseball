import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <Link href="/">Home </Link>
      <Link href="/about">About </Link>
      <Link href="scores">Scores </Link>
    </div>
  );
};

export default NavBar;
