type MapKey = string | number | symbol;

export class Arrays {
  public static toMap = <T, K extends MapKey, V>(array: T[], keySelector: (item: T) => K, valueSelector: (item: T) => V): Map<K, V> => {
    return array.reduce((acc, item) => {
      const key = keySelector(item);
      const value = valueSelector(item);
      acc.set(key, value);
      return acc;
    }, new Map<K, V>());
  };
}
