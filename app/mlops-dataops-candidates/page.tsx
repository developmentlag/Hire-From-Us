import RoleDirectoryPage from '@/components/RoleDirectoryPage';
import { mlopsDataopsConfig } from '@/data/additionalRolePages';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

export const metadata = createRolePageMetadata(mlopsDataopsConfig);

export default function MlopsDataopsCandidatesPage() {
  return <RoleDirectoryPage config={mlopsDataopsConfig} />;
}
