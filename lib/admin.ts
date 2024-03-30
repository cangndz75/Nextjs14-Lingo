import { auth } from "@clerk/nextjs"
const adminIds = ["your_clerk_user_id"];

export const isAdmin = () => {
    const { userId } = auth();
    if (!userId) {
        return false;
    }
    return adminIds?.indexOf(userId) !== -1;
}