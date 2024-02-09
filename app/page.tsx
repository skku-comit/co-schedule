import dynamic from 'next/dynamic';
import React from 'react';
import 'smart-webcomponents-react/source/styles/smart.default.css';

// Dynamically import the Scheduler component without SSR
const Scheduler = dynamic(() => import('smart-webcomponents-react/scheduler'), {
  ssr: false, // Disable server-side rendering for this component
});

export default function App() {
  const today = new Date();
  const currentDate = today.getDate();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const data = [
    {
      label: 'Google AdWords Strategy',
      dateStart: new Date(currentYear, currentMonth, currentDate, 9, 0),
      dateEnd: new Date(currentYear, currentMonth, currentDate, 10, 30),
      backgroundColor: '#E67C73',
      borderColor: '#E67C73',
    }
  ];

  const view = 'week';

  const views = ['day', 'week', 'month'];

  const hourStart = 6;

  const timelineDayScale = 'halfHour';

  return (
    <div>
      <Scheduler
        id="scheduler"
        view={view}
        dataSource={data}
        views={views}
        hourStart={hourStart}
        timelineDayScale={timelineDayScale}
      ></Scheduler>
    </div>
  );
}
