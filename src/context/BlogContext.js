
import jsonserver from '../api/jsonserver';
import createDataContext from './createDataContext';


const blogReducer = (state,action)=>{
    switch(action.type){
        case 'get_blogposts':
            return action.payload;
        case 'edit_blogpost':
            return state.map((blogPost)=>{ return blogPost.id === action.payload.id ? action.payload : blogPost} );
        case 'delete_blogpost':
            return state.filter((blogPost)=> blogPost.id !== action.payload) ;
        case 'add_blogpost':
            return [...state,{id : Math.floor(Math.random()*999),
                title : action.payload.title,
                content : action.payload.content
             }];
            default :
            return state;
    }
};
const getBlogPosts = dispatch => {
    return async () => {
      const response =  await jsonserver.get('/blogposts');

      dispatch({type:'get_blogposts', payload : response.data})
    }
}

const addBlogPost = dispatch=>{
   return async (title,content,callback)=> {
            await jsonserver.post('/blogposts',{title,content})
        // dispatch({type:'add_blogpost', payload : {title,content}});
         callback();
    }  
}; 

const deleteBlogPost = dispatch=>{
    return async id=> {
            await jsonserver.delete(`/blogposts/${id}`)
           dispatch({type:'delete_blogpost',payload : id});
     }  
 }; 

 
const editBlogPost = dispatch=>{
    return async (id,title,content,callback)=> {
             await jsonserver.put(`/blogposts/${id}`,{title,content}) 
         dispatch({type:'edit_blogpost',payload : {id,title,content}});
         callback();
     }  
 }; 

export const { Context , Provider} = createDataContext(
    blogReducer,
    { addBlogPost,deleteBlogPost, editBlogPost,getBlogPosts },
    []
)