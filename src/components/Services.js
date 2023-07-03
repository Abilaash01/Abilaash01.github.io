import React from 'react';

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <ul>
          <li>Personal Training</li>
          <li>Group Fitness Classes</li>
          <li>Nutritional Counseling</li>
          <li>Weight Loss Programs</li>
        </ul>
        <a href="/services" className="view-all">View All Services</a>
      </div>
    </section>
  );
};

export default Services;
