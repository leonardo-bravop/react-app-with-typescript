interface Props {
  // children: React.ReactNode
  subs: Array<{
    nick: string
    avatar: string
    subMonths: number
    description?: string
  }>
}

// const List:React.FunctionComponent<Props>  = ({subs}) => {
// const List:React.FC<Props>  = ({subs}) => {
const List = ({subs}: Props) => {
// export default function List ({subs} : Props) {
// export default function List (props : Props) {
//   const {subs} = props

  return ( <ul>
        {subs.map(sub=>{
          return (
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`avatar for ${sub.nick}`}/>
              <h4>{sub.nick}</h4>
              <p>{sub.description?.substring(0,100)}</p>
            </li>
          )
        })}
      </ul>)
}

export default List