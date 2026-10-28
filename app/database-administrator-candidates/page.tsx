import RoleDirectoryPage from '@/components/RoleDirectoryPage';
import { databaseAdminConfig } from '@/data/additionalRolePages';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

export const metadata = createRolePageMetadata(databaseAdminConfig);

export default function DatabaseAdministratorCandidatesPage() {
  return <RoleDirectoryPage config={databaseAdminConfig} />;
}
