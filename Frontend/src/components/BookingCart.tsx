"use client"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeBooking } from "@/redux/features/bookSlice"

export default function BookingCart() {
    
    const bookItems = useAppSelector((state)=> state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()
    console.log(bookItems)

    if(bookItems.length == 0){
        return <p className="w-full text-center">
            No Vaccine Booking
        </p>
    }
    return (
        <>
        <p className="w-full text-center text-3xl">My Booking</p>
        {
            bookItems.map((bookingItem)=>{
                return <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                    key={bookingItem.id}>
                        <div className="text-xl">Name: {bookingItem.name}</div>
                        <div className="text-xl">Surname: {bookingItem.surname}</div>
                        <div className="text-xl">CitizenId: {bookingItem.id}</div>
                        <div className="text-xl">Vaccine Center: {bookingItem.hospital}</div>
                        <div className="text-xl">Date: {bookingItem.date}</div>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                        text-white shadow-sm" onClick={()=>dispatch(removeBooking(bookingItem))}>
                            Cancel Booking
                        </button>
                </div>
            })
        }
        </>
    )
}