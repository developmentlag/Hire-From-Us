import RoleDirectoryPage from '@/components/RoleDirectoryPage';
import { socAnalystConfig } from '@/data/additionalRolePages';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

export const metadata = createRolePageMetadata(socAnalystConfig);

export default function SocSecurityAnalystCandidatesPage() {
  return <RoleDirectoryPage config={socAnalystConfig} />;
}
