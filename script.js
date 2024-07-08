const categoriesNames =  {
    index: "Главная",
    fashion: "Мода",
    tech: "Технологии",
    politics: "Политика",
    sport: "Спорт"
}

const categoriesIds = {
    index: 0,
    fashion: 3,
    tech: 1,
    politics: 4,
    sport: 2
}

const MainArticle = ({title, image, category, description, source}) => {
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

const SmallArticle = ({title, date, source}) => {
    return (
        <article className="small-article">
             <h2 className="small-article__title">{title}</h2>
             <p className="small-article__caption">
                <span className="article-date small-article__date">{new Date(date).toLocaleDateString("ru-RU", {month:"long", day:"numeric"})}</span>
                <span className="article-source small-article__source">{source}</span>
             </p>
             </article>
    )
}

const Navigation = ({className, cb, currentCategory}) => {
    return (
        <nav className={`navigation grid ${className}`}>
            <a href="./index.html" className="navigation__logo">
                <img src="images/logo.svg" className="navigation__logo image" alt="image-logo"/></a>
            <ul className="navigation__list">
                {["index", "fashion", "tech", "politics", "sport"].map((item) => {
                    return (
                        <li key={item} className="navigation__item"><a href="#" onClick={cb} data-href={item} className={`navigation__link ${currentCategory === item ? "navigation__link--active" : ""}`}>{categoriesNames[item]}</a></li>
                    )
                })}
            </ul>
        </nav>
    )
}


const App = () => {
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

const domNode = document.getElementById("root")
const root = ReactDOM.createRoot(domNode)
root.render(<App />)
