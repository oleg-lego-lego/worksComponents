import React from 'react'
import Clock from './Clock'
import s2 from '../../s1-main/App.module.css'
import s from '../hw09/Clock.module.css'

/*
* 1 - в файле Clock.tsx дописать функции stop, start, onMouseEnter, onMouseLeave
* 2 - в файле Clock.tsx из переменной date вычислить значения stringTime, stringDate, stringDay, stringMonth
* 3 - в файле Clock.tsx дизэйблить кнопки стоп / старт если таймер не запущен / запущен соответственно
* 4 - сделать стили в соответствии с дизайном
* */

const HW9 = () => {
    return (
        <div id={'hw9'} className={s.container}>
            <div className={s2.hwTitle}>
                <h3 className={s2.container}>Homework #9</h3>
            </div>

            <div className={s2.hw}>
                <Clock />
            </div>
        </div>
    )
}

export default HW9
