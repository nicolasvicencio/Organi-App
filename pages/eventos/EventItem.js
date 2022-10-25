import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdAlarmAdd } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import Modal from "../../components/Modal/Modal";
import Spinner from "../../components/Spinner/Spinner";
import { supabase } from "../../supabase/connection";
import Error from "../../components/Error/Error";


export default function EventItem({ data }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(null)
  if (!data) return <Spinner />
  const formatDate = (date) => new Date(date).toLocaleDateString("es-ES");
  const priority = data.priority ? "★".repeat(data.id_priority).padEnd(3, "☆") : null;


  const handleEdit = async () => {
    const { data, error } = await supabase.from('event').update({})

  }

  const handleDelete = async () => {
    const { data, error } = await supabase.from('event').delete().eq('id', data.id)
    if (error) setError(error)
  }


  return (
    <div className="z-40 my-4 flex justify-between bg-white py-7 shadow-md">
      <div className="pl-4">
        <p className="font-bold ">{data.name}</p>
        <button className="bg-zinc-300 p-3 py-2 rounded-md hover:bg-zinc-400 font-light" onClick={() => setModalOpen(true)}>
          Ver detalles
        </button>
      </div>
      <p className="max-w-5 font-semibold text-blue-900">
        {formatDate(data.date_limit)}
      </p>
      <div>
        <span>{priority}</span>
      </div>
      <div>{priority}</div>
      {modalOpen && (
        <Modal setModalOpen={setModalOpen}>
          <div className="h-full flex-col justify-between gap-4">
            {error ? <Error message={error} /> : null}
            <div className="flex justify-between  gap-4 border-b-2  border-gray-300">
              <h3 className="font-bold text-gray-800">{data.name}</h3>
              <span className="text-xl font-bold text-gray-800 ">
                {priority}
              </span>
            </div>
            <div className="my-5">
              <p className="">
                Descripcion:{" "}
                <span className="font-light">{data.description}</span>
              </p>
              <p className="">
                Fecha_creacion:
                <span className="font-light">
                  {formatDate(data.date_creation)}
                </span>
              </p>
              <p className="">
                Fecha_termino:{" "}
                <span className="font-light">
                  {formatDate(data.date_limit)}
                </span>
              </p>
            </div>
            <div className="flex-col items-center justify-center gap-2 px-2">
              <section className="flex gap-2">
                <AiOutlineEdit size={20} color="gray" className="hover:text-gray-800" onClick={handleEdit} />
                {/* <MdAlarmAdd size={20} color="gray" className="hover:text-gray-800" onClick={handle}/> */}
                <BsTrash size={20} color="gray" className="hover:text-gray-800" onClick={handleDelete} />
              </section>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
