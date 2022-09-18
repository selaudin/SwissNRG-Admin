import React from 'react'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/companies-list.json'

const customerTableHead = [
    '',
    'name',
    'email',
    'phone',
    'avg. monthly consumption (KwH)',
    'score',
    'location',
    'status'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.avg_monthly_consumption}</td>
        <td>{item.score}</td>
        <td>{item.location}</td>
        <td>{item.status}</td>
    </tr>
)

const Companies = () => {
    return (
        <div>
            <h2 className="page-header">
                Companies
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='30'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customerList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies;
