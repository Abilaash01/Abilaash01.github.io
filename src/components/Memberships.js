import React from 'react';

const Memberships = () => {
  return (
    <section className="memberships">
      <h2>Membership Packages</h2>
      <div className="membership-plans">
        <div className="membership-plan">
          <h3>Plan 1</h3>
          <p>Plan 1 description goes here.</p>
          <button>Select</button>
        </div>
        <div className="membership-plan">
          <h3>Plan 2</h3>
          <p>Plan 2 description goes here.</p>
          <button>Select</button>
        </div>
        <div className="membership-plan">
          <h3>Plan 3</h3>
          <p>Plan 3 description goes here.</p>
          <button>Select</button>
        </div>
      </div>
    </section>
  );
};

export default Memberships;
