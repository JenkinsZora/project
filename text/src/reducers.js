/**
 * Created by Administrator on 2017/3/29.
 */
import {containerLink} from './super/reducers';
import {combineReducers} from 'redux';
function teacherLoginData(state = {}, action) {
    switch(action.type){
        case "teacher_login_data":
            return action.json;
            break;
        default:
            return state
    }
}
let totalReducer=combineReducers({
    teacherLoginData,
    containerLink
});
export default totalReducer