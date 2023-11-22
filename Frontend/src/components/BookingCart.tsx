"use client";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";
import deleteBooking from "@/libs/deleteBooking";
import { useRouter } from "next/navigation";

export default function BookingCart() {
    const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();
    console.log(bookItems);

    const router = useRouter()

    if (bookItems.length == 0) {
        return <p className="w-full text-center">No Campground Booking</p>;
    }
    return (
        <>
            <p className="w-full text-center text-3xl">My Booking</p>
            {bookItems.map((bookingItem) => {
                const onDelete = async () => {
                    try {
                        const res = await deleteBooking(bookingItem.id, "token");
                    } catch (error) {
                        console.error(error);
                    }
                    console.log(bookingItem)
                    alert("Booking Canceled")
                    router.push("/mybooking")
                };

                const onCancelBooking = () => {
                    onDelete(); // Call onDelete function
                    dispatch(removeBooking(bookingItem)); // Dispatch removeBooking action
                };

                return (
                    <div
                        className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                        key={bookingItem.id}
                    >
                        <div className="text-xl">Name: {bookingItem.name}</div>
                        <div className="text-xl">
                            Surname: {bookingItem.surname}
                        </div>
                        <div className="text-xl">
                            CitizenId: {bookingItem.id}
                        </div>
                        <div className="text-xl">
                            Campground: {bookingItem.campground}
                        </div>
                        <div className="text-xl">Date: {bookingItem.date1}</div>
                        <button
                            className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                        text-white shadow-sm"
                            onClick={onCancelBooking}
                        >
                            Cancel Booking
                        </button>
                    </div>
                );
            })}
        </>
    );
}
