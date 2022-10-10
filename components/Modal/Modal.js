import React from "react";

export default function Modal({ children, setModalOpen }) {
  
  return (
    <article className="w-4/4 absolute inset-x-0 z-50 m-auto h-1/4 rounded-xl bg-zinc-100 shadow-xl md:w-2/5 ">
      <div className="h-full flex-col p-5 ">
        <div className="">{children}</div>
      </div>
      <button className="button absolute -bottom-5 left-[35%] w-52 min-w-fit" onClick={() => setModalOpen(false)}>Cerrar</button>
    </article>
  );
}
