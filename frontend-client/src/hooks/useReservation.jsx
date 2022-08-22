import { parseISO, eachDayOfInterval, subDays } from 'date-fns';

export function useReservation() {
  function getTakenIntervals(product) {
    let takenIntervals = [];
    for (const reservation of product.reservations) {
      if (reservation.startDate && reservation.endDate) {
        takenIntervals.push({
          start: subDays(new Date(reservation.startDate), 1),
          end: new Date(reservation.endDate),
        });
      }
    }
    return takenIntervals;
  }

  function getDatesInRange(startDate, endDate) {
    return eachDayOfInterval({
      start: new Date(startDate),
      end: new Date(endDate),
    });
  }

  return {
    getTakenIntervals,
    getDatesInRange
  };
}
