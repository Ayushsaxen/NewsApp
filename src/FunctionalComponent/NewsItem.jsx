import React from 'react'

export default function NewsItem(props) {
    return (
        <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
            <div className="card">
                <img src={props.pic} height="200px" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{ height: "110px" }}>{props.title.slice(0, 80) + "..."}</h5>
                    <h6 style={{ fontSize: "13px" }}>Source : {props.source}</h6>
                    <h6 style={{ fontSize: "13px" }}>Date:{`${new Date(props.date).getDate()}/${new Date(props.date).getMonth() + 1}/${new Date(props.date).getFullYear()} ${new Date(props.date).getHours()}:${new Date(props.date).getMinutes()}`}</h6>
                    <hr />
                    <p className="card-text" style={{ height: "250px" }}>{props.description}</p>
                    <a href={props.url} className="btn background text-light w-100 btn-sm mybtn">Read Full Article</a>
                </div>
            </div>
        </div>
    )
}
