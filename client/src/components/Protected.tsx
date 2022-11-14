import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";

interface ChildrenProp {
    children: React.ReactNode
}

export default function Protected({ children }: ChildrenProp) {


    const { user } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (!user) router.push('/');
    }, [router, user])

    return <>{children}</>
}