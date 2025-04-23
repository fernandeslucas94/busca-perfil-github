import errorCardStyles from '../ErrorCard/ErrorCard.module.css';

const ErrorCard = () => {
    return (
        <>
            <div className={errorCardStyles.cardContainer}>
                <span className={errorCardStyles.errorMessage}>Nenhum perfil foi encontrado com esse nome de usuário.</span>
                <span className={errorCardStyles.errorMessage}>Tente novamente</span>
            </div>
        </>
    )
}

export default ErrorCard;