import { dbConnect } from "@/db/dbConnect";
import Campground from "@/db/models/Campground";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default function AddCampgroundForm() {
    const addCampground = async (AddCampgroundForm: FormData) => {
        "use server";
        const name = AddCampgroundForm.get("name");
        const address = AddCampgroundForm.get("address");
        const district = AddCampgroundForm.get("district");
        const province = AddCampgroundForm.get("province");
        const postalcode = AddCampgroundForm.get("postalcode");
        const tel = AddCampgroundForm.get("tel");
        const picture = AddCampgroundForm.get("picture");
        console.log(name);
        try {
            await dbConnect();
            const campground = await Campground.create({
                name: name,
                address: address,
                district: district,
                province: province,
                postalcode: postalcode,
                tel: tel,
                picture: picture,
            });
            console.log(campground);
        } catch (error) {
            console.log(error);
        }
        revalidateTag("campgrounds");
        redirect("/campground");
    };

    return (
        <form action={addCampground}>
            <div className="text-xl text-blue-700">Add Campground</div>
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
                    placeholder="Campground Name"
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
                    placeholder="Campground Address"
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
                    placeholder="Campground District"
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
                    placeholder="Campground Province"
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
                    placeholder="Campground Postal Code"
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
                    placeholder="Campground Telephone Number"
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
