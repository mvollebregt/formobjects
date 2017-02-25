// 6. met een expliciet type en json-objecten pas wanneer je ze nodig hebt

export interface Selectable<T> {
  value: T;
  displayValue: string;
  [propName: string]: any;
}

// ipv expliciet Value type zouden we ook number kunnen gebruiken
export type Value = 'MBO' | 'HO';

export namespace Value {

  export const values: Selectable<Value>[] = [
    {value: 'MBO', displayValue: 'MBO', extraInfo: 'extra info'},
    {value: 'HO', displayValue: 'HBO of WO'}];

  export function byValue(value: Value): Selectable<Value> {
    return values.find(ref => ref.value === value);
  }

  export function displayValue(value: Value): string {
    return value ? byValue(value).displayValue : null;
  }
}
