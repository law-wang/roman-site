import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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

  let allArt = [traditional, design, digital];
  let artNames = ['Traditional', 'Design', 'Digital'];

  return (
    <>
      <Seo title={pageTitle} />

      <section className="gallery">
        {allArt.map((category, index) => (
          <details key={index} open={index === allArt.length - 1}>
            <summary>
              <span className="title highlight">{artNames[index]}</span>
            </summary>

            {category.map((data, index) => (
              <div className="gallery-image" key={index}>
                <GatsbyImage image={data} alt={data.name} />
              </div>
            ))}
          </details>
        ))}
      </section>
    </>
  );
};

export default ArtTemplate;
