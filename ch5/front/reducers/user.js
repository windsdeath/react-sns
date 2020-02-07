const dummyUser = {
    nickname: 'SIPO',
    Post: [],
    Followings: [],
    Followers: [],

}

export const initialState= {
  isLoggedIn: false, // 로그인여부
  isLoggingIn: false, // 로그인 시도중
  isLoggingOut: false, // 로그아웃 시도중
  logInErrorReason:'', // 로그인 실패 사유
  signedUp: false, // 회원가입 성공
  isSigningUp:false,// 회원가입 시도중
  signUpErrorReason:'', // 회원가입 실패사유
  me: null, //내정보
  followingList:[], // 팔로잉 리스트
  followerList:[], // 팔로워 리스트
  userInfo: null, // 남의정보
}

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const LOAD_FOLLW_REQUEST = 'LOAD_FOLLW_REQUEST';
export const LOAD_FOLLW_SUCCESS = 'LOAD_FOLLW_SUCCESS';
export const LOAD_FOLLW_FAILURE = 'LOAD_FOLLW_FAILURE';

export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';

export const REMOVE_FOLLOW_USER_REQUEST = 'REMOVE_FOLLOW_USER_REQUEST';
export const REMOVE_FOLLOW_USER_SUCCESS = 'REMOVE_FOLLOW_USER_SUCCESS';
export const REMOVE_FOLLOW_USER_FAILURE = 'REMOVE_FOLLOW_USER_FAILURE';

export const  ADD_POST_TO_ME= 'ADD_POST_TO_ME';

export const INCREMENT_NUMBER='';

export const signUpAction = data => ({
    type: SIGN_UP_REQUEST,
    data: data,
  });

export const signUpSuccess = {
  type: SIGN_UP_SUCCESS,
};



export const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
});

export const logoutRequestAction = {
  type: LOG_OUT_REQUEST,
};

export const signUpRequestAction = data => ({
  type: SIGN_UP_REQUEST,
});

const reducer =(state = initialState, action) => {
  switch (action.type){
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLoggingIn:true,
        logInErrorReason: '',
      };
    }
    case LOG_IN_SUCCESS:{
      return{
        ...state,
        isLoggingIn:false,
        isLoggedIn: true,
        me: dummyUser,
      }
    }
    case LOG_IN_FAILURE:{
      return{
        ...state,
        isLoggingIn:false,
        isLoggedIn: false,
        logInErrorReason: action.error,
        me: null,
    }
    }
    case LOG_OUT_REQUEST:{
      return {
        ...state,
        isLoggedIn:false,
        me:null,
      };
    }
    case SIGN_UP_REQUEST:{
      return{
        ...state,
        isSigningUp:true,
        isSignedUp:false,
        signUpErrorReason:'',
      };
    }
    case SIGN_UP_SUCCESS:{
      return{
        ...state,
        isSigningUp:false,
        isSignedUp:true,
      };
    }
    case SIGN_UP_FAILURE:{
      return{
        ...state,
        isSigningUp:false,
        signUpErrorReason:action.error,
      };
    }
    default: {
      return{
      ...state,
      }
    }
  }
}

export default reducer;