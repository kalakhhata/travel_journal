import React from "react";

export default function Main(props)
{
    return(
    <section className="ucon"> 
        <main className="mcontainer">
            <div className="container">
                <div>
                    <img src={props.imgC}  />
                </div>
                <div>
                    <p>
                        {props.loc}
                        <a href={props.link}>View on Google Maps</a>
                    </p>
                    <h1>{props.title}</h1>
                    <h4>{props.sdate} - {props.edate}</h4>
                    <p>{props.dis}</p>
                </div>
            </div>
        </main>
    </section>
    )
}