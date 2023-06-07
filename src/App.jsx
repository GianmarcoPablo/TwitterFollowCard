import TwitterFollowCard from "./TwitterFollowCard"
function App() {

  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Angel Duran',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo Hernandez',
      isFollowing: false
    },
    {
      userName: "pacoHdez",
      name: "paco Hdez",
      isFollowing: true
    },
    {
      userName: "cabezon",
      name:"tomas",
      isFollowing: false
    }
  ]
  return (
    <div>
      {
        users.map(user=>{
          const {userName,name,isFollowing} = user
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>

          )
        })
      }
    </div>
  )
}

export default App
