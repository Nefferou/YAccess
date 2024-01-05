import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import carpooling from "../public/carpooling.svg";
import parking from "../public/parking.svg";
import ChoiceCard from "../components/ChoiceCard/ChoiceCard";
import Title from "../components/ui/Title/Title";
import DriverComponent from '../components/DriverComponent/DriverComponent';
import Badge from '../models/Badge';

export default async function Home() {
  const session = await getServerSession(authOptions)
  const badges = [
    Badge.SHIELD,
    Badge.TCHAT_BUBBLE,
    Badge.COMPASS,
    Badge.MEDAL,
  ]
  return (
    <main className="h-screen px-8 pt-20 flex flex-col items-center gap-8">
        <Title text="Home"></Title>
        <DriverComponent driverPP={carpooling} driverBadges={badges} driverName='Jean-Mari-bigard' driverRating={4.5}/>
        <div className="flex flex-col gap-10">
            <ChoiceCard title="Carpooling" svg={carpooling} onLeftImage={false} link="/carpooling"></ChoiceCard>
            <ChoiceCard title="Parking" svg={parking} onLeftImage={true} link="/parking"></ChoiceCard>
        </div>
    </main>
  )
}
