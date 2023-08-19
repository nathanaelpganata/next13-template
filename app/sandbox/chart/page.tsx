'use client';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement
);

const lineChartOptions_1 = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
      borderColor: 'rgba(50, 200, 100, 1)',
      fill: 'start',
      backgroundColor: 'rgba(50, 200, 100, 0.2)',
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

const lineChartData_1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      data: [230, 100, 75, 200, 400, 300, 600],
    },
  ],
};

const lineChartOptions_2 = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
      borderColor: 'rgba(200, 190, 100, 1)',
      fill: 'start',
      backgroundColor: 'rgba(200, 190, 100, 0.2)',
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

const lineChartData_2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      data: [600, 450, 375, 450, 400, 300, 250],
    },
  ],
};
const lineChartOptions_3 = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
      borderColor: 'rgba(100, 190, 200, 1)',
      fill: 'start',
      backgroundColor: 'rgba(100, 190, 200, 0.2)',
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

const lineChartData_3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      data: [330, 100, 75, 200, 400, 300, 310],
    },
  ],
};

const barChartOptions_1 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      align: 'end' as const,
      labels: {
        boxWidth: 7,
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
    title: {
      text: 'Sales Report',
      display: true,
      color: 'rgba(0, 0, 0, 1)',
      font: {
        size: 18,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const barChartData_1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Brutto',
      data: [330, 220, 175, 200, 400, 360, 310],
      backgroundColor: 'rgba(100, 200, 100, 1)',
      barThickness: 10,
    },
    {
      label: 'Netto',
      data: [200, 400, 320, 175, 500, 300, 200],
      backgroundColor: 'rgba(53, 162, 235, 1)',
      barThickness: 10,
    },
  ],
};

const SandboxChartPage = () => {
  return (
    <div className='flex flex-col items-left justify-center pt-10 px-8'>
      <h1 className='text-5xl font-bold'>Chart Sandbox</h1>
      <div className='flex flex-col gap-8 mt-12'>
        {/* Chart Start */}
        {/* Line Charts */}
        <div className='flex flex-wrap flex-row gap-8'>
          {/* 1st Line Chart Start */}
          <div className='relative md:max-w-[360px] w-full flex flex-row p-4 rounded-lg items-center bg-white'>
            <div className='flex flex-col text-slate-500'>
              <h3 className='text-base sm:text-lg font-medium'>Sales Bruto</h3>
              <p className='text-xl sm:text-2xl text-black font-semibold'>
                $306.20
              </p>
              <p className='flex flex-row items-center text-sm sm:text-base text-green-500 font-semibold'>
                {((lineChartData_1.datasets[0].data[
                  lineChartData_1.datasets[0].data.length - 1
                ] -
                  lineChartData_1.datasets[0].data[
                    lineChartData_1.datasets[0].data.length - 2
                  ]) /
                  lineChartData_1.datasets[0].data[
                    lineChartData_1.datasets[0].data.length - 2
                  ]) *
                  100}
                % <BsArrowUp className='w-4 h-4 text-green-500' />
                <span className='text-xs text-slate-400 font-medium mt-1'>
                  than last month
                </span>
              </p>
            </div>
            <div className='absolute right-0 sm:right-4 w-[60%] xs:w-[20%] sm:w-[40%] md:w-[60%] h-24'>
              <Line
                options={lineChartOptions_1}
                data={lineChartData_1}
                width={200}
                height={100}
              />
            </div>
          </div>
          {/* 1st Line Chart End */}
          {/* 2nd Line Chart Start */}
          <div className='relative md:max-w-[360px] w-full flex flex-row p-4 rounded-lg items-center bg-white'>
            <div className='flex flex-col text-slate-500'>
              <h3 className='text-base sm:text-lg font-medium'>Sales Netto</h3>
              <p className='text-xl sm:text-2xl text-black font-semibold'>
                $46.00
              </p>
              <p className='flex flex-row items-center text-sm sm:text-base text-red-500 font-semibold'>
                {(
                  ((lineChartData_2.datasets[0].data[
                    lineChartData_2.datasets[0].data.length - 1
                  ] -
                    lineChartData_2.datasets[0].data[
                      lineChartData_2.datasets[0].data.length - 2
                    ]) /
                    lineChartData_2.datasets[0].data[
                      lineChartData_2.datasets[0].data.length - 2
                    ]) *
                  100
                ).toFixed(1)}
                % <BsArrowDown className='w-4 h-4 text-red-500' />
                <span className='text-xs text-slate-400 font-medium mt-1'>
                  than last month
                </span>
              </p>
            </div>
            <div className='absolute right-0 sm:right-4 w-[60%] xs:w-[20%] sm:w-[40%] md:w-[60%] h-24'>
              <Line
                options={lineChartOptions_2}
                data={lineChartData_2}
                width={200}
                height={100}
              />
            </div>
          </div>
          {/* 2nd Line Chart End */}
          {/* 3rd Line Chart Start */}
          <div className='relative md:max-w-[360px] w-full flex flex-row p-4 rounded-lg items-center bg-white'>
            <div className='flex flex-col text-slate-500'>
              <h3 className='text-base sm:text-lg font-medium'>Sales Netto</h3>
              <p className='text-xl sm:text-2xl text-black font-semibold'>
                $102.85
              </p>
              <p className='flex flex-row items-center text-sm sm:text-base text-green-500 font-semibold'>
                {(
                  ((lineChartData_3.datasets[0].data[
                    lineChartData_3.datasets[0].data.length - 1
                  ] -
                    lineChartData_3.datasets[0].data[
                      lineChartData_3.datasets[0].data.length - 2
                    ]) /
                    lineChartData_3.datasets[0].data[
                      lineChartData_3.datasets[0].data.length - 2
                    ]) *
                  100
                ).toFixed(1)}
                % <BsArrowUp className='w-4 h-4 text-green-500' />
                <span className='text-xs text-slate-400 font-medium mt-1'>
                  than last month
                </span>
              </p>
            </div>
            <div className='absolute right-0 sm:right-4 w-[60%] xs:w-[20%] sm:w-[40%] md:w-[60%] h-24'>
              <Line
                options={lineChartOptions_3}
                data={lineChartData_3}
                width={200}
                height={100}
              />
            </div>
          </div>
          {/* 3rd Line Chart End */}
        </div>
        <div className='bg-white overflow-auto max-w-6xl w-full p-4'>
          <div className='overflow-x-auto w-[70rem]'>
            <Bar options={barChartOptions_1} data={barChartData_1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SandboxChartPage;
