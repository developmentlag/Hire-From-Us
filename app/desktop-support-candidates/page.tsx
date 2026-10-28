import RoleDirectoryPage from '@/components/RoleDirectoryPage';
import { desktopSupportConfig } from '@/data/additionalRolePages';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

export const metadata = createRolePageMetadata(desktopSupportConfig);

export default function DesktopSupportCandidatesPage() {
  return <RoleDirectoryPage config={desktopSupportConfig} />;
}
