export const ROLES = ["super_admin","chairman","treasurer","project_manager","approval_committee","field_coordinator","donor"] as const;
export type Role = (typeof ROLES)[number];
export const STAFF_ROLES: Role[] = ROLES.filter((r) => r !== "donor");
