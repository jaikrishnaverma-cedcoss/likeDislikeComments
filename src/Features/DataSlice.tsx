import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    posts: [

    ],
    users: [{
        name: 'jai krishna verma',
        email: 'jai@gmail.com',
        number: 8787878787,
        pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_jBNGDAl_gCziVLX5q8vuci3Z8VmfK8Rrdtct54&s',
        password: '2222'
    }],
    sessionIndex: -1,
    editIndex: -1,
    msg: ''
}

export const fetchData = createAsyncThunk('DataSlice/fetchData', async () => {
    console.log('aa gya')
    let res: any = await fetch('https://api.pexels.com/v1/curated?page=11&per_page=30', {
        headers: {
            Authorization: '563492ad6f917000010000018ca9c228a1e543fabdc77f6bc56284f9',
            'Content-Type': 'multipart/mixed'
        }
    })
    res = await res.json()
    res = await res.photos.map((x: any) => { let y = { ...x, like: 0, dislike: 0, comments: [] }; return y })
    console.log(res)
    return res

})

const DataSlice: any = createSlice({
    name: 'DataSlice',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push({
                name: action.payload.name,
                email: action.payload.email,
                number: action.payload.number,
                pic: action.payload.pic,
                password: action.payload.password
            })
        },
        deleteBlog: (state, action) => {
            state.posts[action.payload.index].comments.splice(action.payload.commentIndex, 1)
        },
        setSeesionIndex: (state, action) => {
            state.sessionIndex = action.payload
        },
        Like: (state, action) => {
            state.posts[action.payload].like += 1
        },
        Dislike: (state, action) => {
            state.posts[action.payload].dislike += 1
        },
        Comments: (state, action) => {
            state.posts[action.payload.index].comments.push({text:action.payload.comment,userid:state.sessionIndex})
        },
        persistDatbase: (state, action) => {
            state.posts = JSON.parse(action.payload).posts
            state.sessionIndex = JSON.parse(action.payload).sessionIndex
            state.users = JSON.parse(action.payload).users
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.msg = 'loading'
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.msg = 'Api Request Rejected'
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.posts = [...action.payload]
            state.msg = ''
        })
    }
})

export default DataSlice.reducer;
export const { addBlog, addUser, updatePost, deleteBlog, setSeesionIndex, persistDatbase, Like, Dislike, Comments } = DataSlice.actions