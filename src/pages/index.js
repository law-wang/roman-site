import React, { useState } from 'react';

import Seo from '../components/seo';
import '../styles/general.scss';

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <div id="text">
        <details>
          <summary>
            <span className="highlight">Lawrence Wang</span>
          </summary>
          <a
            className="highlight"
            href="https://www.instagram.com/rencewang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram&#x2197;&#xFE0E;
          </a>

          <a
            className="highlight"
            href="https://www.linkedin.com/in/lawrence-c-w/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin&#x2197;&#xFE0E;
          </a>
        </details>
        <details>
          <summary>
            <span className="highlight">Studies</span>
          </summary>
          <span className="highlight">
            Computer Science and Economics <br />
            Political Science
          </span>
        </details>
        <details>
          <summary>
            <span className="highlight">Takes Interests In</span>
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
        <details>
          <summary>
            <span className="highlight">Hopes to Become</span>
          </summary>
          <span className="highlight">
            Aspriational world traveller <br />
            Someone who draws, writes, and codes <br />
          </span>
        </details>
        [Note: Site Undergoing Renovation]
      </div>
    </>
  );
};

export default Index;
