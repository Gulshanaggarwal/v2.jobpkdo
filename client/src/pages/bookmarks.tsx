import Protected from "../components/Protected";
import BookMarkContextProvider from "../context/BookMarkContext";
import MainBookMark from "../components/MainBookMarks";



export default function Bookmarks() {

    return (
        <Protected>
            <BookMarkContextProvider>
                <MainBookMark />
            </BookMarkContextProvider>
        </Protected>
    )
}