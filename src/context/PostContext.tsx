import { createContext, ReactNode, useState } from "react"
import Post from "../types/Post"

interface PostContextType {
    currentPost: Post | undefined
    setCurrentPost: (post: Post) => void;

}

export const PostContext = createContext<PostContextType | undefined>(undefined)

export const PostContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [currentPost, setCurrentPost] = useState<Post>()

    return (
        <PostContext.Provider value={{currentPost, setCurrentPost}}>
            {children}
        </PostContext.Provider>
    )
}