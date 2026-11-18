import { Section, SectionHeading } from "@/components/ui/Section";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { contactPage } from "@/data/contact";
import { buildMetadata } from "@/lib/seo/build-metadata";

export const metadata = buildMetadata("contact");

export default function ContactPage() {
  return (
    <Section labelledBy="contact-title">
      <SectionHeading as="h1" id="contact-title" title={contactPage.title} description={contactPage.description} />
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <ContactInfo />
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold">{contactPage.formTitle}</h2>
          <p className="text-muted mt-2 mb-6">{contactPage.formText}</p>
          <ContactForm />
          <noscript>
            <p className="text-muted mt-4 text-sm">فرم تماس به جاوااسکریپت نیاز دارد؛ لطفاً از ایمیل یا تلگرام استفاده کنید.</p>
          </noscript>
        </div>
      </div>
      <PageJsonLd page="contact" />
    </Section>
  );
}
