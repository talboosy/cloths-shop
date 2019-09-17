const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://images.pexels.com/photos/2663411/pexels-photo-2663411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://images.pexels.com/photos/2838497/pexels-photo-2838497.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://www.ncronline.org/sites/default/files/styles/article_full_width/public/lefteris-kallergis-j1GiPlvSGWI-unsplash.jpg?itok=PBMC3-PL',
            id: 3,
            linkUrl:'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://images.pexels.com/photos/2823668/pexels-photo-2823668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            size: 'large',
            id: 4,
            linkUrl:'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://images.pexels.com/photos/2657955/pexels-photo-2657955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }

]
}

const directoryReducer = (state= INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;