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
            <div className="category" key={index}>
              <div>
                <span className="title highlight">{year.fieldValue}</span>
              </div>

              {year.edges.map((post) => (
                <div key={post.node.id}>
                  <Link to={post.node.frontmatter.permalink}>
                    <span className="highlight">
                      {post.node.frontmatter.title
                        .replace('&#58;', ':')
                        .replace('&amp;', '&')}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          ))}
      </section>
    </>
  );
};

export default BlogPage;
