import React, { useEffect, useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const Calculator = () => {
  const [startDate, setStartDate] = useState(dayjs().subtract(1, "day"));
  const [endDate, setEndDate] = useState(dayjs());

  const times = {
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000,
    second: 1000,
  };

  const [result, setResult] = useState({
    total: "0 days, 0 hours, 0 minutes, 0 seconds",
    days: "0 days",
    hours: "0 hours",
    minutes: "0 minutes",
    seconds: "0 seconds",
  });

  useEffect(() => {
    let millDiff;
    if (startDate.isAfter(endDate)) {
      millDiff = startDate.diff(endDate);
    } else {
      millDiff = endDate.diff(startDate);
    }
    const days = Math.floor(millDiff / times.day);
    const hours = Math.floor(millDiff / times.hour);
    const minutes = Math.floor(millDiff / times.minute);
    const seconds = Math.floor(millDiff / times.second);

    const tHours = Math.floor((millDiff % times.day) / times.hour);
    const tMinutes = Math.floor(
      ((millDiff % times.day) % times.hour) / times.minute
    );

    setResult({
      total: `${days} days, ${tHours} hours, ${tMinutes} minutes`,
      days,
      hours,
      minutes,
      seconds,
    });
  }, [startDate, endDate]);

  return (
    <section>
      <article>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Start Date and Time"
            value={startDate}
            onChange={(date) => setStartDate(date)}
            ampm={false}
          />
        </LocalizationProvider>
      </article>

      <article>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="End Date and Time"
            value={endDate}
            ampm={false}
            onChange={(date) => setEndDate(date)}
          />
        </LocalizationProvider>
      </article>

      <article className="results">
        <h3>Difference : </h3>
        <div>
          <p>
            Total : <span>{result.total}</span>
          </p>

          <p>
            Days : <span>{result.days}</span>
          </p>

          <p>
            Hours : <span>{result.hours}</span>
          </p>

          <p>
            Minutes : <span>{result.minutes}</span>
          </p>

          <p>
            Seconds : <span>{result.seconds}</span>
          </p>
        </div>
      </article>
    </section>
  );
};

export default Calculator;
