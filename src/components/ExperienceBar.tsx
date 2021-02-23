export function ExperienceBar() {
    return (
        <header className="experience-bar">
            <span>0 EXP</span>
            <div>
                <div style={{ width: '50%' }} />
                <span className="current-experience" style={{ left: '50%'}}>
                    300 EXP
                </span>
            </div>
            <span>600 EXP</span>
        </header>
    );
}