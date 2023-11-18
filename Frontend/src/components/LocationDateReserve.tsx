'use client'
import { useState } from 'react'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"
import { Dayjs } from 'dayjs'

export default function LocationDateReserve({onDateChange, onLocationChange}
    :{onDateChange:Function, onLocationChange:Function}){

    const [reserveDate, setReservation] = useState<Dayjs | null>(null)
    const [location, setLocation] = useState('Khao Yai')

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 
        w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={reserveDate}
                onChange={(value)=>{setReservation(value); onDateChange(value)}}/>
            </LocalizationProvider>
            <Select variant="standard" 
            name="location" id="location" value={location}
            onChange={(e)=>{setLocation(e.target.value); onLocationChange(e.target.value)}}
            className="h-[2em] w-[200px]">
                <MenuItem value="Khao Yai">Khao Yai</MenuItem>
                <MenuItem value="Doi Inthanon">Doi Inthanon</MenuItem>
                <MenuItem value="Phu Chifa">Phu Chifa</MenuItem>
            </Select>
        </div>
    )
}