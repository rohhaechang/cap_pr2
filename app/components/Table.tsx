import React from "react";
import styles from '../page.module.css'
import LineChart from "./LineChart";

interface TableProps {
    params: { [key: string]: { [key: string]: any } };
    name: string;
}

export default function Table({ params, name}: TableProps) {
    const years = Object.keys(params[Object.keys(params)[0]]);

    return (
        <div>
            <p style={{color: "black"}}>{name}</p>
            <LineChart name={name} params={params}></LineChart>

            <table className={styles.table}>
            <thead>
                <tr>
                    <th>Category</th>
                    {years.map(year => (
                        <th key={year}>{year}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {Object.entries(params).map(([category, values]: [string, { [key: string]: any }]) => (
                    <tr key={category} style={{marginLeft: "25px"}}>
                        <td>{category}</td>
                        {years.map(year => (
                            <td key={year}>{values[year]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>

        </div>

    );
}


