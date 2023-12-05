
import Card from './subscard/Card'


function App() {
  const data =[{
    plan:"FREE",
    price:"0",
    user:"Single User",
    isuser:true,
    storage:"5 GB Storage",
    isstorage:true,
    PublicProjects:"Unlimited Public Projects",
    isPublicProjects:true,
    communityAccess:"Community Access",
    iscommunityAccess:true,
    PrivateProjects:"Unlimited Private Projects",
    isPrivateProjects:false,
    Support:"Dedicated Phone Support",
    isSupport:false,
    subDomain:"Free Subdomain",
    issubDomain:false,
    reports:"Monthly Status Reports",
    isreports:false
  },
  {
    plan:"plus",
    price:"9",
    user:"5 Users",
    isuser:true,
    storage:"50 GB Storage",
    isstorage:true,
    PublicProjects:"Unlimited Public Projects",
    isPublicProjects:true,
    communityAccess:"Community Access",
    iscommunityAccess:true,
    PrivateProjects:"Unlimited Private Projects",
    isPrivateProjects:true,
    Support:"Dedicated Phone Support",
    isSupport:true,
    subDomain:"Free Subdomain",
    issubDomain:true,
    reports:"Monthly Status Reports",
    isreports:false
  },
  {
    plan:"PRO",
    price:"49",
    user:"Multi Users",
    isuser:true,
    storage:"50 GB Storage",
    isstorage:true,
    PublicProjects:"Unlimited Public Projects",
    isPublicProjects:true,
    communityAccess:"Community Access",
    iscommunityAccess:true,
    PrivateProjects:"Unlimited Private Projects",
    isPrivateProjects:true,
    Support:"Dedicated Phone Support",
    isSupport:true,
    subDomain:"Free Subdomains",
    issubDomain:true,
    reports:"Monthly Status Reports",
    isreports:true
  }
]

  return (

    
    <>
     <section className="pricing py-5">
  <div className="container">
    <div className="row">
  {
    data.map((e,i)=>{
      return <Card data={e} key={i}/>
    })
  
  }
    

    </div>
  </div>
</section>
    
    </>
  )
}

export default App;
