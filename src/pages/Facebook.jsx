import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import Sidebar from '../components/sidebar/Sidebar'

import statusCards from '../assets/JsonData/status-card-data.json'

import logo from '../assets/images/facebook.png'

const chartOptions = {
    series: [ {
        data: [
          {
            x: 'Analysis',
            y: [
              new Date('2019-02-27').getTime(),
              new Date('2019-03-04').getTime()
            ],
            fillColor: '#008FFB'
          },
          {
            x: 'Design',
            y: [
              new Date('2019-03-04').getTime(),
              new Date('2019-03-08').getTime()
            ],
            fillColor: '#00E396'
          },
          {
            x: 'Coding',
            y: [
              new Date('2019-03-07').getTime(),
              new Date('2019-03-10').getTime()
            ],
            fillColor: '#775DD0'
          },
          {
            x: 'Testing',
            y: [
              new Date('2019-03-08').getTime(),
              new Date('2019-03-12').getTime()
            ],
            fillColor: '#FEB019'
          },
          {
            x: 'Deployment',
            y: [
              new Date('2019-03-12').getTime(),
              new Date('2019-03-17').getTime()
            ],
            fillColor: '#FF4560'
          }
        ]
      }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const options = {
    series: [44, 55, 13, 33],
    chart: {
    width: 380,
    type: 'donut',
  },
  dataLabels: {
    enabled: false
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    position: 'right',
    offsetY: 0,
    height: 230,
  }
};

const topCustomers = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)


const Facebook = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    const top_logo = {
        display: "flex",
        alignItems: "center"
    }

    return (
        <div>
            <h2 className="page-header">Facebook</h2>

            <div className="row">
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='rangeBar'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                

                <div className="col-4">
                   <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...options,
                                theme: { mode: 'dark'}
                            } : {
                                ...options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='radar'
                            height='100%'
                        />
                    </div>
                </div>

                <div style={top_logo}>
                    <img src={logo} alt="company logo" />
                </div>

                <div className="col-4">
                   <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...options,
                                theme: { mode: 'dark'}
                            } : {
                                ...options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='radar'
                            height='100%'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facebook
