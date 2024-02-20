
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../services/state/store'


export const useAppDispatch: () => AppDispatch = useDispatch
