import React from "react";
import ChartContainer from "../containers/ChartContainer";
import ChartEntry from "./ChartEntry";

const ChartList = ({entries}) => {

    const entryDetails = entries.map((entry, index) => {
        return <ChartEntry entry={entry} key={index} index={index}/>
    })

    return (
        <>
            <ol>
                {entryDetails}
            </ol>
        </>
    )
}

export default ChartList;