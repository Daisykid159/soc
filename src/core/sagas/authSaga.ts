// import {call, fork, put, race, take} from '@redux-saga/core/effects';
// import {AuthApi} from '../../api/';
// import {USERS_LOGIN_STORAGE} from '../../storages';
// import {AuthActions} from '../actions/';
// import {authActionTypes} from '../constants/';
// /**
//  * Effect to handle authorization
//  * @param  {string} data.username               The username of the user
//  * @param  {string} data.password               The password of the user
//  * @param  {object} data
//  */
// export function* authorize(data) {
//   let response;
//   yield put(AuthActions.loading(true));
//   // call api login
//   response = yield call(AuthApi.login, data);

//   if (!response && response.code !== 200 && response.messEN) {
//     yield put(AuthActions.loginRequestFailed(response.messEN));
//     yield put(AuthActions.loading(false));
//     return;
//   } else if (response && response.code === 200) {
//     yield put(AuthActions.loading(false));
//     return response;
//   } else {
//     yield put(AuthActions.loginRequestFailed('Failed To Login'));
//     yield put(AuthActions.loading(false));
//     return;
//   }
// }
// /**
//  * Log in saga
//  */
// export function* loginFlow() {
//   // Because sagas are generators, doing `while (true)` doesn't block our program
//   // Basically here we say "this saga is always listening for actions"
//   while (true) {
//     // And we're listening for `LOGIN_REQUEST` actions and destructuring its payload
//     const request = yield take(authActionTypes.LOGIN_REQUEST);

//     const {username, password} = request.payload;
//     // reset state message error
//     yield put(AuthActions.resetError(''));
//     // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
//     // lead to a race condition. This is unlikely, but just in case, we call `race` which
//     // returns the "winner", i.e. the one that finished first
//     const winner = yield race({
//       auth: call(authorize, {username, password}),
//       logout: take(authActionTypes.LOGOUT),
//     });

//     if (winner.auth) {
//       // ...we send Redux appropiate actions
//       yield put(AuthActions.infoUserLogined(winner.auth.data.user));
//       USERS_LOGIN_STORAGE.set(winner.auth.data.user);
//     }
//   }
// }

// /**
//  * Effect to handle logging out
//  */
// export function* logout() {
//   let response;
//   yield put(AuthActions.loading(true));
//   response = yield call(AuthApi.logout);
//   if (!response && response.code !== 200 && response.messEN) {
//     yield put(AuthActions.loading(false));
//     yield put(AuthActions.loginRequestFailed(response.messEN));
//     return;
//   } else if (response && response.code === 200 && response.messEN) {
//     yield put(AuthActions.loading(false));
//     yield put(AuthActions.loginRequestFailed(response.messEN));
//   } else {
//     yield put(AuthActions.loading(false));
//     yield put(AuthActions.loginRequestFailed('Failed To Logout'));
//     return;
//   }
// }

// /**
//  * Log out saga
//  * This is basically the same as the `if (winner.logout)` of above, just written
//  * as a saga that is always listening to `LOGOUT` actions
//  */
// export function* logoutFlow() {
//   while (true) {
//     // reset state message error
//     yield put(AuthActions.resetError(''));
//     yield take(authActionTypes.LOGOUT);

//     yield call(logout);
//   }
// }

// export default function* authSaga() {
//   yield fork(loginFlow);
//   yield fork(logoutFlow);
// }
