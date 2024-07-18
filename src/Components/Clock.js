import useClock from '../Hook/UseClock';
export default function Clock() {
    const [clock] = useClock();
    return (
        <span>{clock}</span>
    )
}
