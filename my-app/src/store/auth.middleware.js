const authMiddleware = ({ getState }) => next => action => {
    // 로그인이 필요한 액션 타입을 확인
    if (action.type === 'SOME_PRIVATE_ACTION') {
      // 현재 인증 상태를 가져옴
      const { auth } = getState();
      if (!auth.isAuthenticated) {
        // 로그인하지 않은 상태에서 해당 액션을 시도할 경우
        console.warn('이 액션을 수행하려면 로그인이 필요합니다.');
        // 여기서 추가적인 액션을 디스패치하거나, 다른 처리를 할 수 있음
        return;
      }
    }
    return next(action);
  };
  
  export default authMiddleware;
  