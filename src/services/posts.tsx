import api from "../api/Api"


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
    }
}

export default postsService