import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import Head from "next/head";
import { MenuProvider } from "@/contexts/MenuContext";
import ClientLayout from "./ClientLayout";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Mehman - Authentic Indian Restaurant in Paris | Best Indian Cuisine",
  description:
    "Mehman is the best Indian restaurant in Paris, offering a variety of authentic Indian dishes, from flavorful curries to delicious biryanis. Visit us for an unforgettable dining experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mehman Restaurant, Paris" />
        <meta name="keywords" content="Indian restaurant Paris, best Indian food Paris, authentic Indian cuisine, Indian curry, tandoori, Mehman restaurant France" />

        {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
        <meta property="og:title" content="Mehman - Best Indian Restaurant in Paris" />
        <meta property="og:description" content="Enjoy authentic Indian flavors at Mehman, the top Indian restaurant in Paris." />
        <meta property="og:image" content="https://www.mehman.fr/assets/images/cta-banner.png" />
        <meta property="og:url" content="https://www.mehman.fr/" />
        <meta property="og:type" content="restaurant" />

        {/* Twitter Card for better social media sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mehman - Authentic Indian Restaurant in Paris" />
        <meta name="twitter:description" content="Visit Mehman for the best Indian cuisine in Paris. Authentic dishes, great service, and a warm ambiance." />
        <meta name="twitter:image" content="https://www.mehman.fr/assets/images/cta-banner.png" />

        {/* Canonical URL to prevent duplicate content issues */}
        <link rel="canonical" href="https://www.mehman.fr/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" sizes="any" />

        {/* Google Fonts Preloading (Optional for Speed Optimization) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />

        {/* Structured Data for Google SEO (Restaurant Schema) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Mehman",
            "image": "hhttps://www.mehman.fr/assets/images/cta-banner.png",
            "url": "https://www.mehman.fr/",
            "telephone": "+33 1 23 45 67 89",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Rue de Paris",
              "addressLocality": "Paris",
              "addressRegion": "Île-de-France",
              "postalCode": "75001",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 48.8566,
              "longitude": 2.3522
            },
            "openingHours": "Mo-Su 12:00-23:00",
            "servesCuisine": "Indian",
            "priceRange": "$$",
            "acceptsReservations": "True"
          })}
        </script>
      </head>
      <body id="top">
        <MenuProvider>
          <ClientLayout>{children}</ClientLayout>
        </MenuProvider>
        <ToastContainer />
      </body>

      {/* Ionicons for Icons */}
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></Script>
    </html>
  );
}
