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

export default function Form() {
    const nameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const citizenIdRef = useRef<HTMLInputElement>(null);

    const [campDate, setCampDate] = useState<Dayjs | null>(null);
    const [campLocation, setCampLocation] = useState<string>("Khao Yai");
    const [returnDate, setReturnDate] = useState<Dayjs | null>(null);

    const dispatch = useDispatch<AppDispatch>();

    const makeBooking = () => {
        if (
            nameRef.current &&
            surnameRef.current &&
            citizenIdRef.current &&
            campDate &&
            campLocation &&
            returnDate
        ) {
            const item: BookingItem = {
                name: nameRef.current.value.trim(),
                surname: surnameRef.current.value.trim(),
                id: citizenIdRef.current.value.trim(),
                campground: campLocation,
                date1: campDate.format("YYYY-MM-DD"),
                date2: returnDate.format("YYYY-MM-DD"),
            };
            alert("booking Success");
            dispatch(addBooking(item));
        }
    };

    const addNewBooking = async () => {
        if (nameRef.current && campDate && campLocation && returnDate) {
            // const name = nameRef.current.value.trim();
            // const address = AddCampgroundForm.get("address");
            // const district = AddCampgroundForm.get("district");
            // const province = AddCampgroundForm.get("province");
            // const postalcode = AddCampgroundForm.get("postalcode");
            // const tel = AddCampgroundForm.get("tel");
            // const picture = AddCampgroundForm.get("picture");
            // console.log(name);

            const bookingDate = campDate;
            const checkoutDate = returnDate;
            const name = nameRef.current.value.trim();
            const campground = campLocation;

            try {
                addNewBookingServerFunction({
                    name,
                    bookingDate,
                    checkoutDate,
                    campground,
                });
            } catch (error) {
                console.error("Error:", error);
            }
            // // const user
            // try {
            //     await dbConnect();
            //     const booking = await Booking.create({
            //         // name: name,
            //         // address: address,
            //         // district: district,
            //         // province: province,
            //         // postalcode: postalcode,
            //         // tel: tel,
            //         // picture: picture,
            //         bookingDate: bookingDate,
            //         checkoutDate: checkoutDate,
            //         name: name,
            //         campground: campground,
            //     });
            //     console.log(booking);
            // } catch (error) {
            //     console.log(error);
            // }
            // revalidateTag("campgrounds");
            // redirect("/campground");
        }
    };

    return (
        <>
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
                onClick={() => {
                    makeBooking();
                    addNewBooking();
                }}
            >
                Book Campground
            </button>
        </>
    );
}
