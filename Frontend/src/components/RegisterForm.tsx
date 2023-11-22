"use client";
import { register } from "../logic/user";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const router = useRouter();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
  });

  const onChange = (e: any) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      console.log(registerData);
      const res = await register(registerData);
      console.log(res);
      if (res.success) {
        router.push("/user/login");
      }
    } catch (error) {
      alert("Register Failed");
    }
  };

  return (
    <form className="flex flex-col gap-3" action={onSubmit}>
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="standard"
        onChange={onChange}
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        variant="standard"
        type={"email"}
        onChange={onChange}
      />
      <TextField
        id="tel"
        name="tel"
        label="Telephone"
        variant="standard"
        onChange={onChange}
      />
      <TextField
        id="password"
        name="password"
        type="password"
        label="Password"
        variant="standard"
        onChange={onChange}
      />
      <button className="text-white rounded-md py-1 px-3 bg-secondary-500 hover:bg-secondary-300">
        Register
      </button>
    </form>
  );
}