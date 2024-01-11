
import { Card } from '../../components';
import styles from './HomeContainer.module.css';

const HomeContainer = () => {

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Card padding={25}>
                    {'testing'}
                </Card>
            </div>
        </div>
    )
}

export default HomeContainer