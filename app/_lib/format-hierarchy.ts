export type HierarchyType = { name: string; slug: string };

export const formatHierarchy = (hierarchy: { nameHierarchy: string; slugHierarchy: string }): HierarchyType[] => {
  const names = hierarchy?.nameHierarchy?.split('|');
  const slugs = hierarchy?.slugHierarchy?.split('|');

  const array = slugs?.map((slug: string, i: number) => {
    return {
      slug: slug,
      name: names?.[i],
    };
  });

  return array || [];
};
