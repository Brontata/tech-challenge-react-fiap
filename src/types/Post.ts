/*id Int @id @default(autoincrement())
user_id Int
title String
description String
slug String
created_at DateTime @default(now())
updated_at DateTime?
*/
interface Post {
    id: number
    user_id: number
    title: string
    description: string
    slug: string
    created_at?: Date
    updated_at?: Date
}

export default Post;