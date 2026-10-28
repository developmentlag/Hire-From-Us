import RoleDirectoryPage from '@/components/RoleDirectoryPage';
import { itInfrastructureConfig } from '@/data/additionalRolePages';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

export const metadata = createRolePageMetadata(itInfrastructureConfig);

export default function ItInfrastructureCandidatesPage() {
  return <RoleDirectoryPage config={itInfrastructureConfig} />;
}
