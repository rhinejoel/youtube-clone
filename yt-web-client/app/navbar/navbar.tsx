'use client'

import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css";
import SignIn from "./sign-in";
import Upload from "./upload";

import { User } from "firebase/auth"
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { useEffect, useState } from "react";

export default function NavBar() {
    // Init user state
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedHelper((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    });

    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image width={90} height ={20}
                src="/youtube-logo.svg" alt="YouTube Logo" />
            </Link>
            {
                user && <Upload/>
            }
            <SignIn user={user} />
        </nav>
        
    )
}