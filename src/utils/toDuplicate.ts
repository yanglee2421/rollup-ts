interface Ops {
  isCover: boolean;
  keyProp: string | symbol;
}

interface Item {
  [key: string | symbol]: unknown;
}

export function toDuplicate<TItem extends Item>(
  items: TItem[],
  ops: Partial<Ops> = {}
) {
  const { isCover = false, keyProp = "id" } = ops;

  const map = new Map<unknown, TItem>();

  items.forEach((item) => {
    if (!item) throw new Error("invalid item");

    const key = Reflect.get(item, keyProp);
    if (!key) throw new Error("invalid key");

    if (isCover) return map.set(key, item);
    map.get(key) || map.set(key, item);
  });

  return [...map.values()];
}
