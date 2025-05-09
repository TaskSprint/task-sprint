/**
 * Still in development
 */

export type RelationCollection = Record<string, object[] | undefined>;

export type RelationProperties<T extends RelationCollection, U> = keyof T extends infer K
    ? K extends keyof T
        ? NonNullable<T[K]> extends (infer R)[]
            ? R extends U
                ? K
                : never
            : never
        : never
    : never;

export type AvailableRelations<T extends RelationCollection, U> = U extends object
    ? keyof U extends infer K
        ? K extends keyof U
            ? RelationProperties<T, U[K]> extends never
                ? never
                : K
            : never
        : never
    : never;

export type Relation<T extends RelationCollection, U> =
    RelationProperties<T, U> extends infer K
        ? K extends keyof T
            ? NonNullable<T[K]> extends (infer R)[]
                ? {
                      relation: K;
                      key: keyof R;
                  }
                : never
            : never
        : never;

export type Relations<T extends RelationCollection> = {
    [K in keyof T]?: NonNullable<T[K]> extends (infer U)[]
        ? {
              [P in AvailableRelations<T, NonNullable<U>>]?: Relation<T, NonNullable<U>[P]>;
          }
        : never;
};

export type GroupedRelations<
    T extends RelationCollection,
    P extends Relations<T>,
    R extends keyof T | undefined = undefined,
> = R extends undefined
    ? {
          [K in Exclude<keyof T, keyof P>]: GroupedRelations<T, P, K>;
      }
    : never;

export default function groupRelations<T extends RelationCollection, P extends Relations<T>>(
    relations: T,
    params: P,
) {
    return { relations, params };
}

const test = groupRelations(
    {
        tests: [
            {
                id: 1,
            },
        ],
        tests2: [
            {
                id: 1,
                test: {
                    id: 1,
                },
            },
        ],
    },
    {
        tests2: {
            test: {
                relation: 'tests',
                key: 'id',
            },
        },
    },
);
