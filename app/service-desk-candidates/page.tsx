import RoleDirectoryPage from '@/components/RoleDirectoryPage';
import { serviceDeskConfig } from '@/data/additionalRolePages';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

export const metadata = createRolePageMetadata(serviceDeskConfig);

export default function ServiceDeskCandidatesPage() {
  return <RoleDirectoryPage config={serviceDeskConfig} />;
}
