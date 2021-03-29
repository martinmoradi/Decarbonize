import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
