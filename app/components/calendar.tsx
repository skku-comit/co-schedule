import React from "react";
import dynamic from "next/dynamic";
import "smart-webcomponents-react/source/styles/smart.default.css";

const Scheduler = dynamic(() => import("smart-webcomponents-react/scheduler"), {
  ssr: false,
  loading: () => <div>Loading gantt chart...</div>,
});

async function getReservations() {
  const res = await fetch(`http://localhost:3000/reservation`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function Calendar() {
  const result = await getReservations();

  console.log(result.reservations);

  const data = result.reservations.map((item: any) => {
    return {
      label: item.title,
      dateStart: item.time,
      dateEnd: new Date(item.time).setHours(new Date(item.time).getHours() + 1),
      backgroundColor: item.color,
      borderColor: item.color,
      textColor: item.textColor,
      id: item.id,
    };
  });

  const view = "week";

  const views = ["day", "week", "month"];

  const hourStart = 0;

  const timelineDayScale = "halfHour";

  return (
    <Scheduler
      id="scheduler"
      view={view}
      dataSource={data}
      views={views}
      hourStart={hourStart}
      timelineDayScale={timelineDayScale}
    />
  );
}
