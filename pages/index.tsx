import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from "../src/components/CompletedChallenges";
import { Countdown } from "../src/components/Countdown";
import { ExperienceBar } from "../src/components/ExperienceBar";
import { Profile } from "../src/components/Profile";
import { ChallengeBox } from "../src/components/ChallengeBox";

import styles from '../src/styles/pages/Home.module.css';
import { CountdownProvider } from '../src/contexts/CountdownContext';
import { ChallengesProvider } from '../src/contexts/ChallengeContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
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
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}