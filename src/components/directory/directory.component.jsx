import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://images.pexels.com/photos/2663411/pexels-photo-2663411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://images.pexels.com/photos/2838497/pexels-photo-2838497.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://www.ncronline.org/sites/default/files/styles/article_full_width/public/lefteris-kallergis-j1GiPlvSGWI-unsplash.jpg?itok=PBMC3-PL',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.pexels.com/photos/2823668/pexels-photo-2823668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.pexels.com/photos/2657955/pexels-photo-2657955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    size: 'large',
                    id: 5
                }
        
        ]
        }
    }

    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    )

                    )
                }
            </div>
        )
    }
}

export default Directory;