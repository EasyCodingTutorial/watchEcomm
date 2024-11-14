import React from 'react'

import styles from './HomeMainContent.module.css'

// For Components
import { WatchesContent } from '../WatchesContent/WatchesContent'

export const HomeMainContent = () => {
    return (
        <div className={styles.Main}>
            <div className={styles.Content}>
                <h6>All  Watches</h6>
                <p>Feedback</p>
            </div>

            {/*  */}
            <WatchesContent
                ImgUrl='/assets/watches/1.jpg' WatchTitle="
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis veritatis eum nihil minima, mollitia quisquam voluptatum esse quam pariatur. Quisquam quis aliquid voluptatem. Dolore dolorem possimus deserunt ad libero qui?" Date={new Date(2024, 10, 5)} Comments='4'
            />


        </div>
    )
}

