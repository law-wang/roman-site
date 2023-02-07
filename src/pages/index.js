import React, { useState } from 'react';

import Seo from '../components/seo';
import Popup from '../components/popup';
import '../styles/general.scss';

const Index = () => {
  const [studyVisible, setStudyVisible] = useState(false);
  const [likeVisible, setLikeVisible] = useState(false);
  const [becomeVisible, setBecomeVisible] = useState(false);

  return (
    <>
      <Seo title="Home" />

      <Popup
        id="studies"
        content="Computer Science and Economics, and Political Science"
        top="30%"
        left="30%"
        visible={studyVisible}
        setVisible={setStudyVisible}
      />

      <Popup
        id="likes"
        content="The intersection between design and computing, song lyrics, room sprays, Chinese poems and fiction, grand strategy games, interior design, Cities Skylines, floor plans"
        top="25%"
        left="25%"
        visible={likeVisible}
        setVisible={setLikeVisible}
      />

      <Popup
        id="become"
        content="Someone who draws, writes, and codes"
        top="20%"
        left="20%"
        visible={becomeVisible}
        setVisible={setBecomeVisible}
      />

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
            Someone who draws, writes, and codes <br />
          </span>
        </details>
      </div>
    </>
  );
};

export default Index;
