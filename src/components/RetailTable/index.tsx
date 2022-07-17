import React from 'react'
import './styles.css'
import { SaleType } from '../../constants'

export interface Props {
    sales: SaleType[]
}

const RetailTable: React.FC<Props> = ({sales,}) => {
    const displayCurrency = (number) => {
        return '$' + (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    }
    return <table className={'table_frame'}>
        <tbody>
        <tr>
            <td className={'table_head'}>{'WEEK ENDING'}</td>
            <td className={'table_head'}>{'RETAIL SALES'}</td>
            <td className={'table_head'}>{'WHOLESALE SALES'}</td>
            <td className={'table_head'}>{'UNITS SOLD'}</td>
            <td className={'table_head'}>{'RETAILER MARGIN'}</td>
        </tr>
        {sales.map(sale => (
            <tr>
                <td className={'table_data'}>{ sale.weekEnding }</td>
                <td className={'table_data'}>{ displayCurrency(sale.retailSales) }</td>
                <td className={'table_data'}>{ displayCurrency(sale.wholesaleSales) }</td>
                <td className={'table_data'}>{ sale.unitsSold }</td>
                <td className={'table_data'}>{ displayCurrency(sale.retailerMargin) }</td>
            </tr>
        ))}
        </tbody>
    </table>
}

export default RetailTable
