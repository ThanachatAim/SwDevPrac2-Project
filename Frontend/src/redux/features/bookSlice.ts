import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type BookingState = {
    bookItems: BookingItem[];
};

const initialState: BookingState = { bookItems: [] };

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<BookingItem>) => {
            state.bookItems = [action.payload];
            console.log(state.bookItems);
        },
        removeBooking: (state, action: PayloadAction<BookingItem>) => {
            const remainItems = state.bookItems.filter((obj) => {
                return (
                    obj.campground !== action.payload.campground ||
                    obj.date !== action.payload.date
                );
            });
            state.bookItems = remainItems;
        },
    },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
