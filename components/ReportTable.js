import React from 'react';
import { hours } from '../data.js';

export default function ReportTable() {
  const locations = ['Calexico', 'Barcelona', 'Vancouver', 'Milano', 'Detroit', 'Addis ababa', 'Dublin', 'Tacoma'];

  // Generate an array with values from 10 to 110
  const values = Array.from({ length: 11 }, (_, index) => (index + 1) * 10);

  const data = {
    Calexico: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
    Barcelona:[36, 24, 42, 36, 48, 42, 42, 36, 24, 42, 24, 42, 30, 48],
    Vancouver: [24, 24, 30, 36, 36, 36, 42, 42, 42, 42, 42, 48, 48, 48],
    Milano: [48, 48, 48, 42, 42, 42, 42, 42, 36, 36, 36, 30, 24, 24],
    Detroit: [96, 84, 60, 48, 84, 48, 72, 84, 84, 96, 72, 84, 48, 72],
    'Addis ababa': [24, 21, 15, 12, 21, 12, 18, 21, 21, 24, 18, 21, 12, 18],
    Dublin: [30, 42, 24, 36, 24, 42, 42, 36, 42, 48, 36, 24, 42, 48],
    Tacoma: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
  };

  // Function to calculate the totals for each hour
  const calculateTotals = () => {
    const totals = new Array(hours.length).fill(0);
    for (const locationData of Object.values(data)) {
      locationData.forEach((value, index) => {
        totals[index] += value;
      });
    }
    return totals;
  };

  // Function to calculate the total for each location
  const calculateLocationTotal = (location) => {
    return data[location].reduce((acc, curr) => acc + curr, 0);
  };

  // Function to calculate the total for the last row (totals for each hour)
  const calculateLastRowTotal = () => {
    const lastRowTotals = calculateTotals();
    return lastRowTotals.reduce((acc, curr) => acc + curr, 0);
  };

  if (hours.length === 0) {
    return (
      <h2 className="w-1/2 mx-auto my-8 text-2xl text-center">No Cookie Stands Available</h2>
    );
  } else {
    return (
      <table className="w-1/2 mx-auto my-8 text-2xl text-center">
        <thead>
          <tr className="bg-green-200">
            <th className="border border-black">Location</th>
            {hours.map((hour, index) => (
              <th key={index} className="border border-black">
                {hour}
              </th>
            ))}
            <th className="border border-black">Totals</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-green-200" : "bg-green-100"}>
              <td className="border border-black">{location}</td>
              {data[location].map((value, colIndex) => (
                <td key={colIndex} className="border border-black">
                  {value}
                </td>
              ))}
              <td className="border border-black">{calculateLocationTotal(location)}</td>
            </tr>
          ))}
          <tr className="bg-green-200">
            <td className="border border-black">Totals</td>
            {calculateTotals().map((total, index) => (
              <td key={index} className="border border-black">
                {total}
              </td>
            ))}
            <td className="border border-black">{calculateLastRowTotal()}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
