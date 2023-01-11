import { initializeFirebase } from "./Firebase";
import { getDatabase } from 'firebase/database';
import { ref, set, onValue, remove } from "firebase/database"
import { useAuth } from "../utils/Auth"
import { Comment } from '../types/Comment'


const app = initializeFirebase();
const db = getDatabase(app);

const { user } = useAuth();

export default function useComments() {
    function getComments() {
        onValue(ref(db, "comments/a"), (snapshot) => {
            if(snapshot.val()) {
                setComments(Object.values(snapshot.val()).reverse())
            }
        });
    }

    function postComment(post: string, comment: string) {
        set(ref(db, `comments/${post}/` + comment), {
            userId: user.uid,
            username: user.displayName,
            comment: comment,
            post: post,
            publishDate: Date.now()
        })
    }

    function removeComment(path: string) {
        remove(ref(db, path))
    }
}