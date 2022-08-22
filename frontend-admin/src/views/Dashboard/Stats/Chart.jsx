import { Line } from 'react-chartjs-2';
import { formatPrice } from '@/utils/formatPrice';
import { Box } from '@mui/material';

export function Chart({ data, labels }) {

  const lineData = canvas => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgb(2,0,150, 0.12)');
    gradient.addColorStop(1, 'rgb(2,0,36, 0)');

    return {
      datasets: [
        {
          label: '',
          backgroundColor: gradient,
          borderColor: 'green',
          data: data.thisWeek,
          pointBorderWidth: 4,
          pointRotation: 6,
          pointBackgroundColor: 'green',
          pointBorderColor: '#fff',
          pointHoverBorderWidth: 1,
          pointRadius: 8,
          fill: true,
        },
      ],
      labels,
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cornerRadius: 20,
    legend: {
      display: false,
    },
    layout: {
      padding: 0,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            padding: 20,
            fontColor: 'gray',
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color:'gray',
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor:'gray',
          },
          ticks: {
            padding: 20,
            fontColor: 'black',
            beginAtZero: true,
            min: 0,
            maxTicksLimit: 5,
            callback: value => {
              return formatPrice(value);
            },
          },
        },
      ],
    },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      caretSize: 10,
      yPadding: 20,
      xPadding: 20,
      borderWidth: 1,
      borderColor: 'gray',
      backgroundColor: 'white',
      titleFontColor: 'gray',
      bodyFontColor: 'lime',
      footerFontColor: 'gray',
      callbacks: {
        title: () => {},
        label: tooltipItem => {
          return formatPrice(tooltipItem.yLabel);
        },
      },
    },
  };

  console.log(lineData, options)

  return (
    <Box sx={{ position: 'relative' }}>
      <Line data={lineData} options={options} />
    </Box>
  );
}
