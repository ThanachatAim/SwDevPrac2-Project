"use server";

import { dbConnect } from "@/db/dbConnect";
import Booking from "@/db/models/Booking";
import { Dayjs } from "dayjs";

export default async function addNewBookingServerFunction({
    name,
    bookingDate,
    checkoutDate,
    campground,
    username
}: {
    name: string;
    bookingDate: Dayjs | null;
    checkoutDate: Dayjs | null;
    campground: string;
    username: string
}) {
    try {
        await dbConnect();
        const booking = await Booking.create({
            bookingDate: bookingDate,
            checkoutDate: checkoutDate,
            user: name,
            campground: campground,
            username: username,
        });
        console.log(booking);
    } catch (error) {
        console.log(error);
    }
}
