"use client";

import Modal from "./Modal";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useSignUpModal from "@/hooks/useSignUpModal";
import SubmitButton from "@/components/forms/CustomButton";
import apiService from "@/services/apiService";
import { handleLogin } from "@/lib/actions";

const SignUpModal = () => {
    const router = useRouter();
    const signUpModal = useSignUpModal();
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setError] = useState<string[]>([]);

    const submitSignUp = async () => {
        const formData = {
            email: email,
            password1: password1,
            password2: password2,
        };

        const response = await apiService.post("/api/auth/register/", formData);
        console.log(response);

        if (response.access) {
            await handleLogin(
                response.user.pk,
                response.access,
                response.refresh
            );
            signUpModal.close();
            router.push("/");
        } else {
            const errors: string[] = Object.values(response).map(
                (error: any) => {
                    return error;
                }
            );
            setError(errors);
        }
    };

    const content = (
        <div className="">
            <h2 className="mb-6 text-2xl font-semibold">Welcome to Airdnd</h2>
            <form action={submitSignUp} className="space-y-4">
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
                    placeholder="Email"
                />
                <input
                    onChange={(e) => setPassword1(e.target.value)}
                    type="password"
                    className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
                    placeholder="Password"
                />
                <input
                    onChange={(e) => setPassword2(e.target.value)}
                    type="password"
                    className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
                    placeholder="Repeat password"
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
            isOpen={signUpModal.isOpen}
            label="Sign up"
            content={content}
            close={signUpModal.close}
        />
    );
};

export default SignUpModal;
