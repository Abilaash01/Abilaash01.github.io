import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia auctor lorem id condimentum.
            Duis suscipit ante ligula, sit amet molestie ex feugiat et.
          </p>
          <a href="/about" className="read-more">
            Read More
          </a>
        </div>
        <div className="about-image">
          <div
            className="image-placeholder"
            style={{
              backgroundColor: 'blue',
              width: '200px',
              height: '200px',
              float: 'right',
            }}
          >
            {/* Box placeholder content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
