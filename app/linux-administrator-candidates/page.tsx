import RoleDirectoryPage from '@/components/RoleDirectoryPage';
import { linuxAdminConfig } from '@/data/additionalRolePages';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

export const metadata = createRolePageMetadata(linuxAdminConfig);

export default function LinuxAdministratorCandidatesPage() {
  return <RoleDirectoryPage config={linuxAdminConfig} />;
}
