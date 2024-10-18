import React from "react";
import Layout from "./layout";
import { Cardo } from "next/font/google";

function page() {
  return (
    <div>
      <div className={style.cards}>
        <card />
      </div>
    </div>
  );
}

export default page;
