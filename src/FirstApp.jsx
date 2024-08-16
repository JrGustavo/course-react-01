import PropTypes from "prop-types";


export const FirstApp = ({title, subTitle, name}) => {

    if (!title) {
        throw new Error('La tierra explota');
    }

    return (
        <>
        <h1>{title}</h1>
        <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name:'Helados de la casa'


}