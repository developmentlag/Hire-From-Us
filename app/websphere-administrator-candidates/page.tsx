import RoleDirectoryPage from '@/components/RoleDirectoryPage';
import { websphereAdminConfig } from '@/data/additionalRolePages';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

export const metadata = createRolePageMetadata(websphereAdminConfig);

export default function WebsphereAdministratorCandidatesPage() {
  return <RoleDirectoryPage config={websphereAdminConfig} />;
}
