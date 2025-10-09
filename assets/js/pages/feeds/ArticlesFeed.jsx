import { useEffect, useState } from "react";
import ArticlesFeedDetails from "./ArticlesFeedDetails";
import ArticlesFeedCardList from "./ArticlesFeedCardList";
import instance from "../../axiosConfig";

const ArticlesFeed = () => {

    const [selectedItem, setSelectedItem] = useState(null);

    const [articlesFeedList, setArticlesFeedList] = useState([]);    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await instance.get(articlesEndPoint);
            const articlesData = response.data.member;
            setArticlesFeedList(articlesData);            
        } catch (error) {
            console.error(error);
            setError(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };
    
    const articlesEndPoint = "/articles?page=1";    

    useEffect(() => {              
        fetchData(articlesEndPoint);        
    }, []); 
    
    //console.log("articlesFeedList :", articlesFeedList);    
    
    const articlesFeed = articlesFeedList;   

    const onHandleClick = (article) => {
        setSelectedItem(article);
    };

    const handleBack = () => {
        setSelectedItem(null);
    };

    const skeletons = [1, 2, 3].map((i) => (
        <div key={i} className="flex w-80 flex-col gap-10">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    ));    
    
    return (
        <>
            <div className="container mx-auto h-full mb-100">
                <div className="flex justify-center items-center gap-5 mt-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center my-5">
                        Article
                    </h1>
                    <a
                        className="btn btn-xs sm:btn-sm btn-neutral"
                        href="/articleNew"
                    >
                        Add new
                    </a>
                </div>
                {loading && (
                    <div className="flex justify-center items-center gap-5 mt-10 my-5">
                        {skeletons}
                    </div>
                )}
                {error && (
                    <div
                        role="alert"
                        className="alert alert-error alert-soft mx-auto w-96 mt-10 my-5"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>{error}</span>
                    </div>
                )}
                {selectedItem ? (
                    <ArticlesFeedDetails
                        {...selectedItem}
                        onBack={handleBack}
                    />
                ) : (
                    <div className="flex flex-wrap justify-center items-center gap-5 my-5">
                        {articlesFeed.map((article) => (
                            <div
                                className="card bg-base-200 hover:bg-slate-100 shadow-xl w-96 shadow-sm mb-3"
                                key={article.id}
                                onClick={() => {
                                    onHandleClick(article);
                                }}
                            >
                                <ArticlesFeedCardList
                                    key={article.id}
                                    {...article}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
export default ArticlesFeed;