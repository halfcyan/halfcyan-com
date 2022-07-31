import * as React from "react";

import Layout from "../components/layout-index";
import Seo from "../components/seo";
import musicID from "../../content/music/tidal-links"

let musicElements = "";

musicID.forEach(element => 
    musicElements = musicElements + `<iframe width="100%" 
    height="150" 
    src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Ft%2F{element}&theme=dark"
    frameborder="0" 
    allowfullscreen 
    sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" 
    allow="clipboard-read; clipboard-write"></iframe>`
);

const musicPage = () => (
    <Layout>
        <Seo title="Music" />
        <div>
            <h1 className="text-4xl flex justify-center text-purple-400">this is where I spam music.</h1>
        </div>
        <div>
            {musicID.map((element, i) => (
                <iframe
                    className="p-2"
                    key={i}
                    width="100%" 
                    height="150" 
                    src={`https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Ft%2F${element}&theme=dark`}
                    frameborder="0" 
                    allowfullscreen 
                    sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox" 
                    allow="clipboard-read; clipboard-write"
                >
                </iframe>
            ))}
        </div>
    </Layout>
);

export default musicPage