import { SignupInput } from "@karan_raul/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

import { BACKEND_URL } from "../config";
export const Auth = ({ type }: { type: "signin" | "signup" }) => {

    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`, postInputs);
            const jwt = response.data.jwt;
            // console.log(response)
            localStorage.setItem("token", jwt);
            navigate('/blogs');
        } catch (error) {
            alert('error ')
        }
    }
    return (
        <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center">
                <div className="px-10">

                    <div className="font-extrabold text-3xl">
                        {type === "signin" ? "login into account" : "create an account"}
                    </div>
                    <div className="text-slate-400">
                        {type === "signin" ? "Dont have an accout?" : "Already have an account? "}
                        <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "signUp" : "SignIn"}
                        </Link>
                    </div>
                    <div className="pt-8">
                        {type === "signup" && < LabelledInput label="Name" placeholder="Name" onChange={(e: ChangeEvent<HTMLInputElement>) => { setPostInputs({ ...postInputs, name: e.target.value }) }} />}
                        <LabelledInput label="Email" placeholder="Doe" onChange={(e: ChangeEvent<HTMLInputElement>) => { setPostInputs({ ...postInputs, email: e.target.value }) }} />
                        <LabelledInput label="Password" type="password" placeholder="Password" onChange={(e: ChangeEvent<HTMLInputElement>) => { setPostInputs({ ...postInputs, password: e.target.value }) }} />
                        <button type="button" onClick={sendRequest}
                            className="text-white w-full p-2.5 mt-4  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signin" ? "Sing In" : "Sing Up"}</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: any;
    type?: string
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return (
        <div>
            <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-bold  text-gray-900 dark:text-black pt-2">{label}</label>
                <input id="first_name" onChange={onChange} placeholder={placeholder} type={type || "text"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5 " required />
            </div>
        </div>
    )
}