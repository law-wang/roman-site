import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/threelayout';
import Seo from '../components/seo';

const ArtTemplate = (props) => {
  const { pageContext } = props;
  const { pageTitle } = pageContext;

  const imageQuery = useStaticQuery(graphql`
    query {
      traditional: allFile(
        filter: { sourceInstanceName: { eq: "traditional" } }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      design: allFile(filter: { sourceInstanceName: { eq: "design" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      digital: allFile(filter: { sourceInstanceName: { eq: "digital" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const traditional = [];
  imageQuery.traditional.edges.map((data) =>
    traditional.push(getImage(data.node))
  );
  const design = [];
  imageQuery.design.edges.map((data) => design.push(getImage(data.node)));
  const digital = [];
  imageQuery.digital.edges.map((data) => digital.push(getImage(data.node)));

  let images = [];

  if (pageTitle === 'Traditional') {
    images = traditional;
  } else if (pageTitle === 'Design') {
    images = design.reverse();
  } else if (pageTitle === 'Digital') {
    images = digital.reverse();
  }

  return (
    <Layout>
      <Seo title={pageTitle} />

      <section className="gallery">
        <div className="gallery-nav">
          <div>
            <a href="/art/design">
              <span className="highlight">Design</span>
            </a>
          </div>
          <div>
            <a href="/art/traditional">
              <span className="highlight">Traditional</span>
            </a>
          </div>
          <div>
            <a href="/art/digital">
              <span className="highlight">Digital</span>
            </a>
          </div>
        </div>

        <div className="gallery-container">
          {images.map((data, index) => (
            <div className="gallery-image" key={index}>
              <GatsbyImage image={data} alt={data.name} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ArtTemplate;
