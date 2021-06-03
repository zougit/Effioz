import * as React from "react";
import Article from "../../Components/article";

function ArticleScreen({ route }) {
    return (
        <Article indexsrc={route.params?.index} />
    );
}

export default ArticleScreen;
