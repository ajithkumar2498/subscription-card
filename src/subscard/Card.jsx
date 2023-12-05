import "./style.css"
function Card({data}){
   
    return( 
        <>
     
    
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={data.isuser?"":"text-muted"}><span className="fa-li"><i className={data.isuser?"fas fa-check":"fas fa-times"}></i></span>{data.user}</li>
              <li className={data.isstorage?"":"text-muted"}><span className="fa-li"><i className={data.isstorage?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>
              <li className={data.isPublicProjects?"":"text-muted"}><span className="fa-li"><i className={data.isPublicProjects?"fas fa-check":"fas fa-times"}></i></span>{data.PublicProjects}</li>
              <li className={data.iscommunityAccess?"":"text-muted"}><span className="fa-li" ><i className={data.iscommunityAccess?"fas fa-check":"fas fa-times"}></i></span>{data.communityAccess}</li>
              <li className={data.isPrivateProjects?"":"text-muted"}><span className="fa-li"><i className={data.isPrivateProjects?"fas fa-check":"fas fa-times"}></i></span>{data.PrivateProjects}</li>
              <li className={data.isSupport?"":"text-muted"}><span className="fa-li"><i className={data.isSupport?"fas fa-check":"fas fa-times"}></i></span>{data.Support}</li>
              <li className={data.issubDomain?"":"text-muted"}><span className="fa-li"><i className={data.issubDomain?"fas fa-check":"fas fa-times"}></i></span>{data.subDomain}</li>
              <li className={data.isreports?"":"text-muted"}><span className="fa-li"><i className={data.isreports?"fas fa-check":"fas fa-times"}></i></span>{data.reports}</li>
            </ul>
            <div className="d-grid">
              <button className="btn btn-primary text-uppercase">Button</button>
            </div>
          </div>
        </div>
      </div>
      

        </>

    )
}
 
export default Card;