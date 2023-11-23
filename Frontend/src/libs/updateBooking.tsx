import { Dayjs } from "dayjs";

export default async function updateBooking(id: string, token: string, campground:string, bookingDate:Dayjs, checkoutDate:Dayjs) {
    console.log(campground)
    console.log(bookingDate.format("YYYY-MM-DD"))
    console.log(checkoutDate.format("YYYY-MM-DD"))
    const response = await fetch(
        `http://localhost:5000/api/v1/bookings/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NThiMzJjMDY2ODBjYzI1Njc1YzVjNiIsImlhdCI6MTcwMDMxMTg1MiwiZXhwIjoxNzMxODQ3ODUyfQ.9D7UEURSFqB-P7cyrI_jbI1E3QNoZY2BqMAhkEZzrZ0"
            },
            body: JSON.stringify({
                campground:campground,
                bookingDate:bookingDate.format("YYYY-MM-DD"),
                checkoutDate:checkoutDate.format("YYYY-MM-DD")
            })
        }
    );
    
    if (!response.ok) {
        throw new Error("Failed to update booking");
    }
    
    // If successful deletion, return a success message or indicate success
    return { success: true, message: "Booking updated successfully" };
}