import * as React from "react";

import Layout from "../components/layout-index";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h1 className="text-4xl flex justify-center text-purple-400">hello</h1>
    </div>
    <div>
      <p className="justify-left flex-auto flex-wrap">
        This is my first attempt at creating a website.
      </p>
      <p className="justify-left flex-auto flex-wrap">
        If you've stuck around long enough to read this, you might as well check
        out my <a href="./blog">blog.</a> Thanks!
      </p>
    </div>
  </Layout>
);

export default IndexPage;