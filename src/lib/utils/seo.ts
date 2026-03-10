interface SeoOptions {
  title: string;
  description: string;
  pathname: string;
  image?: string;
}

interface SeoPayload {
  title: string;
  description: string;
  canonical: string;
  image: string;
  siteName: string;
}

const SITE_NAME = 'LogisticsFlow';

export const createSeo = ({ title, description, pathname, image = '/images/og/logisticsflow-og.svg' }: SeoOptions): SeoPayload => {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || import.meta.env.SITE || 'https://logisticsflow-demo.example.com';
  const canonical = new URL(pathname, siteUrl).toString();
  const ogImage = new URL(image, siteUrl).toString();

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    canonical,
    image: ogImage,
    siteName: SITE_NAME,
  };
};
