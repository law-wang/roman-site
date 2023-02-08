import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Seo from '../components/seo';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query BlogNavigationQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: { type: { eq: "post" }, published: { eq: true } }
        }
        sort: { fields: [frontmatter___updated], order: DESC }
      ) {
        year: group(field: frontmatter___year) {
          fieldValue
          edges {
            node {
              frontmatter {
                title
                permalink
                updated(formatString: "MMMM DD")
                description
              }
              id
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <Seo title="Blog" />
      <section>
        {data.allMarkdownRemark.year
          .slice(0)
          .reverse()
          .map((year, index) => (
            <details key={index} open>
              <summary>
                <span className="title highlight">{year.fieldValue}</span>
              </summary>

              {year.edges.map((post, postIndex) => (
                <details key={postIndex}>
                  <summary>
                    <span className="highlight">
                      {post.node.frontmatter.title
                        .replace('&#58;', ':')
                        .replace('&amp;', '&')}
                    </span>
                  </summary>

                  <div></div>
                  <span className="highlight">
                    On {post.node.frontmatter.updated}:{' '}
                    {post.node.frontmatter.description}
                  </span>

                  <Link to={post.node.frontmatter.permalink}>
                    <span className="highlight">Read More</span>
                  </Link>
                </details>
              ))}
            </details>
          ))}
      </section>
    </>
  );
};

export default BlogPage;
