import React from "react";
import "./Links.css";

const Links = () => {
  return (
    <div className="links">
      <div className="inner_links">
        <a className="github" href="https://github.com/Aquibyounis" target="_blank" rel="noopener noreferrer">
          <p>GITHUB</p> <i className="l1 fa-brands fa-github"></i>
        </a>

        <a className="linkedin" href="https://www.linkedin.com/in/aquib-younis-pula-6b205b275/" target="_blank" rel="noopener noreferrer">
          <p>LINKEDIN</p> <i className="l1 fa-brands fa-linkedin"></i>
        </a>

        <a className="threads" href="https://www.threads.net/@code.pixelsx" target="_blank" rel="noopener noreferrer">
          <p>THREADS</p> <i className="l1 fa-brands fa-threads"></i>
        </a>

        <a className="instagram" href="https://www.instagram.com/code.pixelsx/" target="_blank" rel="noopener noreferrer">
          <p>INSTAGRAM</p> <i className="l1 fa-brands fa-instagram"></i>
        </a>

        <a className="youtube" href="https://www.youtube.com/channel/UCynAxHTTMS9zdGxY8tZkaQg" target="_blank" rel="noopener noreferrer">
          <p>YOUTUBE</p> <i className="l1 fa-brands fa-youtube"></i>
        </a>

        <a className="leetcode" href="https://leetcode.com/u/aquibyounis1/" target="_blank" rel="noopener noreferrer">
          <p>LEETCODE</p> <i className="l1 fa-solid fa-terminal"></i>
        </a>

        <a className="telegram" href="https://t.me/codepixelsx" target="_blank" rel="noopener noreferrer">
          <p>TELEGRAM</p> <i className="l1 fa-brands fa-telegram"></i>
        </a>
      </div>

      <h1 className="side_head">Links</h1>
    </div>
  );
};

export default Links;
