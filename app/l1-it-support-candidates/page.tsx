import RoleDirectoryPage from '@/components/RoleDirectoryPage';
import { l1ItSupportConfig } from '@/data/additionalRolePages';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

export const metadata = createRolePageMetadata(l1ItSupportConfig);

export default function L1ItSupportCandidatesPage() {
  return <RoleDirectoryPage config={l1ItSupportConfig} />;
}
