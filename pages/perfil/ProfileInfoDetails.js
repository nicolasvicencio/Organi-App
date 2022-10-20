import React, { useState } from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Spinner from '../../components/Spinner/Spinner'
import EditProfile from "./EditProfile";
import { useUsers } from "../../context/UserContext";


export default function ProfileInfoDetails() {
  const { userData } = useUsers()
  const [isEdit, setIsEdit] = useState(false);
  
  if (!userData) return <Spinner />;
  return (
    <div className=" cardBg  min-h-fit w-3/5 py-4 shadow-xl">
      <h2 className="border-b-2 border-gray-300 py-4 pl-8 text-2xl">
        {isEdit ? "Actualizar tu perfil" : "Informacion del usuario"}
      </h2>
      {isEdit ? (
        <EditProfile setIsEdit={setIsEdit} />
      ) : (
        <article className="grid grid-cols-2 gap-2 px-14 py-8">
          <div className="profileContainer">
            <p className="profileLabel">Nombre</p>
            <p className="profileData">{userData.first_name}</p>
          </div>
          <div className="profileContainer">
            <p className="profileLabel">Apellido</p>
            <p className="profileData">{userData.last_name}</p>
          </div>
          <div className="profileContainer">
            <p className="profileLabel">Email</p>
            <p className="profileData">{userData.email}</p>
          </div>
          <div className="profileContainer">
            <p className="profileLabel">Suscripción: </p>
            <p className="profileData">
              {userData.suscription ? "Premium" : "Basica"}
            </p>
          </div>
          <div className="profileContainer">
            <p className="profileLabel">Telefono</p>
            <p className="profileData">{userData.phone}</p>
          </div>
          <div className="profileContainer">
            <p className="profileLabel">Redes</p>
            <p className="profileData flex gap-2">
              {!userData.ig_url || userData.link_url || userData.gh_url ? 'Sin redes registradas' : null}
              {userData.ig_url ? <a
                href={userData.ig_url}
                target="_blamk"
                className="hover:text-gray-300"
              >
                <BsInstagram size={25} />
              </a> : null}
              {userData.link_url ? <a
                href={userData.link_url}
                target="_blamk"
                className='hover:text-gray-300'
              >
                <BsLinkedin size={25} />
              </a> : null}
              {userData.gh_url ? <a
                href={userData.gh_url}
                target="_blamk"
                className="hover:text-gray-300"
              >
                <BsTwitter size={25} />
              </a> : null}
            </p>
          </div>
          <button className="button mt-5 py-2" onClick={() => setIsEdit(true)}>
            Editar datos
          </button>
        </article>
      )
      }
    </div >
  );
}
