import "./EventsTable.css";
import { useEventsTable } from "./EventsTable";
import MarketGroup from "../MarketGroup";

const EventsTable = () => {
	// const events = useEvents(20);
	const { events, marketGroupConfig } = useEventsTable();

	return (
		<div className="events-table">
			<div className="header">Football</div>
			<div className="event-list">
				{events.map((v, k) => (
					<div className="event" key={k}>
						<div className="event-info">
							<div>
								{k} {v.sportName}/{v.leagueName}
							</div>
							{v.fixtureName.split(" vs. ").map((n) => (
								<div key={n}>{n}</div>
							))}
						</div>

						{marketGroupConfig.map((c) => (
							<MarketGroup key={c.id} label={c.label} id={c.id} />
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default EventsTable;
