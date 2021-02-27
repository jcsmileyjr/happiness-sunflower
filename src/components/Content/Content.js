import './content.css'

const Content = () => {
    return(
        <main className="content--section">
            <h1 className="content__title">What is Happiness</h1>
            <ul className="content--bullet__horizontal animation">
                <li className="content--bullet">Unshackled Creativity</li>
                <li className="content--bullet">Overflowing Laughter</li>
                <li className="content--bullet">Unrestrained Joy</li>
                <li className="content--bullet">Released Contentment</li>
            </ul>
        </main>
    );
}

export default Content;