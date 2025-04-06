import React from "react";
import NavBar from "../CommonModule/NavBarModule/NavBar";
import styles from "./Aboutus.module.css";


const Aboutus = () => {
    return (
        <>
            <NavBar />
            <div className={styles.dev}>
                <h1>Under Development</h1>
                <p>
                    Please check the related issues on GitHub:
                    <ul>
                        <li>
                            <a
                                href="https://github.com/Parnab03/WallGodds/issues/84"
                                target="_blank"
                                rel="noopener noreferrer">
                                ABOUT US PAGE
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/Parnab03/WallGodds/issues/88"
                                target="_blank"
                                rel="noopener noreferrer">
                                ABOUT US PAGE ON MOBILE VIEW
                            </a>
                        </li>
                    </ul>
                </p>
            </div>
        </>
    );
};

export default Aboutus;
