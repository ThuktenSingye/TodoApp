import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./DateRange.css"

import {DateRangePicker} from 'react-date-range';
function DateRange() {
    const [startDate, setStartDate]  = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }
    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
   
  return (
    <div className='dateRange'>
       <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        showSelectionPreview={true}
      />
    </div>
  )
}

export default DateRange