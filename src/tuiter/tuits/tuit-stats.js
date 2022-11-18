const TuitStats = ({tuit}) => {
    return(
      <div className="row mt-3">
        {/* render tuits */}
        <div className="col">
          <i className="bi bi-chat-text me-1"></i>{tuit.replies}
        </div>
        <div className="col">
          <i className="bi bi-arrow-right me-1"></i>{tuit.retuits}
        </div>
        <div className="col">
            {/* find inline lgoical operator jsx? */}
        <div>
          Likes: {tuit.likes}
          <i className="bi bi-heart-fill me-2 text-danger"></i>
        </div>
        </div>
        <div className="col">
          <i className="bi bi-share"></i>
        </div>
      </div>
    )
  }
  export default TuitStats;