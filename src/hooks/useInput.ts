import {useState} from 'react';

export default (
  initialState: string | null = '',
): [
  string | null,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  () => void,
] => {
  const [state, setState] = useState<string | null>(initialState);

  const set = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setState(event.target.value);
  const reset = (): void => setState(initialState);

  return [state, set, reset];
};
