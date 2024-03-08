import "./itemCount.css"

const ItemCount = ({ stock , count, setCount}) => {
    
    function add(event) {
        if (count >= stock) {
            event.preventDefault()

        } else {
            setCount(count + 1)
        }
    }
    function res() {
        if (count <= 1) {
            setCount(1);
        } else {
            setCount(count - 1)
        }
    }
    return (
        <>
            <div className="buy-count">
                <button className="btn" onClick={res} >-</button>
                <span className='info'>{count}</span>
                <button className="btn" onClick={add}>+</button>
            </div>
            <br />
        </>
    )
}
export default ItemCount
