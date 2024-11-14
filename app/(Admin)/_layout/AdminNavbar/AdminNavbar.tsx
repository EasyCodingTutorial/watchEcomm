"use client"
import React from 'react';
import { FaHome, FaClock, FaBlogger, FaUsers, FaComments } from 'react-icons/fa';
import styles from './AdminNavbar.module.css';
import Link from 'next/link';


import { signOut } from 'next-auth/react';

interface NavLinksProps {
    LinkText: string;
    LinkTo: string;
    Icon: React.ElementType;
}

const NavLinks: NavLinksProps[] = [
    {
        LinkText: "Home",
        LinkTo: "/Admin",
        Icon: FaHome,
    },
    {
        LinkText: "Watches",
        LinkTo: "/Admin/Watches",
        Icon: FaClock,
    },
    {
        LinkText: "Blogs",
        LinkTo: "/Admin/Blogs",
        Icon: FaBlogger,
    },
    {
        LinkText: "Users",
        LinkTo: "/Admin/Users",
        Icon: FaUsers,
    },
    {
        LinkText: "Comments",
        LinkTo: "/Admin/Comments",
        Icon: FaComments,
    },
];

export const AdminNavbar = () => {
    return (
        <div className={styles.Sidebar}>
            <div className={styles.LogoBox}>
                <img src="/assets/logo.png" alt="Logo" />
            </div>

            <nav className={styles.NavLinks}>
                {NavLinks.map((I, index) => (
                    <Link href={I.LinkTo} key={index} className={styles.NavItem}>
                        <I.Icon className={styles.Icon} />
                        <span>{I.LinkText}</span>
                    </Link>
                ))}
            </nav>

            <div className={styles.Bottom}>
                <Link href={''} onClick={() => signOut()}>Logout</Link>
            </div>

        </div>
    );
};
