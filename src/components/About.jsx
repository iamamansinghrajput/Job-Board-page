import React from 'react';

const About = () => {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About JobBoard 
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            Connecting talent with opportunity. We're on a mission to make the job search and hiring process faster, simpler, and more effective for everyone.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-16">
          <img
            src="https://placehold.co/1200x400.png"
            alt="A team of professionals working together in a modern office"
            width={1200}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>

        {/* Mission and Values Section */}
        <section id="mission" className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Mission & Values
            </h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Mission */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower professionals to find fulfilling careers and to help companies build great teams. We believe that the right job can transform a person's life and that the right person can transform a business. We are dedicated to creating a platform that facilitates these transformative connections.
                </p>
              </div>

              {/* Values */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    <span className="font-medium text-foreground">Integrity:</span> We operate with transparency and honesty.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Innovation:</span> We continuously improve our platform to meet user needs.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Community:</span> We foster a supportive community of professionals.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Excellence:</span> We are committed to providing the best possible service.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
