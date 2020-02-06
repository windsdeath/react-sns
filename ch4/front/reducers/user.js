const dummyUser = {
    nickname: 'SIPO',
    Post: [],
    Followings: [],
    Followers: [],

}

export const initialState= {
  isloggedIn: false,
  user: null,
  signUpData:{
    id:'',
    nick:'',
    password:'',
  },
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_REQUEST';
export const LOG_OUT_FAILURE = 'LOG_OUT_REQUEST';

export const INCREMENT_NUMBER='';

export const signUpSuccess = (data) => {
  return{
    type: SIGN_UP_SUCCESS,
  };
};

export const signUpAction = (data) => {
  return{
    type: SIGN_UP_REQUEST,
    data: data,
  };
};

export const loginAction = {
  type: LOG_IN_REQUEST,
};

export const logoutAction = {
  type:LOG_OUT_REQUEST,
};

const reducer =(state = initialState, action) => {
  switch (action.type){
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isloggedIn: true,
        user: dummyUser,
      };
    }
    case LOG_IN_SUCCESS:{
      return{
      isLoading:false,
    }
    }
    case LOG_OUT_REQUEST:{
      return {
        ...state,
        isloggedIn:false,
        user:null,
        isLoading:ture,
      };
    }
    case SIGN_UP_REQUEST:{
      return{
        ...state,
        signUpData: action.data,
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