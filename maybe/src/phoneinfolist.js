import React, {Component} from 'react'
import PhoneInfo from './phoneinfo'

class PhoneInfoList extends Component {
    static defaultProps = {
        data:[]
    }
    render (){
        const {data, onRemove, onUpdate} = this.props
        const list = data.map(
            info=> (<PhoneInfo 
                        key={info.id} 
                        info = {info} 
                        onRemove={onRemove}
                        onUpdate={onUpdate}/>)
        )
        return (
            <div>
                {list}
            </div>
        )
    }
}

export default PhoneInfoList