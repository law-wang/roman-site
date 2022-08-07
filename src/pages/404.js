import React from 'react';

import Seo from '../components/seo';
import Layout from '../components/threelayout';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404" />
    <div id="text">
      <span id="intro" className="highlight">
        This page does not exist.
      </span>
    </div>
  </Layout>
);

export default NotFoundPage;
