import {useDispatch} from "react-redux";
import {setLoading, unsetLoading} from "../store/actions/loadingActions";
import {setError} from "../store/actions/errorAction";


export const useFetching = (callback) => {
    const dispatch = useDispatch();

    const fetching = async (...args) => {
        try {
            dispatch(setLoading())
            await callback(...args)
        } catch (e) {
            dispatch(setError(e.message));
        } finally {
            dispatch(unsetLoading())
        }
    }

    return [fetching]
}
