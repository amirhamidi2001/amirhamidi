import Script from "next/script";
import { site, isIndexable } from "@/config/site";

const idOk = /^G-[A-Z0-9]+$/.test(site.gaId); // اعتبارسنجی قبل از درج در اسکریپت inline
export const isAnalyticsEnabled = idOk && isIndexable;

/** Google Analytics (gtag). فقط در Production واقعی و فقط با شناسهٔ معتبر. */
export function Analytics() {
  if (!isAnalyticsEnabled) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${site.gaId}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
