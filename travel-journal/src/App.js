import React from "react";
import Header from "./components/Header"
import Main from "./components/Main";
import data from "./data"

export default function App(){
    const dataElements = data.map(details => {
        return (<Main
                    key={details.id}
                    title={details.title}
                    dis={details.description}
                    imgC={details.coverImg}
                    loc={details.location}
                    link={details.googleMapLink}
                    sdate={details.startDate}
                    edate={details.endDate}
              />)
    })

    return(
        <div>
            <Header/>
            <section>
                {dataElements}
            </section>
        </div>
    )
}