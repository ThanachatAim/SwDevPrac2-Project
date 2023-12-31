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
            state.bookItems.unshift(action.payload);
            state.bookItems = state.bookItems.slice(0, 3);
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
