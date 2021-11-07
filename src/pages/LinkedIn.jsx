import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'


import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import Sidebar from '../components/sidebar/Sidebar'

import statusCards from '../assets/JsonData/status-card-data.json'
import {useState} from 'react'
import axios from 'axios'

import logo from '../assets/images/linkedin.png'


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


const LinkedIn = () => {
    const top_logo = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    const hours = []
    for(let i = 0; i < 24; i++){
        hours.push(i);
    }

    const chartDefault = {
        series: [{
            name: 'Likes',
            data: [40,70,20,90,36,80,30,91,60]
        }, {
            name: 'Shares',
            data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 100]
        },
        {
            name: 'Reacts',
            data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 100]
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
                categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'] // x
            },
    
            legend: {
                position: 'top'
            },
            grid: {
                show: false
            }
        }
    }

    const [chartOptions, setChartOption] = useState(chartDefault);

    axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';
    axios.get("http://localhost:5000/likestime").then(
        res => {
            let likes = [];
            let reactions = [];
            let shares = [];
            for(var i = 0; i < 24; i++){
                likes.push(res.data['likes'][i.toString()])
                reactions.push(res.data['comms'][i.toString()])
                shares.push(res.data['shares'][i.toString()])
            }
            
            chartDefault.series[0].data = likes;
            chartDefault.series[1].data = shares;
            chartDefault.series[2].data = reactions;
            setChartOption(chartDefault);
        }
    )
    

    return (
        <div>
            <h2 className="page-header">Twitter</h2>

            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
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
                            type='bar'
                            height='100%'
                        />
                    </div>
                </div>
            
                <div className="col-4">
                    <div className="card full-height">
                        {/* chart */}
                        <div style={top_logo}>
                    <       img src={logo} alt="company logo" />
                        </div>

                    </div>
                </div>
                <div className="col-8">
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
                            type='area'
                            height='100%'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinkedIn
