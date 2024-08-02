import { useDispatch } from 'react-redux';
import * as UserAction from '../store/action-creators/user'
import * as FilmAction from '../store/action-creators/film'
import { bindActionCreators } from 'redux';

const data = {...UserAction, ...FilmAction}

export const UseActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(data, dispatch)
}