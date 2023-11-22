"use client"
import { dbConnect } from "@/db/dbConnect";
import User from "@/db/models/User";
import userRegister from "@/libs/userRegister";
import { revalidateTag } from "next/cache";
import { redirect, useRouter } from "next/navigation";

export default function AddNewUser() {

    const router = useRouter()
    
    const register = async (AddUser: FormData) => {
        try {
            const name = AddUser.get("name");
            const email = AddUser.get("email");
            const tel = AddUser.get("tel");
            const role = "user";
            const password = AddUser.get("password");
            const res = await userRegister(name as string, email as string, tel as string, role, password as string);
        } catch (error) {
            console.error(error);
        }
        alert("Register Successful")
        router.push("/api/auth/signin")
    };


    return (
        <form action={register}>
            <div className="text-xl text-blue-700">Create an Account</div>
            <div className="flex items-center w-1/2 my-2 m-auto">
                <label
                    className="w-auto block text-gray-700 pr-4"
                    htmlFor="name"
                >
                    Name
                </label>
                <input
                    type="text"
                    required
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>

            <div className="flex items-center w-1/2 my-2 m-auto">
                <label
                    className="w-auto block text-gray-700 pr-4"
                    htmlFor="email"
                >
                    email
                </label>
                <input
                    type="text"
                    required
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>

            <div className="flex items-center w-1/2 my-2 m-auto">
                <label
                    className="w-auto block text-gray-700 pr-4"
                    htmlFor="tel"
                >
                    Phone Number
                </label>
                <input
                    type="text"
                    required
                    id="tel"
                    name="tel"
                    placeholder="0812345678"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>

            <div className="flex items-center w-1/2 my-2 m-auto">
                <label
                    className="w-auto block text-gray-700 pr-4"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    type="password"
                    required
                    id="password"
                    name="password"
                    placeholder="Your Password"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            >
                Register
            </button>
        </form>
    );
}
