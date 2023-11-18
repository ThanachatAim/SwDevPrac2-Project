'use client'

import LocationDateReserve from "@/components/LocationDateReserve"
import { useState, useRef } from "react"
import { Dayjs } from 'dayjs'
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { BookingItem } from "../../interfaces"
import { addBooking } from "@/redux/features/bookSlice"



export default function Form(){

    const nameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const citizenIdRef = useRef<HTMLInputElement>(null);

    const [vaccineDate, setVacineDate] = useState<Dayjs|null>(null)
    const [vaccineLocation, setVacineLocation] = useState<string>("Chula")

    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = ()=>{
        if(nameRef.current && surnameRef.current && citizenIdRef.current && vaccineDate && vaccineLocation) {
           const item:BookingItem = {
                name: nameRef.current.value.trim(),
                surname: surnameRef.current.value.trim(),
                id: citizenIdRef.current.value.trim(),
                hospital: vaccineLocation,
                date: vaccineDate.format("YYYY-MM-DD")
           }
           alert('booking Success')
           dispatch(addBooking(item))
        }
    }
    
    return(<>
        <div className="w-fit space-y-2 rounded border-slate-400">
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
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
        <label htmlFor="surname" className="block text-sm font-medium leading-6 text-gray-900">
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
        <label htmlFor="citizen" className="block text-sm font-medium leading-6 text-gray-900">
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
        <div className="text-md text-left text-gray-600">Select Date and Location</div>
        <LocationDateReserve onDateChange={(value:Dayjs)=>{setVacineDate(value)}} 
        onLocationChange={(value:string)=>{setVacineLocation(value)}}/>
    </div>
    
    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
    text-white shadow-sm" onClick={makeBooking}>
        Book Vaccine Center
    </button>
    </>
    )
}