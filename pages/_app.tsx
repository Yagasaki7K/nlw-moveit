import '../src/styles/global.css'

import { ChallengesProvider, ChallengesContext } from '../src/contexts/ChallengeContext'
import { ChallengeBox } from '../src/components/ChallengeBox'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
    return (
        <ChallengesProvider>
            <Component {...pageProps} />
        </ChallengesProvider>
    )
}

export default MyApp
