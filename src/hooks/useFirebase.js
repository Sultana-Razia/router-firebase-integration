import { useEffect, useState } from "react"

const useFirebase = () => {
    const [user, setUser] = useState({});

    useEffect(() => {

    }, []);

    const signInWithGoolge = () => {
        console.log('signing in soon');
    }

    return [user, setUser];
}

export default useFirebase;