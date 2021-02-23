import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    return (
        <header className={styles.experienceBar}>
            <span>0 EXP</span>
            <div>
                <div style={{ width: '50%' }} />
                <span className={styles.currentExperience} style={{ left: '50%' }}>
                    300 EXP
                </span>
            </div>
            <span>600 EXP</span>
        </header>
    );
}