import React from 'react';

const PreviousEvents = () => {
  return (
    <div className="bg-blue-100 py-12" id="connect">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary">Connect with Us <br/>🌐</h2>

        <p className="mb-6 text-lg text-gray-700">
          Stay connected with us on various platforms to get the latest updates and announcements.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PlatformLink
            href="https://chat.whatsapp.com/CFeDvPQmH5v2Hg4tzHjr8g"
            iconClass="bi-whatsapp"
            title="WhatsApp"
          />
          <PlatformLink
            href="https://twitter.com/SoarXNetwork"
            iconClass="bi-twitter"
            title="Twitter"
          />
          <PlatformLink
            href="https://www.instagram.com/soarxnetwork/"
            iconClass="bi-instagram"
            title="Instagram"
          />
          <PlatformLink
            href="https://www.linkedin.com/company/soarxnetwork/"
            iconClass="bi-linkedin"
            title="LinkedIn"
          />
        </div>

        <div className="mt-8">
          <p className="text-lg font-bold text-primary">
            Join us on these platforms and be a part of the SoarXNetwork community! 🚀
          </p>

          <p className="mt-6 text-gray-700">
            #Microsoft #TechCareer #PlacementSuccess #AnshimaChoudhary #SoarXNetwork #SoftwareDevelopment
          </p>
        </div>
      </div>
    </div>
  );
};

const PlatformLink = ({ href, iconClass, title }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 mb-4"
  >
    <i className={`bi ${iconClass} text-3xl mb-4 text-primary`}></i>
    <p className="text-base font-semibold text-gray-800">{title}</p>
  </a>
);

export default PreviousEvents;
