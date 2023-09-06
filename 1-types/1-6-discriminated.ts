{
  // function: login -> success, fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  // Quiz 🎯
  // printLoginState(state)
  // success -> 🟢
  // fail -> 🔴
  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(`🟢 ${state.response.body}`);
    } else {
      console.log(`🔴 ${state.reason}`);
    }
  }
}
