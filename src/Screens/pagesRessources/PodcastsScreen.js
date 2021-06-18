import * as React from "react";
import Podcasts from "../../Components/podcasts";

function PodcastsScreen({ route }) {
    return (
        <Podcasts indexsrc={route.params?.index} />
    );
}

export default PodcastsScreen;
