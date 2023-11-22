'use client'
import Link from "next/link"
import styles from "./topmenu.module.css"
import deleteCampground from "@/libs/deleteCampground";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default function RemoveCampgroundButton({
    params,token
}: {
    params: { hid: string },
    token: string;
}) {
    const onDelete = async () => {
        try {
            const res = await deleteCampground(params.hid, token);
        } catch (error) {
            console.error(error);
        }
        alert("Campground Deleted")
    };

    return (
        <button
            onClick={onDelete}
            className="block rounded-md bg-red-400 hover:bg-red-600 px-3 py-2
            text-white shadow-sm mt-5"
            >
            Remove
        </button>
    )
}