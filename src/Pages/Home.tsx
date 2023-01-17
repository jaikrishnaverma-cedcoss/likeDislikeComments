import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Comments, deleteBlog, Dislike, Like } from '../Features/DataSlice'
import { Mystate } from './MainType'

const Home = () => {
  const state:Mystate = useSelector((state: Mystate) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const Deletor = (index: number, commentIndex: number) => {
    if (window.confirm("are you sure to delete this Comment ?")) {
      dispatch(deleteBlog({ index, commentIndex }))
    }
  }

  const LikeDislike = (index: number, like: boolean) => {
    if (like) {
      dispatch(Like(index))
    } else {
      dispatch(Dislike(index))
    }
  }

  const CommentsHandler = (e: any, i: number) => {
    e.preventDefault();
    if (state.sessionIndex != -1) {
      (e.target.comment.value) ? dispatch(Comments({ index: i, comment: e.target.comment.value })) : alert('empty comments not allowed.')
    }
    else {
      alert('you have to login first.')
      navigate('/login')
    }
    e.target.reset()
  }

  if(state.msg=='loading')
return <div className="col-12 d-flex justify-content-center align-items-center" style={{minHeight:'75vh'}}>
  <img src='Infinity-1s-200px.gif' alt="spinner" width={200} height={200}/></div> 

  return (
    <>
      <div className="container px-sm-5 " id="custom-cards">
        <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-3 parents">
          {state.posts.map((x: any, i: number) =>
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item shadow">
                  <h2 className="accordion-header" id={`panelsStayOpen-heading${i}`}>
                    <button className="accordion-button" style={{ backgroundColor: x.avg_color, color: 'white' }} type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${i}`} aria-expanded="true" aria-controls={`panelsStayOpen-collapse${i}`}>
                      <img className="accordion-body" src={x.src.medium} style={{ maxWidth: '310px', maxHeight: '350px', margin: '0px auto' }} />
                    </button>
                  </h2>
                  <div id={`panelsStayOpen-collapse${i}`} className="accordion-collapse collapse show" aria-labelledby={`panelsStayOpen-heading${i}`}>
                    <div className="col-12 px-2">
                      <p className="text-success m-1">Comments</p>
                    </div>
                    <div className="list-group">
                      {x.comments.map((y: any, j: number) => {
                          return <a href="#" className="list-group-item list-group-item-action " aria-current="true">
                            <div className="d-flex w-100 justify-content-between">
                              <h6 className="mb-1 bolder ">#{state.users[y.userid].name}</h6>
                              <small>{50 - j} days ago {
                                  ((state.posts[i].comments[j].userid == state.sessionIndex)) ?
                                    <i onClick={() => Deletor(i, j)} className="bi bi-trash-fill mx-1"></i> :
                                    <i></i>
                                }
                              </small>
                            </div>
                            <small>{y.text}.</small>
                          </a>
                        })}
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-between align-items-center">
                    <small className=" m-2 bold" style={{ color: 'grey' }}>Photographer:&nbsp; {x.photographer}</small>
                    <p className='m-0 '>
                      <i onClick={() => LikeDislike(i, true)} className={`bi bi-hand-thumbs-up${(x.like > 0) ? '-fill text-primary' : ''} `}>{x.like}</i>
                      <i onClick={() => LikeDislike(i, false)} className={`bi mx-2 bi-hand-thumbs-down${(x.dislike > 0) ? '-fill' : ''} `}>{x.dislike}</i>
                    </p>
                  </div>
                  <form className="input-group" onSubmit={(e) => CommentsHandler(e, i)}>
                    <span className="input-group-text">Comments({x.comments.length})</span>
                    <input className="form-control" name="comment" aria-label="With textarea" placeholder="Enter Your Comment Here..."></input>
                    <button type='submit' className='visually-hidden' ></button>
                  </form>
                </div>
              </div>)}
        </div>
      </div>
    </>
  )
}

export default Home