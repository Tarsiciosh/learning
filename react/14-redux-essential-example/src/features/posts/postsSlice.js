import { 
  createSlice, 
  nanoid, 
  createAsyncThunk , 
  createSelector,
  createEntityAdapter
} from '@reduxjs/toolkit'
import { client } from '../../api/client'

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date)
})

const initialState = postsAdapter.getInitialState({
  status: 'idle',
  error: null
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts')
  return response.data
})

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  // The payload creator receives the partial `{title, content, user}` object
  async initialPost =>{
    // We send the initial data to the fake API server
    const response = await client.post('/fakeApi/posts', initialPost)
    // the response includes the complete post object, including unique ID
    return response.data
  }
)

const postsSlice = createSlice({
  name: 'posts', // this name is used to create the action type (string)
  initialState, // e.g. {type: 'posts/postAdded'}
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
            reactions:{
              thumbsUp: 0,
              hooray: 0,
              heart: 0,
              rocket: 0,
              eyes: 0,
            }
          }
        }
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.entities[postId] // with normalization 
      if (existingPost) {
        existingPost.reactions[reaction]++
      } 
    },
    postUpdated(state, action){
      const { id, title, content } = action.payload
      const existingPost = state.entities[id] // with normalization 
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action)=> {
        state.status = 'succeded'
        // Add any fetched posts to the array
        // Use the `upsertMany`reducer as a mutating update utility
        postsAdapter.upsertMany(state, action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action)=> {
        state.status = 'failed'
        state.error = action.error.message
      })
      // Use the `addOne`reducer for the fulfilled case
      .addCase(addNewPost.fulfilled, postsAdapter.addOne)
  }
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer

// Export the customized selectors for this adapter using `getSelectors`
export const {
  selectAll: selectAllPosts, //use ES6 destructuring syntax to rename selector functions
  selectById: selectPostById,
  selectIds: selectPostIds
  // Pass in a selector that returns the post slice of state
} = postsAdapter.getSelectors(state => state.posts)

export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter(post => post.user === userId)
)

/*
  export const selectAllPosts = state => state.posts.posts

  export const selectPostById = (state, postId) =>
   state.posts.posts.find(post => post.id === postId)



   .addCase(addNewPost.fulfilled, (state, action) => {
        // We can directly add the new post object to our posts array
        state.posts.push(action.payload)
      })

  
    // Add any fetched posts to the array
    state.posts = state.posts.concat(action.payload)


  const existingPost = state.posts.find(post => post.id === postId)
    
  
  
  const initialState = {
    posts: [],
    status: 'idle',
    error: null
  }



import { sub } from 'date-fns'

const initialState = [
  { 
    id: '1', 
    title: 'First Post!', 
    content: 'Hello!',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    }
  },
  { 
    id: '2', 
    title: 'Second Post', 
    content: 'More text',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    }
  }
]
*/

/*
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts', // this name is used to create the action type (string)
  initialState, // e.g. {type: 'posts/postAdded'}
  reducers: {
    postAdded(state, action){
      state.push(action.payload) // it is possible to use mutating logic thanks to Immer library
    },
    postUpdated(state, action){
      const { id, title, content } = action.payload
      const existingPost = state.find(post => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }
  }
})

export const { postAdded, postUpdated} = postsSlice.actions

export default postsSlice.reducer

*/
