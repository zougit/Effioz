import * as React from "react";
import Book from "../../Components/book";

function BookScreen({ route }) {
    return (
        <Book indexsrc={route.params?.index} />
    );
}

export default BookScreen;
