import React, { useState, Fragment, useRef, useEffect} from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import das from '../../assets/das.png'
import './Scheduler.scss'

const d = new Date();

function Scheduler() {
     const currentDate = d.getDate();
    const hour  = d.getHours();
    const [dateList, setDateList] = useState([])
    const [toggledDate, setToggleDate] = useState()
    const [toggledTime, setToggleTime] = useState()
    const [error, setError] = useState(false)

    const timeSlotRef = useRef([])

    const history = useHistory()
    const location = useLocation()
    
    
    const getTimeSlots = (date) => {
        
        const list = [];
        
        for (let i = 11; i <= 20; i++) {
            if (date === new Date().getDate()){
                if (i >= (hour + 2)) {
                    list.push(i)
                }
            } else {
                list.push(i)
            }
        }
        
        return list
    }
    
    
    const handleDateSelection = (e) => {
        const target = e.target.closest("label[data-date]")
        if (!target) return
        setToggleDate(+target.getAttribute("data-date"))
    }
    const handleTimeSelection = (e) => {
        const target = e.target.closest("div[data-time]")
        if (!target) return
        setToggleTime(+target.getAttribute("data-time"))
    }
    
    useEffect(() => {
        timeSlotRef.current.forEach(slot => {
            if (!slot) return
            slot.classList.remove('active')
            if (+slot.getAttribute('data-time') === toggledTime) {
                slot.classList.add('active')
            }
        })
        
    }, [toggledTime])
    
    useEffect(() => {
        setToggleTime(undefined)
    }, [toggledDate])
    
    const confirmTimeSlot = (e) => {
        if (!toggledTime) {
            setError(true)
        } else {
            console.log( {
                selectedDate : toggledDate,
                selectedTime : toggledTime,
            })
            if (!location.state.email || !location.state.password) {
                history.push('/')
                return
            }
        }
    }
    
    
    
    useEffect(() => {
        
        if (!toggledTime) return
        setError(false)
        
    }, [toggledTime])


    useEffect(() => {
        if (hour >= 20) {
            setToggleDate(currentDate+1)
            setDateList([currentDate + 1, currentDate + 2])
        } else {
            setToggleDate(currentDate)
            setDateList([currentDate,currentDate + 1, currentDate + 2])
        }
    }, [])
    

    return (
        <section className="timeslot__wrapper">
            <div className="timeslot__box">
                <img className="timebox__logo" src={das} alt="das" />
                <strong className="timebox__header">Schedule Your Demo Class</strong>
                <p className="timebox__text">Limited Slot Left!</p>
                {error && <h5 className="error__text">Make sure to select a time slot!</h5>}
                <p className="container__title">Select a date</p>
                <div className="schedule__container">
                    {dateList.map((date, index) => {
                        d.setDate(date)
                        const day = new Intl.DateTimeFormat('en-US',{weekday : 'short'}).format(d)
                        const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(d)
                        return (
                            index ===0 ? 
                            <Fragment key={index} >
                                    <input type="radio" name="dateSlot" id={`dateSlot_${index}`} defaultChecked/>
                                    <label className="booking__date" htmlFor={`dateSlot_${index}`} data-date={date} onClick={handleDateSelection}>
                                    <b>{day}</b>
                                    <b>{date}</b>
                                    {month}
                                </label>
                            </Fragment>
                                :
                            <Fragment key={index} >
                                    <input type="radio" name="dateSlot" id={`dateSlot_${index}`}/>
                                    <label className="booking__date" htmlFor={`dateSlot_${index}`} data-date={date} onClick={handleDateSelection}>
                                    <b>{day}</b>
                                    <b>{date}</b>
                                    {month}
                                </label>
                            </Fragment> 
                        )
                    })}
                    
                </div>
                <p className="container__title">Select a time for <span> {d.toLocaleString('en', {weekday: 'short'})}, {toggledDate} {d.toLocaleString('en', {month: 'short'})}</span></p>
                <div className="schedule__container">
                    {getTimeSlots(toggledDate).map((slot, index) => {
                        const meridiem = slot >= 12 ? 'PM' : 'AM';
                    
                        return (
                            <div
                                key={index}
                                ref={r => timeSlotRef.current[index] = r}
                                className="booking__time"
                                onClick={handleTimeSelection}
                                data-time={slot}
                            >
                                <b>{slot > 12 ? slot - 12 : slot}:00 {meridiem}</b>
                            </div>
                        )
                    })}
                </div>
                <p className="timebox__text">Due to high demand, it’s difficult to reschedule a trial class.
                    Please pick your slot carefully.</p>
                <button className="timebox__btn" onClick={confirmTimeSlot}>Confirm Your Slot</button>
            </div>
        </section>  
    )
}

export default Scheduler
