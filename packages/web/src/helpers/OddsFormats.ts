export function fractionalOdds(odds: number): string {
    if (odds <= 1) {
        return '—';
    }

    const numerator = Math.round(odds - 1);
    return `${numerator}:1`;
}