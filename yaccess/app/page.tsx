import carpooling from "../public/carpooling.svg";
import parking from "../public/parking.svg";
import ChoiceCard from "../components/ChoiceCard/ChoiceCard";

export default function Home() {
  return (
    <main className="h-screen px-8 pt-20 flex flex-col items-center gap-8">
        <h1 className="text-3xl font-semibold tracking-wider">Home</h1>
        <div className="flex flex-col gap-10">
            <ChoiceCard title="Carpooling" svg={carpooling} onLeftImage={false} link="/carpooling"></ChoiceCard>
            <ChoiceCard title="Parking" svg={parking} onLeftImage={true} link="/parking"></ChoiceCard>
        </div>
    </main>
  )
}
