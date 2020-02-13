export const getPostsSelector = (state) => state.profilePage.postsData;
export const getFetching = (state) => state.profilePage.isFetching;
export const getError = (state)=> state.profilePage.errors;