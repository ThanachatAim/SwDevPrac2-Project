import { dbConnect } from "@/db/dbConnect";
import Campground from "@/db/models/Campground";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default function AddHospitalForm() {
    const addHospital = async (AddHospitalForm: FormData) => {
        "use server";
        const name = AddHospitalForm.get("name");
        const address = AddHospitalForm.get("address");
        const district = AddHospitalForm.get("district");
        const province = AddHospitalForm.get("province");
        const postalcode = AddHospitalForm.get("postalcode");
        const tel = AddHospitalForm.get("tel");
        const picture = AddHospitalForm.get("picture");
        console.log(name);
        try {
            await dbConnect();
            const hospital = await Campground.create({
                name: name,
                address: address,
                district: district,
                province: province,
                postalcode: postalcode,
                tel: tel,
                picture: picture,
            });
            console.log(hospital);
        } catch (error) {
            console.log(error);
        }
        revalidateTag("hospitals");
        redirect("/hospital");
    };

    return (
        <form action={addHospital}>
            <div className="text-xl text-blue-700">Add Hospital</div>
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
                    placeholder="Hospital Name"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>
            <div className="flex items-center w-1/2 my-2 m-auto">
                <label
                    className="w-auto block text-gray-700 pr-4"
                    htmlFor="address"
                >
                    Address
                </label>
                <input
                    type="text"
                    required
                    id="address"
                    name="address"
                    placeholder="Hospital Address"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>
            <div className="flex items-center w-1/2 my-2 m-auto">
                <label
                    className="w-auto block text-gray-700 pr-4"
                    htmlFor="district"
                >
                    District
                </label>
                <input
                    type="text"
                    required
                    id="district"
                    name="district"
                    placeholder="Hospital District"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>
            <div className="flex items-center w-1/2 my-2 m-auto">
                <label
                    className="w-auto block text-gray-700 pr-4"
                    htmlFor="province"
                >
                    Province
                </label>
                <input
                    type="text"
                    required
                    id="province"
                    name="province"
                    placeholder="Hospital Province"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>
            <div className="flex items-center w-1/2 my-2 m-auto">
                <label
                    className="w-auto block text-gray-700 pr-4"
                    htmlFor="postalcode"
                >
                    Postal Code
                </label>
                <input
                    type="text"
                    required
                    id="postalcode"
                    name="postalcode"
                    placeholder="Hospital Postal Code"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>
            <div className="flex items-center w-1/2 my-2 m-auto">
                <label className="w-auto  text-gray-700 pr-4 " htmlFor="tel">
                    Telephone Number
                </label>
                <input
                    type="text"
                    required
                    id="tel"
                    name="tel"
                    placeholder="Hospital Telephone Number"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>
            <div className="flex items-center w-1/2 my-2 m-auto">
                <label
                    className="w-auto block text-gray-700 pr-4"
                    htmlFor="picture"
                >
                    Picture
                </label>
                <input
                    type="text"
                    required
                    id="picture"
                    name="picture"
                    placeholder="URL"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 
                        text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            >
                Add New Campground
            </button>
        </form>
    );
}
