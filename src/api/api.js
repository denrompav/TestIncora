import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    
});

export const usersAPI = {
    getUsers() {
        return instance.get(`users`)
    }

}

export const profileAPI = {
    getPosts(id) {
        return instance.get(`posts?userId=${id}`)
        
    },
    // getPostComment(postId){
    //     return instance.get(`comments?postId=${postId}`)
    // },

    getCurrentComment(postId){
        return instance.get(`comments?postId=${postId}`)
    },
    savePost(post){
        return instance.post(`posts`,post)
    },
    deletePost(postId){
        return instance.delete(`posts/${postId}`)
    },
    updatePost(updatedPost,postId){
        return instance.put(`posts/${postId}`,updatedPost)
    }
}




 