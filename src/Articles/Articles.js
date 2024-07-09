import { MainArticle } from "../MainArticle/MainArticle.js"
import { SmallArticle } from "../SmallArticle/SmallArticle.js"
import React from "react"
import "./Articles.css"
export const Articles = ({ articles }) => {
    return (
        <section className="articles">
                    <div className="container grid">
                        <section className="articles__big-column">
                            {articles.items.slice(0, 3).map(item => {
                                return (
                                    <MainArticle
                                        key={item.title}
                                        title={item.title}
                                        image={item.image}
                                        category={articles.categories.find(id => id === item.category_id)}
                                        description={item.description}
                                        source={articles.sources.find(({id}) => id === item.source_id).name}
                                    />
                                )
                            })}
                        </section>
                        <section className="articles__small-column">
                            {articles.items.slice(3, 12).map(item => {
                                return (
                                    <SmallArticle
                                        key={item.title}
                                    title={item.title}
                                    date={item.date}
                                    source={articles.sources.find(({id}) => id === item.source_id).name}
                                    />
                                )
                            })}
                        </section>
                    </div>
                </section>
    )
}