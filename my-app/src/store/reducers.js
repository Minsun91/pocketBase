import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './Auth'; 

const rootReducer = combineReducers({
  auth: authReducer,
  // 다른 reducer 추가 예시:
  // someFeature: someFeatureReducer,
});

export default rootReducer;
