import { React } from 'react'

const TitleAndOpt = (props) => {

    const style = {
        backgroundColor: "transparent",
        border: "none",
        borderBottom: "2px solid black"
    }

    return (
        <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
            <div className="title">
                <h2 className="fs-2">{props.title}</h2>
            </div>
            <div className="jenisObat">
                <select className='pt-2 pb-2 fs-5' style={style}>
                    <option value="1">{props.opt1}</option>
                    <option value="2">{props.opt2}</option>
                    <option value="3">{props.opt3}</option>
                </select>
            </div>
        </div>
    )
}

export default TitleAndOpt