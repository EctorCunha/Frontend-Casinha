import React from 'react';
import { Card, CardHeader, CardContent, Divider } from '@mui/material';
import { Chart } from './Chart';
import { intervalToDuration } from 'date-fns';

export function Stats({ reservations }) {
  const data = {
    thisWeek: reservations.map(reservation => {
        const { priceNight } = reservation.product;
        const { days } = intervalToDuration({
            start: new Date(reservation.startDate),
            end: new Date(reservation.endDate)
        });
        return priceNight * days;
    }),
  };

  const labels = reservations.map(reservation => 'TODO');

  return (
    <Card>
      <CardHeader title="Reservas nos últimos 7 dias" />
      <Divider />
      <CardContent>
        <Chart data={data} labels={labels} />
      </CardContent>
    </Card>
  );
}
