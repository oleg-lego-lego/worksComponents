import React from 'react'
import Affair from './affair/Affair'
import {AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const onClickHandlerValue = (value: FilterType) => () => props.setFilter(value)

    const cnAll = s.button + ' ' + s.all + (props.filter === 'all' ? ' ' + s.active : '')
    const cnHigh = s.button + ' ' + s.high + (props.filter === 'high' ? ' ' + s.active : '')
    const cnMiddle = s.button + ' ' + s.middle + (props.filter === 'middle' ? ' ' + s.active : '')
    const cnLow = s.button + ' ' + s.low + (props.filter === 'low' ? ' ' + s.active : '')

    const mappedAffairs = props.data.map(a => (
        <Affair key={a._id} affair={a} deleteAffairCallback={props.deleteAffairCallback}/>
    ))

    return (
        <div>
            <div className={s.buttonContainer}>
                <button id={'hw2-button-all'} onClick={onClickHandlerValue('all')} className={cnAll}>All</button>
                <button id={'hw2-button-high'} onClick={onClickHandlerValue('high')} className={cnHigh}>High</button>
                <button id={'hw2-button-middle'} onClick={onClickHandlerValue('middle')} className={cnMiddle}>Middle</button>
                <button id={'hw2-button-low'} onClick={onClickHandlerValue('low')} className={cnLow}>Low</button>
            </div>
            <div className={s.affairs}>{mappedAffairs}</div>
        </div>
    )
}

export default Affairs
