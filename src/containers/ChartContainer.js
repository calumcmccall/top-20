import React, {useState, useEffect} from "react";
import ChartList from "../components/ChartList";

const ChartContainer = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        getEntries();
    }, [])

    const getEntries = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(entries => setEntries(entries.feed.entry))
        console.log(entries);
    }

    return (
        <ChartList entries={entries}/>
    )
}

export default ChartContainer;