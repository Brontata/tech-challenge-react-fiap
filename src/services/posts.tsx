import api from "../api/Api"
import Post from "../types/Post"

const postsService = {
    getPosts: async () => {
        const response = await api.get('/posts')
        return response.data
    },

    deletePost: async (id: number) => {
        const response = await api.delete(`/posts/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response.data
    },

    createPost: async (postData: Post) => {
        const response = await api.post('/posts/create', postData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response.data;
    },

    updatePost: async (id: number, postData: Post) => {
        const response = await api.put(`/posts/${id}`, postData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response.data;
    }

}

export default postsService