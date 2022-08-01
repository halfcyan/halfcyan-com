import * as React from "react";

import Layout from "../components/layout-index";
import Seo from "../components/seo";
import musicID from "../../content/music/tidal-links"

let musicPage = () => {
    return (
    <Layout>
        <Seo title="Music" />
        <div>
            <h1 className="text-4xl flex justify-center text-purple-400">this is where I spam music.</h1>
        </div>
        <div>
            {musicID.map((element: string, i: React.Key | null | undefined) => (
            <iframe
                className="p-2"
                key={i}
                width="100%" 
                height="150" 
                src={`https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Ft%2F${element}&theme=dark`}
                frameBorder="0" 
                allowFullScreen 
                sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" 
                allow="clipboard-read; clipboard-write"
            >
            </iframe>
    ))}
        </div>
    </Layout>
    )
};

export default musicPage