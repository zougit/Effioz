import * as React from "react";
import Podcasts from "../../Components/Podcasts";

function PodcastsScreen({ route }) {
    return (
        <Podcasts indexsrc={route.params?.index} />
    );
}

export default PodcastsScreen;
