import HeroHealthcare, { FeaturesHealthcare, CTAHealthcare } from "@/components/marketing/HeroHealthcare";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pega Blueprint for Healthcare | AI Workflow Design</title>
        <meta name="description" content="Blueprint, design, and launch HIPAA-ready healthcare workflows with Pega GenAI. Accelerate prior auth, care management, and compliance." />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Pega Blueprint for Healthcare" />
        <meta property="og:description" content="Design AI-powered, compliant healthcare workflows in minutes." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Pega Blueprint for Healthcare",
            applicationCategory: "BusinessApplication",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            audience: { "@type": "Audience", audienceType: "Healthcare organizations" },
            description: "AI-powered workflow design for healthcare: prior authorization, care management, and compliance.",
          })}
        </script>
      </Helmet>
      <main>
        <HeroHealthcare />
        <FeaturesHealthcare />
        <CTAHealthcare />
        <footer className="border-t py-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pega Blueprint — Healthcare Edition
        </footer>
      </main>
    </>
  );
};

export default Index;
