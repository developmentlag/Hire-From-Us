import type { Metadata } from 'next';
import type { RoleDirectoryConfig } from '@/components/RoleDirectoryPage';

const siteUrl = 'https://devopsmumbai.com';

export function createRolePageMetadata(config: RoleDirectoryConfig): Metadata {
  const title = `Hire ${config.label} in Mumbai | DIM`;
  const opening = `Hire ${config.label} in Mumbai with DIM.`;
  const closing = ' No employer placement fee.';
  const detailBudget = 160 - opening.length - closing.length - 1;
  const detail = config.description.length > detailBudget
    ? `${config.description.slice(0, detailBudget - 1).replace(/\s+\S*$/, '')}…`
    : config.description;
  const description = `${opening} ${detail}${closing}`;
  const canonicalUrl = `${siteUrl}${config.path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      siteName: 'DevOps Institute Mumbai',
      title,
      description,
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}
