import React, { useState } from 'react'
import DateTimePicker from 'react-datetime-picker';

export default function Calendar() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="flex justify-center mt-12 ">
            <DateTimePicker onChange={onChange} value={value} />
        </div>
    );
}