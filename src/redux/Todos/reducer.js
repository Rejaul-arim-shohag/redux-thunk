import { TODOLOAd, TODOADD } from "./actionType";
import ititialState from "./initialState"
const reducer = (state = ititialState, action) => {
    switch (action.type) {
        case TODOLOAd:
            return action.payload;
        case TODOADD:
            return [
                ...state,
                {
                    id: 1,
                    text: action.payload,
                    completed: false
                }
            ]
            default:
                return state
    }
}
export default reducer;