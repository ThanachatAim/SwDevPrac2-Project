import { dbConnect } from "@/db/dbConnect";
import User from "@/db/models/User";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default function AddNewUser() {
    const addUser = async (AddUser: FormData) => {
        "use server";
        const name = AddUser.get("name");
        const email = AddUser.get("email");
        const tel = AddUser.get("tel");
        const role = "user";
        const password = AddUser.get("password");
        try {
            await dbConnect();
            const user = await User.create({
                name: name,
                email: email,
                tel: tel,
                role: role,
                password: password,
            });
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form action={addUser}>
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
                    htmlFor="name"
                >
                    Password
                </label>
                <input
                    type="text"
                    required
                    id="Password"
                    name="Password"
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
