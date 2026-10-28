import RoleDirectoryPage from '@/components/RoleDirectoryPage';
import { networkL1Config } from '@/data/additionalRolePages';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

export const metadata = createRolePageMetadata(networkL1Config);

export default function NetworkEngineerL1CandidatesPage() {
  return <RoleDirectoryPage config={networkL1Config} />;
}
