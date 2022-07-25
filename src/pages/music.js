import * as React from "react";

import Layout from "../components/layout-index";
import Seo from "../components/seo";

const musicPage = () => (
<Layout>
    <Seo title="Music" />
    <div>
        <iframe 
            width="100%" 
            height="150" 
            src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Ft%2F72692903&theme=dark" 
            frameborder="0" 
            allowfullscreen 
            sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" 
            allow="clipboard-read; clipboard-write">Perfect Run by Crooked Colours</iframe>
    </div>
</Layout>
);

export default musicPage