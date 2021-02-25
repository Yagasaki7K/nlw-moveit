import Head from 'next/head';

import { ExperienceBar } from '../src/components/ExperienceBar';
import { Profile } from '../src/components/Profile';
import { CompletedChallenges } from '../src/components/CompletedChallenges';
import { Countdown } from '../src/components/Countdown';

import { ChallengeBox } from '../src/components/ChallengeBox';

import styles from '../src/styles/pages/Home.module.css';
import { CountdownProvider } from '../src/contexts/CountdownContext';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Início | Move.it</title>
            </Head>

            <ExperienceBar />

            <CountdownProvider>
            <section>
                <div>
                    <Profile />
                    <CompletedChallenges />
                    <Countdown />
                </div>

                <div>
                    <ChallengeBox/>
                </div>
            </section>
            </CountdownProvider>
        </div>
    )
}