import React, { useState } from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import Spinner from "../../components/Spinner/Spinner";
import { useUsers } from "../../context/UserContext";
import { supabase } from "../../supabase/connection";
import { FiExternalLink } from 'react-icons/fi'
import { useRouter } from "next/router";

export default function EditProfile({ setIsEdit }) {
  const { userData } = useUsers()
  const [firstName, setFirstName] = useState(userData ? userData.first_name : null);
  const [lastName, setLastName] = useState(userData ? userData.last_name : null);
  const [email, setEmail] = useState(userData ? userData.email : null);
  const [phone, setPhone] = useState(userData ? userData.phone : null);
  const [ig, setIg] = useState(userData ? userData.ig_url : null);
  const [lk, setLk] = useState(userData ? userData.link_url : null);
  const [gh, setGh] = useState(userData ? userData.gh_url : null);
  const router = useRouter()

  const handleClick = async () => {
    const { data: res, error } = await supabase
      .from("users")
      .update({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        ig_url: ig,
        link_url: lk,
        gh_url: gh,
      })
      .eq("id", userData.id);
    setIsEdit(false);
  };

  if (!userData) return <Spinner />

  return (
    <>
      <article className="grid grid-cols-2  gap-2 px-14 py-8">
        <div className="profileContainer">
          <p className="profileLabel">Nombre</p>
          <input
            className="profileInput"
            type={"text"}
            value={firstName}
            placeholder={userData.first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="profileContainer">
          <p className="profileLabel">Apellido</p>
          <input
            className="profileInput"
            value={lastName}
            type={"text"}
            placeholder={userData.last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
          <p className="profileData"></p>
        </div>
        <div className="profileContainer">
          <p className="profileLabel">Email</p>
          <div class="flex gap-3 items-center">
            <p>{userData.email}</p>
            <FiExternalLink onClick={() => router.push('perfil/cambiar-email')}/>
          </div>
          {/* <input
            className="profileInput"
            type={"text"}
            value={email}
            placeholder={userData.email}
            onChange={(e) => setEmail(e.target.value)}
          /> */}
        </div>

        <div className="profileContainer">
          <p className="profileLabel">Telefono</p>
          <input
            className="profileInput"
            type={"text"}
            value={phone}
            placeholder={userData.phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </article>
      <div className="profileContainer px-14">
        <p className="profileLabel">Redes</p>
        <div className="profileData flex flex-col gap-2">
          <div className="flex gap-4">
            <BsInstagram size={25} className="text-zinc-600" />
            <input
              className="profileInput"
              type="text"
              value={ig}
              placeholder="Ingresa tu Instagram"
              onChange={(e) => setIg(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <BsLinkedin size={25} className="text-zinc-600" />
            <input
              className="profileInput"
              type="text"
              value={lk}
              placeholder="Ingresa tu LinkedIn"
              onChange={(e) => setLk(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <BsGithub size={25} className="text-zinc-600" />
            <input
              className="profileInput"
              type="text"
              value={gh}
              placeholder="Ingresa tu GitHub"
              onChange={(e) => setGh(e.target.value)}
            />
          </div>
        </div>
        <button className="button mt-5 py-2" onClick={handleClick}>
          Actualizar
        </button>
      </div>
    </>
  );
}
