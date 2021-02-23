import { ExperienceBar } from '../src/components/ExperienceBar';
import { Profile } from '../src/components/Profile';
import { CompletedChallenges } from '../src/components/CompletedChallenges';
import { Countdown } from '../src/components/Countdown';

import Head from 'next/head';

import styles from '../src/styles/pages/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Início | Move.it</title>
            </Head>

            <ExperienceBar />

            <section>
                <div>
                    <Profile />
                    <CompletedChallenges />
                    <Countdown />
                </div>

                <div>

                </div>
            </section>
        </div>
    )
}