import React from 'react';

import Seo from '../components/seo';
import '../styles/general.scss';

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <div id="text">
        <details>
          <summary>
            <span className="title highlight">Lawrence Wang</span>
          </summary>
          <a
            href="https://www.instagram.com/rencewang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="highlight">Instagram</span>
          </a>

          <a
            href="https://www.linkedin.com/in/lawrence-c-w/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="highlight">Linkedin</span>
          </a>
        </details>

        <details open>
          <summary>
            <span className="title highlight">Studies</span>
          </summary>
          <span className="highlight">
            Computer Science and Economics <br />
            Political Science
          </span>
        </details>

        <details open>
          <summary>
            <span className="title highlight">Takes Interests In</span>
          </summary>
          <span className="highlight">
            Intersection between design and computing <br />
            Song lyrics <br />
            Chinese poems and fiction <br />
            Grand strategy games <br />
            Singing <br />
            Interior design <br />
            Cities Skylines <br />
            The European Union <br />
            Web design <br />
            Room sprays <br />
            Fantasy world building <br />
            Floor plans <br />
            Political economy of China <br />
            Architecture <br />
            Genshin Impact <br />
          </span>
        </details>

        <details open>
          <summary>
            <span className="title highlight">Hopes to Become</span>
          </summary>
          <span className="highlight">
            Aspriational world traveller <br />
            Someone who draws, writes, and codes <br />
          </span>
        </details>
      </div>
    </>
  );
};

export default Index;
