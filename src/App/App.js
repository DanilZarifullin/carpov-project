import { categoriesIds } from "../Utils.js"
import { Navigation } from "../Navigation/Navigation.js"
import { Articles } from "../Articles/Articles.js"
import React from "react"
import "./App.css"
export const App = () => {
    const [category, setCategory] = React.useState("index")
    const [articles, setArticles] = React.useState({items:[], sources:[], categories:[]})

    const onNavClick = (e) => {
        e.preventDefault()
        setCategory(e.currentTarget.dataset.href)
    }
    React.useEffect(() => {
        fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + categoriesIds[category])
            .then(response => response.json())
            .then(response =>  {
                setArticles(response)
            })
    },[category])
    console.log(articles)
    return (
        <React.Fragment>
            <header className="header">
                <div className="container">
                    <Navigation
                    className="header-navigation"
                    cb={onNavClick}
                    currentCategory={category}
                    />
                </div>
            </header>
            <main className="main">
                <Articles 
                    articles={articles}
                />
            </main>
            <footer className="footer">
                <div className="container">
                    <Navigation
                        className="footer-navigation"
                        cb={onNavClick}
                        currentCategory={category}
                    />
                    <div className="footer__column">
                        <p className="footer__text">Сделано на Frontend курсе в <a href="#" className="footer__link">Karpov.Courses</a></p>
                        <p className="footer__copyright">© 2021</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>

    )
}