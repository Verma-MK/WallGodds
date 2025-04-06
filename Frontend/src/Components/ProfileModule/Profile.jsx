import React from "react";
import NavBar from "../CommonModule/NavBarModule/NavBar";
import styles from "./Profile.module.css";

const Profile = () => {
    return (
        <>
            <NavBar />
            <div className={styles.dev}>
                <h1>Under Construction</h1>
                <p>
                    Our team is working on this page functionality and it will
                    be available soon.
                </p>
            </div>
        </>
    );
};

export default Profile;
