export const initialState = {
    mainPosts: [{
      User: {
        id: 1,
        nickname: 'SIPO',
      },
      content: '첫 번째 게시글',
      img: 'http://wordpress.sipo.kr/wp-content/uploads/2020/01/web_logo.svg',
    }],
    imagePaths: [],
  };
  
  const ADD_POST = 'ADD_POST';
  const ADD_DUMMY = 'ADD_DUMMY';
  
  const addPost = {
    type: ADD_POST,
  };
  const addDummy = {
    type: ADD_DUMMY,
    data: {
      content: 'Hello',
      UserId: 1,
      User: {
        nickname: 'SIPO',
      },
    },
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST: {
        return {
          ...state,
        };
      }
      case ADD_DUMMY: {
        return {
          ...state,
          mainPosts: [action.data, ...state.mainPosts],
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
  };
  
  // 3-1
  // export const initialState = {
  //   mainPosts: [{
  //     User: {
  //       id: 1,
  //       nickname: 'SIPO',
  //     },
  //     content: '첫 번째 게시글',
  //     img: 'http://wordpress.sipo.kr/wp-content/uploads/2020/01/web_logo.svg',
  //   }],
  //   imagePaths: [],
  // };
  
  // const ADD_POST = 'ADD_POST';
  // const ADD_DUMMY = 'ADD_DUMMY';
  
  // const addPost = {
  //   type: ADD_POST,
  // };
  // const addDummy = {
  //   type: ADD_DUMMY,
  //   data: {
  //     content: 'Hello',
  //     UserId: 1,
  //     User: {
  //       nickname: 'SIPO',
  //     },
  //   },
  // };
  
  // export default (state = initialState, action) => {
  //   switch (action.type) {
  //     case ADD_POST: {
  //       return {
  //         ...state,
  //       };
  //     }
  //     case ADD_DUMMY: {
  //       return {
  //         ...state,
  //         mainPosts: [action.data, ...state.mainPosts],
  //       };
  //     }
  //     default: {
  //       return {
  //         ...state,
  //       };
  //     }
  //   }
  // };