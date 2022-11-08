import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style.scss'

const Cover = ({ url, alt, cn, type="circle", size="medium", progress=false, progressData, progressStyle, style }) => {

    const percentage = progressData;
    const progressDefaultStyle = {
        // Customize the path, i.e. the "completed progress"
        path: {
            // Path color
            stroke: `rgb(62, 189, 75)`,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
            // Customize transition animation
            transition: 'stroke-dashoffset 0.5s ease 0s',
        },
        // Customize the circle behind the path, i.e. the "total progress"
        trail: {
            // Trail color
            stroke: '#DDE0E4',
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt'
        },
        // Customize the text
        text: {
            // Text color
            fill: '#f88',
            // Text size
            fontSize: '16px',
        },
        // Customize background - only used when the `background` prop is true
        background: {
            fill: '#3e98c7',
        }
    }

    const progressCustomStyle = {
        ...progressDefaultStyle,
        ...progressStyle
    }

    return (
        <div className={cn ? `${'component cover'} ${cn}` : `${'component cover'}`} xvariant={type} xsize={size} style={style}>
            {
                !progress && 
                <div className="cover_image">
                    <img src={url} alt={alt} />
                </div>
            }
            {
                progress && 
                <CircularProgressbarWithChildren className={'cover-progress'} value={percentage} text={`${percentage}%`} styles={progressCustomStyle}>
                    <div className="cover_image">
                        <img src={url} alt={alt} />
                    </div>
                </CircularProgressbarWithChildren>
            }
        </div>
    )
}

export default Cover