"use client";

import Modal from "./Modal";

import { useRouter } from "next/navigation";
import { useState } from "react";
import useLoginModal from "@/hooks/useLoginModal";
import SubmitButton from "@/components/forms/CustomButton";
import { handleLogin } from "@/lib/actions";

import apiService from "@/services/apiService";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState<string[]>([]);

  const submitLogin = async () => {
    try {
      const response = await apiService.post("/api/auth/login/", {
        email,
        password,
      });

      console.log("Login response:", response);

      if (response.access) {
        await handleLogin(response.user.pk, response.access, response.refresh);
        loginModal.close();
        router.push("/");
      } else {
        setError(response.non_field_errors || ["Login failed"]);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(["Something went wrong. Check the console."]);
    }
  };

  const content = (
    <div className="">
      <h2 className="mb-6 text-2xl font-semibold">Welcome to Airbnb</h2>
      <form action={submitLogin} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          placeholder="Password"
        />
        {errors.map((error, index) => {
          return (
            <div
              key={index}
              className="p-5 bg-airbnb text-white rounded-xl opacity-60"
            >
              {error}
            </div>
          );
        })}
        <SubmitButton label="Continue" className="w-full" />
      </form>
    </div>
  );
  return (
    <Modal
      isOpen={loginModal.isOpen}
      label="Login"
      content={content}
      close={loginModal.close}
    />
  );
};

export default LoginModal;
