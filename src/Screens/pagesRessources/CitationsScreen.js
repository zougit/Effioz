import * as React from "react";
import Citation from "../../Components/citation";

function CitationScreen({ route }) {
    return (
        <Citation indexsrc={route.params?.index} />
    );
}

export default CitationScreen;
