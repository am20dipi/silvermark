import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem' 
import { createBookmark } from '../actions/index'
import { connect } from 'react-redux'
import InputLabel from '@material-ui/core/InputLabel'




class BookmarkForm extends React.Component {
    state = {
        bookmark: {
            headline: '',
            description: '',
            web_url: '',
            favorite: false,
            category_id: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createBookmark(this.state)
        document.querySelector(".bookmark-form").reset()
    }


    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSelectChange = (e) => {
        this.setState({
            category_id: e.target.value
        })
    }




    render() {
        const { headline, description, web_url, category_id } = this.state
        return (
            <>
                <p>ADD BOOKMARK</p>
                <form className="bookmark-form" onSubmit={this.handleSubmit} >
                    <TextField id="headline-input" type="text" name="headline"   placeholder="headline" defaultValue={headline} onChange={this.handleChange}/><br></br>
                    <TextField id="description-input" type="text" name="description"  placeholder="description"  defaultValue={description} onChange={this.handleChange}/><br></br>
                    <TextField id="web-url-input" type="text" name="web_url"  placeholder="url" defaultValue={web_url}  onChange={this.handleChange}/><br></br>
                    <Select labelId="demo-simple-select-autowidth-label" id="category-input" value="category" onChange={this.handleSelectChange}>
                        <MenuItem value="" disabled>category</MenuItem>
                            {this.props.categories.map(category => {
                                return <MenuItem key={category.id} name={category.name} value={category.id} >{category.name}</MenuItem>
                            })}
                        </Select>
                        <br></br>
                    <Button type="submit" className="submit-button" >Submit</Button><br></br>
                </form>
            </>
        )
    }
}

const mapState = (currentState) => {
    return {
        categories: currentState.categories.categories
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      createBookmark: (bookmark) => dispatch(createBookmark(bookmark))
    }
}




export default connect(mapState, mapDispatchToProps)(BookmarkForm)

// controlled forms: a form whose input (or elements) are controlled by React's state; control the value through state