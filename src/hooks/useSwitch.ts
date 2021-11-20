import {useState} from 'react';

export default (initialState = false): [boolean, () => void, () => void] => {
  const [state, setState] = useState(initialState);
  const open = (): void => setState(true);
  const off = (): void => setState(false);
  return [state, open, off];
};
