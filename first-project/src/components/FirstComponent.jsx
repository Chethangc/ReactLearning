// const FirstComponent = (props) => {
//   return (
//     <div>{props.data}</div>
//   )
// }
//D structing
const FirstComponent = ({data, fn}) => {
      return (
        <div>
        <div>{data}</div>
        <button onClick={()=>{fn('Others')}}>Set others</button>
        </div>
      )
    }

export default FirstComponent;