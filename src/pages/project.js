import React from 'react';

import Seo from '../components/seo';
import '../styles/general.scss';

const ProjectPage = () => {
  return (
    <>
      <Seo title="Projects" />

      <section id="project">
        <details className="project-item" open>
          <summary>
            <span className="title highlight">Spotlist Analysis</span>
            &nbsp;&nbsp;
            <span className="highlight project-year">2022</span>
          </summary>

          <span className="highlight">
            Expansion on Spotlist that offers insights into user created
            playlists, such as genre and audio features, using Next.js
          </span>

          <a href="https://spot.rence.la/">
            <span className="highlight">View</span>
          </a>
        </details>

        <details className="project-item">
          <summary>
            <span className="title highlight">Remember</span>&nbsp;&nbsp;
            <span className="highlight project-year">2022</span>
          </summary>

          <span className="highlight">
            Project for Media and Democracy, Fall 2022
          </span>
          <a href="https://remember.rence.la/">
            <span className="highlight">View</span>
          </a>
        </details>

        <details className="project-item">
          <summary>
            <span className="title highlight">
              Media's Role in American Public Opinion of China
            </span>
            &nbsp;&nbsp;
            <span className="highlight project-year">2022</span>
          </summary>

          <span className="highlight">
            Project for Media and Democracy, Fall 2022
          </span>
          <a href="https://media.rence.la/">
            <span className="highlight">View</span>
          </a>
        </details>

        <details className="project-item">
          <summary>
            <span className="title highlight">
              Electoral System in the P.R.C.
            </span>
            &nbsp;&nbsp;
            <span className="highlight project-year">2022</span>
          </summary>

          <span className="highlight">
            Project for Comparative Political Parties and Electoral Systems,
            Fall 2022
          </span>

          <a href="https://prc.rence.la/">
            <span className="highlight">View</span>
          </a>
        </details>

        <details className="project-item">
          <summary href="https://idioms.rence.la/">
            <span className="title highlight">Listing Idioms</span>
          </summary>
          &nbsp;&nbsp;
          <span className="highlight project-year">2022</span>
        </details>

        <details className="project-item">
          <summary href="https://thoughts.rence.la/">
            <span className="title highlight">Thoughts</span>
          </summary>
          &nbsp;&nbsp;
          <span className="highlight project-year">2019-Present</span>
          <div>
            <span className="highlight">
              Type-foundry-esque platform for logging daily thoughts, powered by
              AWS Amplify
            </span>
          </div>
        </details>

        <details className="project-item">
          <summary href="https://spotlist.netlify.app/">
            <span className="title highlight">Spotlist</span>
          </summary>
          &nbsp;&nbsp;
          <span className="highlight project-year">2020-2021</span>
          <div>
            <span className="highlight">
              Retrieve information about any Spotify playlist, built with React
              and Spotify API
            </span>
          </div>
          <a href="https://remember.rence.la/">
            <span className="highlight">View</span>
          </a>
        </details>

        <details className="project-item">
          <summary href="https://inmydefense.glitch.me/">
            <span className="title highlight">In My Defense</span>
          </summary>
          &nbsp;&nbsp;
          <span className="highlight project-year">2019-2021</span>
          <a href="https://remember.rence.la/">
            <span className="highlight">View</span>
          </a>
        </details>

        <details className="project-item">
          <summary href="https://www.planneduniverse.com/">
            <span className="title highlight">Planned Universe</span>
          </summary>
          &nbsp;&nbsp;
          <span className="highlight project-year">2020</span>
          <div>
            <span className="highlight">
              Blog for collecting floor plans built with Gatsby
            </span>
          </div>
          <a href="https://remember.rence.la/">
            <span className="highlight">View</span>
          </a>
        </details>

        <details className="project-item">
          <summary href="https://10of10s.netlify.app/">
            <span className="title highlight">10 Albums of 2010s</span>
          </summary>
          &nbsp;&nbsp;
          <span className="highlight project-year">2019</span>
          <div>
            <span className="highlight">
              Showcase of book-binding project for ART 006: Art of the Printed
              Word, brought online using the Last.fm API
            </span>
          </div>
          <a href="https://remember.rence.la/">
            <span className="highlight">View</span>
          </a>
        </details>

        <details className="project-item">
          <summary href="https://chrome.google.com/webstore/detail/breathe-minimalist-new-ta/ngcbnnpkcfomilobdpffbkcabmehjnbm">
            <span className="title highlight">Breathe</span>
          </summary>
          &nbsp;&nbsp;
          <span className="highlight project-year">2019</span>
          <div>
            <span className="highlight">
              Minimalist new page extension that reminds one to breathe
            </span>
          </div>
          <a href="https://remember.rence.la/">
            <span className="highlight">View</span>
          </a>
        </details>

        <details className="project-item">
          <summary href="https://chiaski.github.io/politic-hopefuls/">
            <span className="title highlight">The Politic Hopefuls</span>
          </summary>
          &nbsp;&nbsp;
          <span className="highlight project-year">2019</span>
        </details>

        <a href="https://remember.rence.la/">
          <span className="highlight">View</span>
        </a>
      </section>
    </>
  );
};

export default ProjectPage;
