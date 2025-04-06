import React from "react";
import NavBar from "../CommonModule/NavBarModule/NavBar";
import styles from "./Home.module.css";

const Home = () => {
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
                                href="https://github.com/Parnab03/WallGodds/issues/79"
                                target="_blank"
                                rel="noopener noreferrer">
                                HOME PAGE
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/Parnab03/WallGodds/issues/82"
                                target="_blank"
                                rel="noopener noreferrer">
                                HOME PAGE ON MOBILE VIEW
                            </a>
                        </li>
                    </ul>
                </p>
            </div>
        </>
    );
};

export default Home;
