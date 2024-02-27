import {useDispatch} from "react-redux";
import {setLoading, unsetLoading} from "../store/actions/loadingActions";
import {setError} from "../store/actions/errorAction";

export const useResFetching = (callback) => {
    const dispatch = useDispatch();

    const fetching = async (...args) => {
        try {
            dispatch(setLoading());
            return await callback(...args); // Return the result of the callback
        } catch (e) {
            dispatch(setError(e.message));
            throw e; // Re-throw the error after dispatching
        } finally {
            dispatch(unsetLoading());
        }
    };

    return fetching; // Return the function directly, not in an array
};