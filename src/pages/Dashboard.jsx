import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

const chartOptions = {
    series: [{
        name: 'Households',
        data: [300,400,500,350,300,400,250,450,550]
    }, {
        name: 'Companies',
        data: [1000, 1200, 900, 1300, 1250, 1300, 1400, 1124, 1300]
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

const topCustomers = {
    head: [
        'User ID',
        'KwH Spent',
        'Status'
    ],
    body: [
        {
            id: "#OD1711",
            date: "17 Jun 2021",
            price: "$900",
            status: "Normal usage"
        },
        {
            id: "#OD1712",
            date: "1 Jun 2021",
            price: "$400",
            status: "Low usage"
        },
        {
            id: "#OD1713",
            date: "27 Jun 2021",
            price: "$200",
            status: "Over Limit"
        },
        {
            id: "#OD1712",
            date: "1 Jun 2021",
            price: "$400",
            status: "Low usage"
        },
        {
            id: "#OD1713",
            date: "27 Jun 2021",
            price: "$200",
            status: "High Usage"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.price}</td>
        <td>{item.status}</td>
    </tr>
)

const latestOrders = {
    header: [
        "User ID",
        // "user",
        "KwH spent",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            date: "17 Jun 2021",
            price: "$900",
            status: "Normal usage"
        },
        {
            id: "#OD1712",
            // user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "Low usage"
        },
        {
            id: "#OD1713",
            // user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "Over Limit"
        },
        {
            id: "#OD1712",
            // user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "Low usage"
        },
        {
            id: "#OD1713",
            // user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "High Usage"
        }
    ]
}

const orderStatus = {
    "Normal usage": "primary",
    "Over Limit": "warning",
    "Low usage": "success",
    "High Usage": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
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
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>Highest Spending Household</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>Highest Spending Buildings</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
