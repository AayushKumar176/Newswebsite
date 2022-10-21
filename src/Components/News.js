// import React, { useEffect, useState } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

// const News =(props)=> {

//    const  [articles, setarticles] = useState([])
//    const [loading, setloading] = useState(true)
//    const [page, setpage] = useState(1)
//    const [totalResults, settotalResults] = useState(0)
//   //  document.title= `${this.capitalizeFirstLetter(props.category)} -NewsMonkey `;

//    const capitalizeFirstLetter=(string)=> {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
  
 
//   // constructor(props){
//   //   super(props);
//   //   // console.log("Hello i am a constructor from news item");
//   //   this.state={
//   //     articles:[],
//   //     loading:true,
//   //     page:1,
//   //     totalResults:0
     
//   //   }
//   //   document.title= `${this.capitalizeFirstLetter(props.category)} -NewsMonkey `;


// const updateNews= async () =>{
//   // console.log("cdm");
//   props.setProgress(10);
//   const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
//   // this.setState({loading:true})
//   setloading(true);
//   let data= await fetch(url);
//   props.setProgress(30);
//   let parsedData= await data.json();
//   props.setProgress(70);
//   // console.log(parsedData);
//   setarticles(parsedData.articles);
//   settotalResults(parsedData.totalResults);
//   setloading(false);
//   // this.setState({
//   //   articles: parsedData.articles,
//   //   totalResults:parsedData.totalResults, 
//   //   loading:false
//   //   })
//     props.setProgress(100);

// }

// useEffect(() => {
//   updateNews();
// }, [])


// // async componentDidMount(){
//   // console.log("cdm");
//   // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=49ad8ef79b1141cb8810a45224e34566&page=1&pageSize=${props.pageSize}`;
//   // this.setState({loading:true})
//   // let data= await fetch(url);
//   // let parsedData= await data.json();
//   // console.log(parsedData);
//   // this.setState({
//   //   articles: parsedData.articles,
//   //   totalResults:parsedData.totalResults, 
//   //   loading:false
//   //   })
 
// // }

// const handlePreviousClick= async ()=>{
//   // console.log("Previous");
//   // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=49ad8ef79b1141cb8810a45224e34566&page=${this.state.page-1} 
//   // &pageSize=${props.pageSize}`;
//   // this.setState({loading:true})
//   // let data= await fetch(url);
//   // let parsedData= await data.json();
//   // console.log(parsedData);
//   // this.setState({
//   //   page:this.state.page-1,
//   //   articles:parsedData.articles,
//   //   loading:false
//   // })

//   // this.setState({page: this.state.page-1})
//   setpage(page-1);
//   updateNews();
// }
// const handleNextClick= async ()=>{
// //   console.log("Next");
// //   if(this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)){

// //   }
// // else{
// //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=49ad8ef79b1141cb8810a45224e34566&page=${this.state.page+1} 
// //   &pageSize=${props.pageSize}`;
// //   this.setState({loading:true})
// //   let data= await fetch(url);
// //   let parsedData= await data.json();
// //   console.log(parsedData);
// //   this.setState({
// //     page:this.state.page+1,
// //     articles:parsedData.articles,
// //     loading:false
// //   })
// // }
// //  this.setState({page: this.state.page+1});
// setpage(page+1);
//     updateNews();

// }
// const fetchMoreData = async () => {
//   // this.setState({page:this.state.page+1})
//   setpage(page+1);
//   const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=49ad8ef79b1141cb8810a45224e34566&page=${page}&pageSize=${props.pageSize}`;
//   // this.setState({loading:true})
//   let data= await fetch(url);
//   let parsedData= await data.json();
//   // console.log(parsedData);
//   setarticles(parsedData.articles);
//   settotalResults(parsedData.totalResults);
//   // this.setState({
//   //   articles: this.state.articles.concat(parsedData.articles),
//   //   totalResults:parsedData.totalResults
//   //   // loading:false
//   //   })

// };

//     // console.log("render")
//     return (
//       <>
//       <h1 className="text-center" style={{margin:'35px 0px'}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
//       {loading && <Spinner/>}
//       <InfiniteScroll
//           dataLength={articles.length}
//           next={fetchMoreData}
//           hasMore={articles.length !== totalResults}
//           loader={ <Spinner/>}
//         >
//           <div className="container">
//        <div className="row">
//            {articles.map((element)=>{
        
//               return <div className="col-md-4" key={element.url}>
//        <NewsItem  title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        
//         </div>
//       })};
//         {/* <div className="col-md-4">
//        <NewsItem title="my title " description="my desc"/>
       
//        </div>
//        <div className="col-md-4">
//        <NewsItem title="my title " description="my desc"/>
       
//       </div> */}
//         </div>
//         </div>
//       </InfiniteScroll>
//         {/* <div className="container d-flex justify-content-between">
//         <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
//         <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//         </div> */}
//         </>
//     )

// }

// News.defaultProps={
//   country:'in',
//   pageSize:8,
//   category:'general'
// }

// News.propTypes={
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string
// }

// export default News

import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News