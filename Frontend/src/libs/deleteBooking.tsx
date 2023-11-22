export default async function deleteBooking(id: string, token: string) {
    const response = await fetch(
        `http://localhost:5000/api/v1/bookings/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NThiMzJjMDY2ODBjYzI1Njc1YzVjNiIsImlhdCI6MTcwMDMxMTg1MiwiZXhwIjoxNzMxODQ3ODUyfQ.9D7UEURSFqB-P7cyrI_jbI1E3QNoZY2BqMAhkEZzrZ0"
            },
        }
    );
    
    if (!response.ok) {
        throw new Error("Failed to delete booking");
    }
    
    // If successful deletion, return a success message or indicate success
    return { success: true, message: "Booking deleted successfully" };
}
