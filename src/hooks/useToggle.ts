import {useState, Dispatch, SetStateAction} from 'react';

export default (
  initialState = false,
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState(currentState => !currentState);

  return [state, toggle, setState];
};
