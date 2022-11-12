import React from 'react';
import { LoadingOutlined } from '@ant-design/icons'

const Loading = () => {
    return <div style={{
        height: 60,
        width:'100%',
        marginTop:'50vh',
        display:'flex',
        justifyContent:'center',
        color: '#6262D2',
        fontSize: 60
    }}><LoadingOutlined/></div>
}

export default Loading;