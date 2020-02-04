export const initialState= {
  isloggedIn: false,
  user: {},
}

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

const loginAction = {
  type: LOG_IN,
  data: {
    nickcame: 'SIPO',
  },
};

const logoutAction = {
  type:LOG_OUT,
}

const reducer =(state = initialState, action) => {
  switch (action.type){
    case LOG_IN: {
      return {
        ...state,
        isloggedIn: true,
        user: action.data,
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