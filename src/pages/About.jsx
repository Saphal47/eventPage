import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto  justify-items-center items-center px-4 py-12" id="about">

      <div>
        <h2 className="text-4xl font-extrabold mb-6 text-center text-white ">About the Event</h2>

        <p className="mb-6 text-lg text-gray-800">
          🚀 Join us for an exclusive session with Anshima Choudhary, a seasoned Senior Software Development Engineer at Microsoft, as she shares valuable insights and tips for landing top placements in the tech industry. This event is a unique opportunity to gain insider knowledge and strategies for success.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-primary  text-white">Session Highlights:</h3>
          <ul className="list-disc pl-6 text-gray-800">
            <li>Discover insider tips and strategies for success at Microsoft.</li>
            <li>Learn how to excel in placement interviews and stand out in the competitive tech industry.</li>
            <li>Get invaluable insights on building a successful career in software development.</li>
          </ul>
        </div>

        <p className="mb-6 text-lg text-gray-800">
          👩‍💼 About Anshima Choudhary: Anshima is a highly accomplished Senior Software Development Engineer at Microsoft, bringing years of experience and expertise to the table.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-primary  text-white">Event Details:</h3>
          <p className="text-gray-800">Date: October 22, 2023</p>
          <p className="text-gray-800">Time: 12:00 pm - 01:00 pm</p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-primary  text-white">Who Should Attend:</h3>
          <ul className="list-disc pl-6 text-gray-800">
            <li>Students aspiring for a career in software development.</li>
            <li>Tech enthusiasts seeking insider tips from a Microsoft expert.</li>
            <li>Anyone looking to enhance their interview and career-building skills.</li>
          </ul>
        </div>

        <p className="mb-8 text-lg text-gray-800">
          👥 About SoarX Network: SoarX Network is a dynamic community of 2500+ college students passionate about technology, innovation, and career development.
        </p>

        <p className="text-lg font-bold text-primary mb-8">
          🌟 Don't miss out on this incredible opportunity to learn from one of the best in the industry. Secure your spot now and take the first step towards your dream career! 🌟
        </p>
      </div>
    </div>
  );
};

export default About;
