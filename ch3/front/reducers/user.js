const dummyUser = {
    nickname: 'SIPO',
    Post: [],
    Followings: [],
    Followers: [],
}

export const initialState= {
  isloggedIn: false,
  user: null,
}

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

export const loginAction = {
  type: LOG_IN,
  data: {
    nickname: 'SIPO',
  },
};

export const logoutAction = {
  type:LOG_OUT,
}

const reducer =(state = initialState, action) => {
  switch (action.type){
    case LOG_IN: {
      return {
        ...state,
        isloggedIn: true,
        user: dummyUser,
      }
    }
    case LOG_OUT:{
      return {
        ...state,
        isloggedIn:false,
        user:null,
      }
    }
    default: {
      return{
      ...state,
      }
    }
  }
}

export default reducer;