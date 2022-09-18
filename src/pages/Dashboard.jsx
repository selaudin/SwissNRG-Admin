import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'
import StatusCard2 from "../components/status-card/StatusCard2";

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
        "User ID",
        "KwH spent",
        "date",
        "Power status",
        "     "
    ],
    body: [
        {
            id: "#OD1711",
            date: "18.09.2021 08:33:05",
            price: "1121",
            status: "Deactivated",
            button: "Activate"
        },
        {
            id: "#OD1712",
            date: "18.09.2021 08:31:55",
            price: "985",
            status: "Deactivated",
            button: "Activate"
        },
        {
            id: "#OD1713",
            date: "18.09.2021 08:32:23",
            price: "942",
            status: "Deactivated",
            button: "Activate"
        },
        {
            id: "#OD1712",
            date: "18.09.2021 08:31:13",
            price: "913",
            status: "Deactivated",
            button: "Activate"
        },
        {
            id: "#OD1713",
            date: "18.09.2021 08:30:57",
            price: "892",
            status: "Activated",
            button: "Deactivate"
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
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
        <td>
            <button type="submit"><Badge type={orderStatus[item.button]} content={item.button}/></button>
        </td>
    </tr>
)

const latestOrders = {
    header: [
        "User ID",
        "KwH spent",
        "date",
        "Power status",
        "     "
    ],
    body: [
        {
            id: "#OD1711",
            date: "18.09.2021 08:23:33",
            price: "14730",
            status: "Deactivated",
            button: "Activate"
        },
        {
            id: "#OD1712",
            date: "18.09.2021 08:23:05",
            price: "9832",
            status: "Activated",
            button: "Deactivate"
        },
        {
            id: "#OD1713",
            date: "18.09.2021 08:23:10",
            price: "9566",
            status: "Deactivated",
            button: "Activate"
        },
        {
            id: "#OD1712",
            // user: "frank iva",
            date: "18.09.2021 08:23:20",
            price: "9211",
            status: "Activated",
            button: "Deactivate"
        },
        {
            id: "#OD1713",
            // user: "anthony baker",
            date: "18.09.2021 08:22:15",
            price: "8921",
            status: "Activated",
            button: "Deactivate"
        }
    ]
}

const orderStatus = {
    "Activate": "success",
    "Deactivate": "danger",
    "Activated": "primary",
    "Deactivated": "primary"
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
        <td>
            <button type="submit"><Badge type={orderStatus[item.button]} content={item.button}/></button>
        </td>
    </tr>
)

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Dashboard - Basel Canton</h2>
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
                        <div className="col-12" key='powerLimit'>
                            <StatusCard2
                                icon='bx bx-power-off'
                                title='Set Power limit for OCTOBER'
                            />
                        </div>
                        <div className="col-12" key='powerLimit'>
                            <StatusCard2
                                icon='bx bx-message-dots'
                                title='Send Message to all Users'
                            />
                        </div>
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
                <div className="col-6">
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
                <div className="col-6">
                    <div className="card">
                        <div className="card__header">
                            <h3>Highest Spending Companies</h3>
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
