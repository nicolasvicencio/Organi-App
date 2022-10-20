import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdAlarmAdd } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import Modal from "../../components/Modal/Modal";
import Spinner from "../../components/Spinner/Spinner";


export default function EventItem({ data }) {
  const [modalOpen, setModalOpen] = useState(false);
  if (!data) return <Spinner />
  const formatDate = (date) => new Date(date).toLocaleDateString("es-ES");
  const priority = data.priority ? "★".repeat(data.id_priority).padEnd(3, "☆") : null;


  return (
    <div className="z-40 my-4 flex justify-between bg-white py-7 shadow-md">
      <div className="pl-4">
        <p className="font-bold ">{data.name}</p>
        <button className="hover:text-gray-600 font-light" onClick={() => setModalOpen(true)}>
          Ver detalles
        </button>
      </div>
      <p className="max-w-5 font-semibold text-blue-900">
        {formatDate(data.date_limit)}
      </p>
      <div>{priority}</div>
      {modalOpen && (
        <Modal setModalOpen={setModalOpen}>
          <div className="h-full flex-col justify-between gap-4">
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
                <AiOutlineEdit size={20} color="gray" />
                <MdAlarmAdd size={20} color="gray" />
                <BsTrash size={20} color="gray" />
              </section>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
