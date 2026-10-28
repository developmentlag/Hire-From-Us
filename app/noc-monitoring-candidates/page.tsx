import RoleDirectoryPage from '@/components/RoleDirectoryPage';
import { nocConfig } from '@/data/additionalRolePages';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

export const metadata = createRolePageMetadata(nocConfig);

export default function NocMonitoringCandidatesPage() {
  return <RoleDirectoryPage config={nocConfig} />;
}
