import RoleDirectoryPage from '@/components/RoleDirectoryPage';
import { applicationSupportConfig } from '@/data/additionalRolePages';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

export const metadata = createRolePageMetadata(applicationSupportConfig);

export default function ApplicationSupportCandidatesPage() {
  return <RoleDirectoryPage config={applicationSupportConfig} />;
}
