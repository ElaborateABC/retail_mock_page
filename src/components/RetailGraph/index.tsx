import React, { useEffect, useState } from 'react'
import './styles.css'
import { LineChart } from 'react-chartkick'
import 'chartkick/chart.js'
import { SaleType } from '../../constants'

export interface Props {
    sales: SaleType[]
}

interface LineType {
    name: string,
    data: Object,
}

// const productData: LineType[] = []

const RetailGraph: React.FC<Props> = ({sales,}) => {
    useEffect(() => {
        getSales()
    }, [])
    const [productData, setProductData] = useState<LineType[]>([])
    const getSales = () => {
        const retailSales = {name: 'Retail Sales', data: {}}
        const retailerMargin = {name: 'Retailer Margin', data: {}}
        const wholesaleSales = {name: 'Wholesale Sales', data: {}}
        sales.forEach((sale:SaleType) => {
            retailSales.data[sale.weekEnding] = sale.retailSales
            retailerMargin.data[sale.weekEnding] = sale.retailerMargin
            wholesaleSales.data[sale.weekEnding] = sale.wholesaleSales
        })
        setProductData([retailSales, retailerMargin, wholesaleSales])
    }
    return <div className={'graph_frame'}>
        <LineChart data={productData} colors={['#45a7f6', '#99a4bd', '#cc8899']} />
    </div>
}

export default RetailGraph
