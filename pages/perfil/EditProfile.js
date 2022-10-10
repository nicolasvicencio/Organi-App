import React, { useState } from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { supabase } from "../../supabase/connection";

export default function EditProfile({ userData, setIsEdit }) {
  const [firstName, setFirstName] = useState(userData.first_name);
  const [lastName, setLastName] = useState(userData.last_name);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState(userData.phone);
  const [ig, setIg] = useState(userData.ig_url);
  const [lk, setLk] = useState(userData.link_url);
  const [gh, setGh] = useState(userData.gh_url);

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
          <input
            className="profileInput"
            type={"text"}
            value={email}
            placeholder={userData.email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
