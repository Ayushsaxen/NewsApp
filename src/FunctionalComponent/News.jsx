import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
    var [articles, setarticles] = useState([])
    var [totalResults, settotalResults] = useState(0)
    var [page, setpage] = useState(1)
    async function getAPIData() {
        setpage(1)
        var rawdata
        if (props.search === '')
            rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&pageSize=${props.pageSize}&page=${page}&apiKey=c66887260083453088f62057966b20eb`)
        else
            rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&language=${props.language}&pageSize=${props.pageSize}&page=${page}&apiKey=c66887260083453088f62057966b20eb`)
        var result = await rawdata.json()
        setarticles(result.articles)
        settotalResults(result.totalResults)
    }
    const fetchMoreData = async () => {
        setpage(page+1)
        var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&pageSize=${props.pageSize}&page=${page + 1}&apiKey=c66887260083453088f62057966b20eb`)
        var result = await rawdata.json()
        setarticles(articles.concat(result.articles))
    }
    useEffect(() => {
        getAPIData()
    }, [props.language, props.pageSize, props.search, props.q])
    return (
        <>
            <div className='container-fluid'>
                {props.search ?
                    <h5 className='background text-center text-light p-2 mt-1'>News Related to '{props.search}'</h5> :
                    <h5 className='background text-center text-light p-2 mt-1'>{props.q} News Section</h5>
                }
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults}
                    loader={
                        <div className='container-fluid w-100 mt-5' style={{ height: "100px" }}>
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                    }
                >
                    <div className='row'>
                        {
                            articles.map((item, index) => {
                                return <NewsItem
                                    key={index}
                                    title={item.title}
                                    source={item.source.name}
                                    description={item.description}
                                    url={item.url}
                                    pic={item.urlToImage}
                                    date={item.publishedAt}
                                />
                            })
                        }
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}
