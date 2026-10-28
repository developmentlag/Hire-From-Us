import RoleDirectoryPage from '@/components/RoleDirectoryPage';
import { cloudEngineerConfig } from '@/data/additionalRolePages';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

export const metadata = createRolePageMetadata(cloudEngineerConfig);

export default function CloudEngineerCandidatesPage() {
  return <RoleDirectoryPage config={cloudEngineerConfig} />;
}
