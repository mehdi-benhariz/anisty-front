import UserNameSmall from "../components/UserNameSmall";
import Tournoi from "./Tournaoi";
import EventChess from "../components/EventChess";
export default function TournoiPage() {
  return (
    <div className="flex flex-col gap-4">
      <UserNameSmall />
      <EventChess />
    </div>
  );
}
