import React from 'react'
// fetching a list of our bookmarks from our api
import BookmarkCard from './BookmarkCard'
import BookmarkForm from '../components/BookmarkForm'
import PropTypes  from 'prop-types'


const Bookmarks = ({ bookmarks }) => {
    

    

    const renderBookmarkCollection = bookmarks.map(bookmark => {
        return <BookmarkCard key={bookmark.id} {...bookmark}/>
    })
    



        return (
            <div className="bookmarks-container">
                <br></br>
                <BookmarkForm />
                <br></br>
                {renderBookmarkCollection}
                
            </div>
        )
        // defining constant bookmarks as this class' state
        // iterating over the collection of bookmarks and returning a Bookmark grid item for each


}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

Bookmarks.defaultProps = {
    bookmarks: []
}

export default Bookmarks