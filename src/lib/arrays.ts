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

  public static groupingby = <T, K extends MapKey, V>(array: T[], keyMapper: (item: T) => K, valueMapper: (item: T) => V): Map<K, V[]> => {
    const resultMap = new Map<K, V[]>();
    array.forEach((item) => {
      const key = keyMapper(item);
      const value = valueMapper(item);
      const group = resultMap.get(key);
      if (group) {
        group.push(value);
      } else {
        resultMap.set(key, [value]);
      }
    });
    return resultMap;
  };
}
