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
          {tuit.liked &&<i className="bi me-1 bi-heart-fill text-primary"></i>}
          {!tuit.liked &&<i className="bi bi-heart me-1"></i>}
          {tuit.likes}
        </div>
        <div className="col">
          <i className="bi bi-share"></i>
        </div>
      </div>
    )
  }
  export default TuitStats;