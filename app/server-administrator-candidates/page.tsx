import RoleDirectoryPage from '@/components/RoleDirectoryPage';
import { serverAdminConfig } from '@/data/additionalRolePages';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

export const metadata = createRolePageMetadata(serverAdminConfig);

export default function ServerAdministratorCandidatesPage() {
  return <RoleDirectoryPage config={serverAdminConfig} />;
}
