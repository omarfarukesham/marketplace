import { GetNestedType, NestedProps } from '../_types/utility.type';

export const getComponents = async <S, T extends NestedProps<S> | undefined = undefined>(
  componentsJson: S,
  prop?: T,
): Promise<T extends NestedProps<S> ? GetNestedType<S, T> : T extends undefined ? S : undefined> => {
  // Fake API call, replace with actual API call
  return new Promise((resolve) => {
    // ! Sometimes the complexity of TypeScript is not worth the time. 😒
    // ! BTW the return type is working fine where it is being used 😉
    setTimeout(() => {
      if (prop) {
        const nestedKeys = prop.split('.'); // "body.banner" => ["body", "banner"]
        let components = componentsJson;
        for (const key of nestedKeys) {
          // @ts-ignore
          components = components[key];
        }
        // @ts-ignore
        resolve(components);
      } else {
        // @ts-ignore
        resolve(componentsJson);
      }
    }, 200);
  });
};
