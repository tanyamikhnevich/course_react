import styles from './News.module.css';

const NamesNew = (props) => {
    return (
        <div>
            <div>{props.lala}</div>
        </div>
    );
}
const Text = (props) => {
    return (
        <div>
            <div>{props.kuku}</div>
        </div>
    );
}



const News = (props) => {
    let nemesNewsElements = props.state.namesData.map(n => <NamesNew lala={n.nameD}/>)
    let textElementsN = props.state.textData.map(t => <Text kuku={t.textN}/>)
    return (
        <div>
            {nemesNewsElements}
            {textElementsN}
        </div>
    );
}
export default News