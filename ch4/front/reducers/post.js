export const initialState = {
  imagePaths:{},
  mainPosts: [{
    User: {
      id: 1,
      nickname: 'SIPO',
    },
    content: '첫 번째 게시글',
    img: 'http://wordpress.sipo.kr/wp-content/uploads/2020/01/web_logo.svg',
  }],
}

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

const addPost={
  type: ADD_POST,
}

const addDummy = {

}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_POST:{
      return{
        ...state,
      }
    }
      case ADD_DUMMY: {
        return{
          ...state,
          mainPosts: [action.data, ...state.mainPosts],
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