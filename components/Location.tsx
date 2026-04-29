import { ExternalLink } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="bg-white pt-24 border-t border-primary/5">
      {/* Header Content - Centered */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="font-display text-4xl font-bold text-primary mb-6">Notre Cabinet</h2>
        <p className="text-primary/70 max-w-2xl mx-auto leading-relaxed text-lg">
          Situé au Carnoy Center à Ariana, notre cabinet vous accueille dans un cadre professionnel et confidentiel.
        </p>
        <p className="text-primary/60 mt-2 font-medium">
          Carnoy Center, B23 Rue Tarek Ibn Zied, Ariana 2091, Tunisie
        </p>
      </div>

      {/* Map Section - Full Width with Gold Borders */}
      <div className="w-full relative group">
        {/* Floating "Open in Maps" Button */}
        <a 
          href="https://maps.app.goo.gl/yR8v3PeBnjfAgsNMA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-white px-4 py-2 rounded shadow-lg border border-gray-100 hover:bg-gray-50 transition-colors text-sm font-semibold text-blue-600"
        >
          Open in Maps
          <ExternalLink size={16} />
        </a>

        <div className="w-full h-[350px] bg-marble overflow-hidden relative border-y-[8px] border-accent">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.755421789103!2d10.177317775550524!3d36.84833316498526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd33da1490cdf7%3A0xbccbb476a936d5e1!2sMaitre%20Yosra%20Abidi!5e0!3m2!1sen!2stn!4v1777301901369!5m2!1sen!2stn" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation du Cabinet Maitre Yosra Abidi"
            className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
