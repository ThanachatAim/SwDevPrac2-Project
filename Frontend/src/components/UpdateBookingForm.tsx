"use client";
import { dbConnect } from "@/db/dbConnect";
import addNewBookingServerFunction from "./addNewBookingServerFunction";
import LocationDateReserve from "@/components/LocationDateReserve";
import { useState, useRef } from "react";
import { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../interfaces";
import { addBooking } from "@/redux/features/bookSlice";
import Booking from "@/db/models/Booking";
import updateBooking from "@/libs/updateBooking";
import { useRouter } from "next/navigation";

export default function UpdateBookingForm({ bookingId }: { bookingId: string }) {
    const nameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const citizenIdRef = useRef<HTMLInputElement>(null);

    const router = useRouter()

    const [campDate, setCampDate] = useState<Dayjs | null>(null);
    const [campLocation, setCampLocation] = useState<string>("Khao Yai");
    const [returnDate, setReturnDate] = useState<Dayjs | null>(null);

    const editBooking = async (UpdateBookingForm: FormData) => {
        console.log(bookingId)
        if (campDate && campLocation && returnDate) {
            const bookingDate = campDate;
            const checkoutDate = returnDate;
            // const name = nameRef.current.value.trim();
            let campground = "6558c43c9a8f113331b57bed";
            if (campLocation == "Doi Inthanon") {
                campground = "6558c4df9a8f113331b57bf0";
            } else if (campLocation == "Phu Chifa") {
                campground = "6558c6729a8f113331b57bf3";
            }
        try {
            const res = await updateBooking(bookingId,"token",campground,bookingDate,checkoutDate);
        } catch (error) {
            console.error(error);
        }}
        alert("Updated Successful")
        router.push("/mybooking")
    }

    return (
        <form action={editBooking}>
            <div className="w-fit space-y-2 rounded border-slate-400">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="rounded ring-1 ring-inset flex-1 border-1 bg-transparent py-1.5 pl-1 
            text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="สมชาย"
                    required
                    ref={nameRef}
                />
                <label
                    htmlFor="surname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Surname
                </label>
                <input
                    type="text"
                    name="surname"
                    id="surname"
                    autoComplete="surname"
                    className="rounded ring-1 ring-inset flex-1 border-1 bg-transparent py-1.5 pl-1 
            text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="ใจดี"
                    required
                    ref={surnameRef}
                />
                <label
                    htmlFor="citizen"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Citizen ID
                </label>
                <input
                    type="text"
                    name="citizen"
                    id="citizen"
                    autoComplete="citizen"
                    className="rounded ring-1 ring-inset flex-1 border-1 bg-transparent py-1.5 pl-1 
            text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="1234567890000"
                    required
                    ref={citizenIdRef}
                />
                <div className="text-md text-left text-gray-600">
                    Select Date and Location
                </div>
                <LocationDateReserve
                    onDateChange={(value: Dayjs) => {
                        setCampDate(value);
                    }}
                    onLocationChange={(value: string) => {
                        setCampLocation(value);
                    }}
                    disableLocationSelection={false}
                />
                <div className="text-md text-left text-gray-600">
                    Select Return Date
                </div>
                <LocationDateReserve
                    onDateChange={(value: Dayjs) => {
                        setReturnDate(value);
                    }}
                    onLocationChange={(value: string) => {
                        // setCampLocation(value);
                    }}
                    disableLocationSelection={true}
                />
            </div>

            <button
                className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
    text-white shadow-sm"
            >
                Update Campground
            </button>
        </form>
    );
}
