import React from "react"
import "./MainArticle.css"
export const MainArticle = ({title, image, category, description, source}) => {
    return (
        <article className="main-article">
             <div className="main-article__image-container">
                <img className="main-article__image" src={image} alt=""/>
             </div>
             <div className="main-article__content">
                <span className="main-article__category article-category">{category}</span>
                <h2 className="main-article__title">{title}</h2>
                <p className="main-article__text">{description}</p>
                <span className="main-article__source article-source">{source}</span>
             </div>
        </article>
    )
}