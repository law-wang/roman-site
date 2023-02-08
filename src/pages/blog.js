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
                updated(formatString: "YYYY[/]MM[/]DD ")
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
            <details className="category" key={index} open>
              <summary>
                <span className="title highlight">{year.fieldValue}</span>
              </summary>

              {year.edges.map((post) => (
                <details key={post.node.id}>
                  <summary>
                    <span className="highlight">
                      {post.node.frontmatter.title
                        .replace('&#58;', ':')
                        .replace('&amp;', '&')}
                    </span>
                  </summary>

                  <div>{post.node.frontmatter.updated}</div>
                  <span className="highlight">
                    {post.node.frontmatter.description}
                  </span>

                  <div>
                    <Link to={post.node.frontmatter.permalink}>
                      <span className="highlight">Read More</span>
                    </Link>
                  </div>
                </details>
              ))}
            </details>
          ))}
      </section>
    </>
  );
};

export default BlogPage;
