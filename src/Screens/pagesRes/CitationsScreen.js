import * as React from "react";
import Citation from "../../Components/Citation";

function CitationScreen({ route }) {
    return (
        <Citation indexsrc={route.params?.index} />
    );
}

export default CitationScreen;
